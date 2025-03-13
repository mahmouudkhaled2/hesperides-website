import Image from "next/image";
import { LibraryData } from "./page";

type HeroProps = {
  libraryData: LibraryData | null;
  error?: string | null;
  locale: string;
};

export default async function Hero({ libraryData, error, locale }: HeroProps) {
  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!libraryData) {
    return <p className="text-center text-lg font-semibold">No data available.</p>;
  }

  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center gap-12 justify-center p-6 my-8 text-black">
      {libraryData.image && (
        <Image
          src={libraryData.image}
          width={500}
          height={700}
          alt={libraryData.title || "Library Image"}
          className="rounded-lg shadow-lg h-96"
        />
      )}
      <div className={`text-center ${locale === 'ar' ? 'lg:text-right' : 'lg:text-start'}`}>
        <h2 className="text-4xl font-bold mb-4">{libraryData.description}</h2>
      </div>
    </div>
  );
}