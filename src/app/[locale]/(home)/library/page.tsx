import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { library } from '../../../../../public';
import SwiperComponent from './swiper';
import { fetchLibrary } from '@/utlis/libraryTeam';
import Search from './search';
import Staff from './members';
import Hero from './hero';

export type LibraryData = {
  title: string;
  description: string;
  image: string;
  slider: {
    url: string;
  }[];
  staff: {
    name: string;
    description: string;
    image: string;
  }[];
  books: {
    name: string;
    description: string;
    category: string;
    image: string;
    book: string;
  }[];
  categories: {
    name: string;
  }[];
};

const Library = async ({ params }: { params: { locale: string } }) => {
  const locale = params.locale;
  let libraryData: LibraryData | null = null;

  let fetchError: string | null = null; 
  try {
    const data = await fetchLibrary(locale);
    libraryData = data && data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Error fetching library data:', error);
    fetchError = 'Error loading library data.';
  }

  const error = fetchError; 
  const t = await getTranslations();

  if (error) {
    return (
      <div className="bg-[#F3F1F1] text-center text-red-500 p-6">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F3F1F1]">
      <div className="w-full bg-black relative">
        <Image
          alt="Hesperides Explore"
          src={library}
          className="w-full lg:h-3/4 h-1/2 object-cover"
        />
        <h1
          className={`text-white text-3xl lg:text-7xl font-bold absolute lg:top-[80%] bottom-[10%] ${
            locale === 'ar' ? 'right-6' : 'left-6'
          } flex items-center justify-center`}
        >
          {t('Library')}
        </h1>
      </div>
      <Hero locale={locale} libraryData={libraryData} error={error} />
      <Search />
      {libraryData && <Staff staff={libraryData.staff} />}
      <SwiperComponent libraryData={libraryData} />
    </div>
  );
};

export default Library;