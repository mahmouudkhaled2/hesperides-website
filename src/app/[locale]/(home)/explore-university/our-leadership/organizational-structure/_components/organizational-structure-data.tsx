'use client'

import Image from 'next/image';
import React from 'react'
import { heroBG } from '../../../../../../../../public';
import { useQuery } from '@tanstack/react-query';
import { useLocale, useTranslations } from 'next-intl';
import { getOrgStructure } from '@/lib/apis/explore-university.api';

export default function OrganizationalStructureSection() {
  // Translations
  const t = useTranslations();
  const locale = useLocale();

  // Queries
  const {
    data: structureData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["board-trustees"],
    queryFn: () => getOrgStructure(locale),
  });
  
  if (isError) {
    return (
      <div className="h-screen flex items-center justify-center ">
        <p className="text-red-600 text-2xl">{error.message}</p>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-black relative h-screen">
        <Image
          alt="Hesperides Explore"
          src={heroBG}
          fill
          sizes="100%"
          className="w-full lg:h-3/4 h-1/2 object-cover"
        />
        <h1 className="text-white text-3xl lg:text-7xl font-bold absolute lg:top-[80%] bottom-[10%] right-6 flex items-center justify-center">
          {t("university-org-structure")}
        </h1>
      </section>

      {isLoading ? (
        <section className="h-screen flex items-center justify-center">
          <div className="spinner"></div>
        </section>
      ) : (
        <section className="my-16 px-6">

          {/* Org structure description */}
          <div className="flex">
            <p className="text-3xl">
              {structureData?.data?.description}
            </p>
          </div>

          <div className='w-full bg-white h-[150vh] rounded-2xl overflow-hidden my-10 relative'>
              <Image src={structureData.data.structure_university} alt={'Organizational structure'} fill sizes='100%' className='object-fit p-6'/>
          </div>
        </section>
      )}
    </>
  );
}
