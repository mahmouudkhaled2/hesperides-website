"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { LibraryData } from './page';

type Props = {
  initialData: LibraryData[];
};

const ClientSearch = ({ initialData }: Props) => {
  const t = useTranslations();
  const [libraryData] = useState<LibraryData[]>(initialData);
  const [activeCategory, setActiveCategory] = useState(
    initialData[0]?.categories?.[0]?.name || ''
  );

  if (!libraryData.length || !libraryData[0]?.categories?.length) {
    return <p className="text-center text-red-500">No categories available.</p>;
  }

  return (
    <div className="bg-white mt-12 p-4">
      <h1 className="lg:text-5xl text-3xl font-bold mr-6 mb-10">{t("search")}</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b-2 pb-2">
        {libraryData[0].categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category.name)}
            aria-selected={activeCategory === category.name}
            role="tab"
            className={`px-4 py-2 text-lg font-semibold transition-all duration-300 ${
              activeCategory === category.name
                ? 'border-b-4 border-yellow-600 text-yellow-600'
                : 'text-gray-500 hover:text-yellow-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="flex space-x-4 overflow-x-auto p-4">
        {libraryData.map((library, index) => (
          <div key={index} className="p-4 bg-white text-center rounded-2xl min-w-[280px]">
            {library.books
              .filter((book) => book.category === activeCategory)
              .map((book, bookIndex) => (
                <div key={bookIndex} className="p-4 border rounded-lg shadow-lg max-w-64">
                  <Image
                    src={book.image}
                    alt={book.name}
                    width={256}
                    height={160}
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-xl font-bold">{book.name}</h3>
                  <p className="text-gray-500">{book.description}</p>
                  <a
                    href={book.book}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
                  >
                    {t("readMore")}
                  </a>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSearch;