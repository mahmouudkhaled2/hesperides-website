// app/[locale]/search.tsx
import { fetchLibrary } from '@/utlis/libraryTeam';
import { getLocale } from 'next-intl/server'; 
import { LibraryData } from './page';
import ClientSearch from './ClientSearch';

export const dynamic = 'force-dynamic';

export default async function Search() {
  const locale = await getLocale(); 
  let libraryData: LibraryData[] = [];
  let error: string | null = null;

  try {
    const response = await fetchLibrary(locale);
    libraryData = response;
    if (!libraryData?.length || !libraryData[0]?.categories?.length) {
      error = 'No categories available.';
    }
  } catch (err) {
    console.error('Error fetching library data:', err);
    error = 'Error loading data.';
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return <ClientSearch initialData={libraryData} />;
}