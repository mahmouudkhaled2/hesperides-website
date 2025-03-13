/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useRouter } from "@/i18n/routing";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface ExploreUniversityProps {
  isTapOpen?: boolean;
  toggleTap?: () => void;
}

const ExploreUniversity = ({ isTapOpen, toggleTap }: ExploreUniversityProps) => {

  // Translation
  const t = useTranslations();

  // Navigation
  const router = useRouter();
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const handleSubMenuClick = (subMenu: string) => {
    setActiveSubMenu(activeSubMenu === subMenu ? null : subMenu);
  };

  return (
    <div className="w-full">
      {/* وضع الشبكة في الشاشات الكبيرة */}
      <div className="hidden lg:grid grid-cols-3 w-full">
        <div className="w-full border-e border-black p-4">
          <h2 className="text-2xl lg:text-4xl">{t("links.explore-university")}</h2>
          <p className="mt-4 lg:mt-6 text-base lg:text-lg">{t("collegesPrograms")}</p>
        </div>

        <div className="w-full border-e border-black p-4 flex flex-col items-start gap-4 lg:gap-6 text-xl lg:text-4xl font-medium">

          {/* Why the university */}
          <button className="flex gap-2 lg:gap-4 items-center" onClick={() => handleSubMenuClick("whyUniversity")}>
            {t('why-university')}
            <FaAngleLeft className="text-lg lg:text-2xl ltr:rotate-180" />
          </button>

          {/* Our leadership */}
          <button className="flex gap-2 lg:gap-4 items-center" onClick={() => handleSubMenuClick("our-leadership")}>
            {t("our-leadership")}
            <FaAngleLeft className="text-lg lg:text-2xl ltr:rotate-180" />
          </button>

          <button className="flex gap-2 lg:gap-4 items-center" onClick={() => router.push("/explore-university/values-visions")}>
            {t("values-vision")}
            <FaAngleLeft className="text-lg lg:text-2xl ltr:rotate-180" />
          </button>

          <button className="flex gap-2 lg:gap-4 items-center" onClick={() => handleSubMenuClick("campus-visit")}>
            {t("campus-visiting")}
            <FaAngleLeft className="text-lg lg:text-2xl ltr:rotate-180" />
          </button>
        </div>

        <div className="w-full border-e border-black p-4">
          {/* Why University */}
          {activeSubMenu === "whyUniversity" && (
            <div>
              <ul className="space-y-4">
                <li className="text-2xl hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  <Link href="/facultyMembership">{t("why-university")}</Link>
                </li>
                
                <li className="text-2xl hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  <Link href="/library">{t("university-history")}</Link>
                </li>

                <li className="text-2xl hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  <Link href="/library">{t("our-partners")}</Link>
                </li>

                <li className="text-2xl hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  <Link href="/library">{t("sustainability-office")}</Link>
                </li>
              </ul>
            </div>
          )}

          {/* Our leadership */}
          {activeSubMenu === "our-leadership" && (
            <div>
              <ul className="space-y-4">
                <li className="text-2xl hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  <Link href="/explore-university/our-leadership/university-founder">{t("university-founder")}</Link>
                </li>
                
                <li className="text-2xl hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  <Link href="/explore-university/our-leadership/university-president">{t("university-president")}</Link>
                </li>

                <li className="text-2xl hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  <Link href="/explore-university/our-leadership/university-board">{t("university-trustees")}</Link>
                </li>

                <li className="text-2xl hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  <Link href="/explore-university/our-leadership/organizational-structure">{t("organizational-structure")}</Link>
                </li>
              </ul>
            </div>
          )}

          {/* Campus visiting */}
          {activeSubMenu === "campus-visit" && (
            <div>
              <ul className="space-y-4">
                <li className="text-2xl hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  <Link href="/facultyMembership">{t("campus-visiting")}</Link>
                </li>
                <li className="text-2xl hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  <Link href="/explore-university/contact-us">{t("contact-us")}</Link>
                </li>
              </ul>
            </div>
          )}


        </div>
      </div>


      {/* وضع الموبايل */}
      <div className="lg:hidden w-full max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 p-2 pb-12">
        <button
          className="absolute top-4 right-4 text-black text-xl"
          onClick={toggleTap}
        >
          ✖
        </button>
        {/* العنوان والوصف */}
        <div className="mb-2 mt-4">
          <h2 className="text-xl">{t("links.explore-university")}</h2>
          <p className="mt-2 text-sm">{t("collegesPrograms")}</p>
        </div>
        <div className="border-t border-zinc-700 my-4 w-52 "></div>
        {/* القائمة الرئيسية */}
        <div className="flex flex-col items-start gap-2 text-lg font-medium mb-2">
          <button className="flex gap-1 items-center" onClick={() => handleSubMenuClick("faculties")}>
            {t("faculties")}
            <FaAngleLeft className="text-base" />
          </button>
          <button className="flex gap-1 items-center" onClick={() => handleSubMenuClick("usefulSources")}>
            {t("Usefulsources")}
            <FaAngleLeft className="text-base" />
          </button>
        </div>
        <div className="border-t border-zinc-700 my-4 w-52 "></div>

      </div>
    </div>
  );
};

export default ExploreUniversity;