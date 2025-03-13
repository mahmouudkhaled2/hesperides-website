"use client";

import Image from "next/image";
import React from "react";
import { heroBG } from "../../../../../../../../public";
import { useQuery } from "@tanstack/react-query";
import { getBoardTrustees } from "@/lib/apis/explore-university.api";
import { useLocale, useTranslations } from "next-intl";

interface BoardTrusteesType {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
}

export default function BoardOfTrustees() {
  // Translations
  const t = useTranslations();
  const locale = useLocale();

  // Queries
  const {
    data: boardData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["board-trustees"],
    queryFn: () => getBoardTrustees(locale),
  });

  // Variables
  const presidentInfo = boardData.data.filter(
    (item: BoardTrusteesType) => item.position === "University President"
  );

  const restOfBoardInfo = boardData.data.filter(
    (item: BoardTrusteesType) => item.position !== "University President"
  );

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
          {t("university-board-of-trustees")}
        </h1>
      </section>

      {isLoading ? (
        <section className="h-screen flex items-center justify-center">
          <div className="spinner"></div>
        </section>
      ) : (
        <section className="my-16 px-6">
          {/* President informations */}
          <div className="w-full my-10 px-6">
            <div className="bg-white rounded-2xl w-1/3  mx-auto shadow-sm p-3">
              <div className="relative min-h-[350px] rounded-xl overflow-hidden mb-3">
                <Image
                  src={presidentInfo.image}
                  alt={presidentInfo.position}
                  fill
                  sizes="100%"
                  className="object-cover"
                  priority={true}
                />
              </div>

              <div className="flex flex-col items-center gap-4">
                <h2 className="text-4xl text-zinc-900 font-semibold">
                  {presidentInfo.name}
                </h2>

                <p className="text-zinc-900 text-lg">
                  {presidentInfo.position}
                </p>
              </div>
            </div>
          </div>

          {/* The rest of boad informations */}
          <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-6">
            {restOfBoardInfo.map((item: BoardTrusteesType, i: number) => (
              <div key={i} className="w-full my-10 px-6">
                <div className="bg-white rounded-2xl w-1/3  mx-auto shadow-sm p-3">
                  <div className="relative min-h-[350px] rounded-xl overflow-hidden mb-3">
                    <Image
                      src={item.image}
                      alt={item.position}
                      fill
                      sizes="100%"
                      className="object-cover"
                      priority={true}
                    />
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <h2 className="text-4xl text-zinc-900 font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-zinc-900 text-lg">{item.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
