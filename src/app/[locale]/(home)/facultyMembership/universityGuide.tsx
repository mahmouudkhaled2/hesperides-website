"use client";
import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { search } from "../../../../../public";
import { fetchCollegeById, College, Category, fetchColleges } from "@/utlis/collages";

const UniversityGuide = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [selectedCollege, setSelectedCollege] = React.useState<string>("");


  const {
    data: colleges = [],
    isLoading: collegesLoading,
  } = useQuery<College[]>({
    queryKey: ["colleges", locale],
    queryFn: () => fetchColleges(locale),
  });

  const {
    data: categories = [],
    isLoading: categoriesLoading,
    isFetching,
  } = useQuery<Category[]>({
    queryKey: ["categories", selectedCollege, locale],
    queryFn: () => fetchCollegeById(selectedCollege, locale),
    enabled: !!selectedCollege,
  });

  console.log("Categories Data:", categories);

  return (
    <div>
      <h1 className="lg:text-4xl text-3xl font-bold mb-6 rounded-xl">
        {t("UniversitiesGuide")}
      </h1>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-4 mb-20">
        <select
          className="border-none rounded-xl h-14 px-6 bg-[#F3F1F1] text-[#00000080] w-full hover:bg-none transition-colors duration-20  "
          onChange={(e) => {
            const value = e.target.value;
            setSelectedCollege(value);
            console.log("College Selected:", value);
          }}
          value={selectedCollege}
          disabled={collegesLoading}
        >
          <option value="" >{t("choosecollage")}</option>
          {colleges.map((college) => (
            <option key={college.id} value={college.id.toString()}>
              {college.name}
            </option>
          ))}
        </select>

        <select
          className="border-none h-14 px-6 rounded-xl bg-[#F3F1F1] text-[#00000080] w-full hover:bg-none   " 
          disabled={categoriesLoading || isFetching || !selectedCollege}
        >
          <option value="">{t("chooseDepartment")}</option>
          {categories.length > 0 ? (
            categories.map((category) => (
              <option
                key={category?.id || category?.title}
                value={category?.id || category?.title}
              >
                {category.title}
              </option>
            ))
          ) : (
            <option value="" disabled>
              {categoriesLoading || isFetching ? t("loadingDepartments") : t("noDepartments")}
            </option>
          )}
        </select>
        <Image alt="search" src={search} className="w-12 h-12" />
      </div>
    </div>
  );
};

export default UniversityGuide;