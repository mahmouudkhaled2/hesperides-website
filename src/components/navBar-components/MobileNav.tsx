/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FaAngleLeft } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import LanguageDropdown from "../LanguageDropdown";

interface MobileNavProps {
  isNavOpen: boolean;
  setIsNavOpen: (value: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isNavOpen, setIsNavOpen }) => {
  const t = useTranslations();
  
  return (
    <>
      {isNavOpen && (
        <div className="fixed top-24 left-0 h-[calc(100vh-96px)] w-1/2 bg-black text-white shadow-lg p-6 z-50">
          <div className="flex flex-col space-y-4 items-center">
            <Link href="/" className="">{t("links.home")}</Link>
            <button className="cursor-pointer transition-colors whitespace-nowrap">{t("departmentsAndCenters")}</button>
            <button className="cursor-pointer transition-colors whitespace-nowrap">{t("research")}</button>
            <button className="cursor-pointer transition-colors whitespace-nowrap">{t("news")}</button>
            <button className="w-44 h-14 bg-[#C49732] rounded-md text-white flex justify-center items-center gap-2">
              {t("submitApplicationNow")}
              <FaAngleLeft size={25} />
            </button>
            <button>
              <IoSearch size={30} />
            </button>
            <button>{t("campusVisit")}</button>
            <LanguageDropdown />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
