"use client";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ex, media, research, students } from "../../../../../public";
import { useTranslations } from "next-intl";

const NavBarExplore = () => {
  const params = useParams();
  const pathname = usePathname();
  const collegeId = params.id;
  const locale = params.locale as string;

  const t = useTranslations();

  const ExploreData = [
    { id: 1, title: t("explore"), img: ex, link: `/collages/explore/${collegeId}` },
    { id: 2, title: t("researchAndImpact"), img: research, link: `/collages/research/${collegeId}` },
    { id: 3, title: t("forStudents"), img: students, link: `/collages/students/${collegeId}` },
    { id: 4, title: t("forMedia"), img: media, link: `/collages/media/${collegeId}` },
  ];

  const isRTL = locale === "ar";

  return (
    <div className="absolute -bottom-16 w-full lg:w-[100%] lg:mx-auto pr-1">
      <div className="flex gap-0 mx-0 overflow-x-auto whitespace-nowrap scrollbar-hide justify-center">
        {ExploreData.map((link, index) => {
          const isActive = pathname === link.link || (link.id === 1 && pathname === `/collages/${collegeId}`);

          return (
            <Link
              href={link.link}
              key={link.id}
              className={`flex items-center gap-1 lg:gap-2 bg-[#FFFFFF] px-2 lg:px-4 py-2 w-auto h-20 lg:h-24 my-4 
                ${isActive ? "text-[#C49732]" : "text-black"}
                ${index === 0 ? (isRTL ? "first:rounded-r-xl" : "first:rounded-l-xl") : ""}
                ${index === ExploreData.length - 1 ? (isRTL ? "last:rounded-l-xl" : "last:rounded-r-xl") : ""}`}
            >
              <div className="flex items-center flex-col gap-1 lg:gap-2 px-2 lg:px-5">
                <Image src={link.img} alt={link.title} width={30} height={30} className="lg:w-10 lg:h-10" />
                <p className="text-sm lg:text-3xl text-black whitespace-nowrap">{link.title}</p>
              </div>
              {index !== ExploreData.length - 1 && (
                <div className="w-[1px] lg:w-[1.5px] h-6 lg:h-8 bg-black mx-1 lg:mx-2" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBarExplore;