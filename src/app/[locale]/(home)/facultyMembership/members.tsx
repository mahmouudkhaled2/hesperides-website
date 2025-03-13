"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl"; 
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMembers } from "@/utlis/facultyMembers";
import { FaArrowLeft } from "react-icons/fa";

// type FacultyMember = {
//   name: string;
//   description: string;
//   category: string;
//   image: string;
// };

const Members = () => {
  const t = useTranslations(); 
  const locale = useLocale();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["members", locale], 
    queryFn: ({ pageParam = 1 }) => fetchMembers(locale, pageParam),
    getNextPageParam: (lastPage, allPages) => {

      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const members = data?.pages.flat() || [];

  return (
    <div className="bg-[#F3F1F1] w-full h-auto p-6 rounded-xl">
      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member, index) => (
       <div
       key={index}
       className="p-2 bg-white text-center rounded-[16px] transition-colors duration-1000 hover:bg-yellow-600 hover:text-white"
     >
          
            <Image
              alt="user"
              src={member.image}
              width={306}
              height={266}
              className="w-full h-[266px] rounded-[16px] fill"
            />
            <h1 className="text-2xl font-bold mt-4">{member.name}</h1>
            <p className="text-xl font-bold mt-2">{member.description}</p>
          </div>
        ))}
      </div>

      {isLoading && <p className="text-center mt-6">{t("loadingMembers")}</p>}
      {error && (
        <p className="text-red-500 text-center mt-6">
          {t("errorFetchingMembers")}: {error.message}
        </p>
      )}

      {/* Load More Button */}
      {!isLoading && hasNextPage && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="bg-yellow-600 text-white px-4 py-3 rounded-md w-44 lg:text-2xl text-lg flex items-center justify-center gap-2 mt-3"
          >
            {isFetchingNextPage ? (
              <>
                {t("loading")} <FaArrowLeft />
              </>
            ) : (
              <>
                {t("loadMore")} <FaArrowLeft />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Members;