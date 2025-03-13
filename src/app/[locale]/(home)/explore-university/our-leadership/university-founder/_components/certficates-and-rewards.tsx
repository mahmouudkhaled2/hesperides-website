/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "use-intl";
import { heroBG } from "../../../../../../../../public";

// Awards
interface Award {
  name: string;
  description: string;
  image: string;
}

// Medals
interface Medal {
  name: string;
  description: string;
  image: string;
}

// Certificates
interface Certificate {
  name: string;
  description: string;
  image: string;
}

type CertficatesAndAwardsProps = {
  certficates: Certificate[];
  awards: Award[];
  medals: Medal[];
}

export default function CertficatesAndAwards({ certficates ,awards, medals } : CertficatesAndAwardsProps) {

  // Translation
  const t = useTranslations();

  // States
  const [activeTab, setActiveTab] = useState<'certficates' | 'awards' | 'medals'>("certficates");

  return (
    <section>
      {/* Tabs */}
      <div>
        <div className="w-fit flex gap-10 me-auto border-b-2 ps-5">
          {/* Certficates tab */}
          <button 
          type={"button"} 
          onClick={() => setActiveTab("certficates")}
          className={`py-6 px-4 text-5xl font-semibold ${activeTab === 'certficates' && 'border-b-4 border-[#c49732]'} `}>
            {t("certficates")}
          </button>

          {/* Awards tab */}
          <button 
          type={"button"} 
          onClick={() => setActiveTab("awards")}
          className={`py-6 px-4 text-5xl font-semibold ${activeTab === 'awards' && 'border-b-4 border-[#c49732]'}`}>
            {t("awards")}
          </button>

          {/* ’Medals tab */}
          <button 
          type={"button"} 
          onClick={() => setActiveTab("medals")}
          className={`py-6 px-4 text-5xl font-semibold ${activeTab === 'medals' && 'border-b-4 border-[#c49732]'}`}>
            {t("medals")}
          </button>
        </div>
      </div>

      {activeTab === 'certficates' && 
        certficates.map((cerficate, i: number ) => (
          <div key={i} className="w-full my-7 px-6">
            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="bg-white rounded-2xl shadow-sm p-3">
                <div className="relative min-h-[200px] w-full rounded-xl overflow-hidden mb-3">
                  <Image
                    src={cerficate.image}
                    alt={"alt"}
                    fill
                    sizes="100%"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  {/* <p className="text-[#c49732] text-lg">
                      أكتوبر 01, 2018
                  </p> */}

                  <h2 className="text-4xl text-zinc-900 font-semibold">
                    {cerficate.name}
                  </h2>

                  <p className="text-zinc-900 text-lg">
                    {cerficate.description}
                  </p>

                  <h3 className="text-[#c49732] text-2xl font-semibold">جامعة ماك ماستر الكندية</h3>
                </div>
              </div>
            </div>
          </div>
        ))
      }

      {activeTab === 'awards' && 
        awards.map((award, i: number ) => (
          <div key={i} className="w-full my-7 px-6">
            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="bg-white rounded-2xl shadow-sm p-3">
                <div className="relative min-h-[200px] w-full rounded-xl overflow-hidden mb-3">
                  <Image
                    src={award.image}
                    alt={"alt"}
                    fill
                    sizes="100%"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  {/* <p className="text-[#c49732] text-lg">
                      أكتوبر 01, 2018
                  </p> */}

                  <h2 className="text-4xl text-zinc-900 font-semibold">
                    {award.name}
                  </h2>

                  <p className="text-zinc-900 text-lg">
                    {award.description}
                  </p>

                  <h3 className="text-[#c49732] text-2xl font-semibold">جامعة ماك ماستر الكندية</h3>
                </div>
              </div>
            </div>
          </div>
        ))
      }

      {activeTab === 'medals' && 
        medals.map((medal, i: number ) => (
          <div key={i} className="w-full my-7 px-6">
            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="bg-white rounded-2xl shadow-sm p-3">
                <div className="relative min-h-[200px] w-full rounded-xl overflow-hidden mb-3">
                  <Image
                    src={medal.image}
                    alt={"alt"}
                    fill
                    sizes="100%"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  {/* <p className="text-[#c49732] text-lg">
                      أكتوبر 01, 2018
                  </p> */}

                  <h2 className="text-4xl text-zinc-900 font-semibold">
                    {medal.name}
                  </h2>

                  <p className="text-zinc-900 text-lg">
                    {medal.description}
                  </p>

                  <h3 className="text-[#c49732] text-2xl font-semibold">جامعة ماك ماستر الكندية</h3>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </section>
  );
}
