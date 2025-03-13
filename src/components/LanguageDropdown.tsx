"use client"
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

const LanguageDropdown = () => {
  const [language, setLanguage] = useState("العربية");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    setLanguage(locale === "ar" ? "العربية" : "English");
  }, [locale]);

  const switchLocale = (locale: "ar" | "en") => {
    router.push(`${pathname}?${searchParams.toString()}`, { locale });
    setLanguage(locale === "ar" ? "العربية" : "English");
  };

  return (
    <div className="relative  flex items-center font-semibold">
      <div
        className="flex gap-2 items-center  md:px-4 px-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <IoIosArrowDown size={20} />
        <GrLanguage size={25} />
        {language}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 bg-white border border-gray-300 shadow-lg rounded-md mt-2 w-36 z-50 text-[#C49732]">
          <ul>
            <li
              onClick={() => switchLocale("ar")}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-start"
            >
              العربية
            </li>
            <li
              onClick={() => switchLocale("en")}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              English
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
