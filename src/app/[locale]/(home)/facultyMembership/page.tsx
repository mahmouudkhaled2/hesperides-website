"use client"
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl"; // These will be removed if not needed
import { explore } from "../../../../../public";
import Members from "./members";
import UniversityGuide from "./universityGuide";

// This is now a server component (no "use client")
const FacultyMembership = () => {
  const t = useTranslations(); // This can stay if `next-intl` supports server components
  const locale = useLocale();   // Same for locale

  return (
    <div>
      <div className="w-full bg-black relative">
        <Image
          alt="Hesperides Explore"
          src={explore}
          className="w-full lg:h-3/4 h-1/2 object-cover"
        />
        <h1
          className={`text-white text-3xl lg:text-7xl font-bold absolute lg:top-[80%] bottom-[10%] ${
            locale === "ar" ? "right-6" : "left-6"
          } flex items-center justify-center`}
        >
          {t("Usefulsources")}
        </h1>
      </div>
      <div className="mt-12 mb-10">
        <h1 className="lg:text-5xl text-3xl font-bold mr-6 mb-10 ml-6">
          {t("facultyMembership")}
        </h1>
        <div className="border-b-4 border-yellow-600 my-1 w-[40%] mr-[2%] ml-[2%]"></div>
        <div className="border-b-4 border-s-gray-600 w-[96%] mr-[2%] ml-[2%]"></div>
      </div>
      <div className="lg:mx-8">
      <UniversityGuide />
      <Members />
      </div>
      
    </div>
  );
};

export default FacultyMembership;