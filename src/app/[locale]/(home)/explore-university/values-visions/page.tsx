
import Image from 'next/image';
import { explore } from '../../../../../../public';
import AccordionComponent from '@/components/AccordionComponent';
import { getValuesAndVision } from '@/lib/apis/values-vision.api';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function  Page() {

  // Translation
  const t = await getTranslations();
  const local = await getLocale();

  // Variables
  const data = await getValuesAndVision(local);

  return (
    <div className="bg-[#f8f8f8]">
      {/* Hero Section */}
      <div className="w-full bg-black relative">
        <Image
          alt="Hesperides Explore"
          src={explore}
          className="w-full lg:h-3/4 h-1/2 object-cover"
        />
        <h1 className="text-white text-3xl lg:text-7xl font-bold absolute lg:top-[80%] bottom-[10%] right-6 flex items-center justify-center">
          {t("values-vision")}
        </h1>
      </div>

      <div className="my-16">
        <div className="relative">
          <AccordionComponent AccordionComponentData={data.data}/>
        </div>
      </div>
    </div>
  );
}
