"use client";
import Image from "next/image";
import { mainLogo } from "../../../public";
import { useLocalizedConstants } from "../../app/[locale]/_constants";
import { useTranslations } from "next-intl";
import { IoSearch, IoMenu } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import { Link } from "@/i18n/routing";
import { FaAngleLeft } from "react-icons/fa";
import LanguageDropdown from "../LanguageDropdown";
import AdmissionNav from "./AdmissionNav";
import Exploreunviersity from "./Exploreunviersity";
import CollegesAndPrograms from "./CollegesAndPrograms";
import StudentLifeNav from "./StudentLifeNav";

const NavBar = () => {
  const { links, headerLinks1 } = useLocalizedConstants();
  const t = useTranslations();
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCollegesMenuOpen, setIsCollegesMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (id: number) => {
    if (isMobile && id === 1) {
      setIsCollegesMenuOpen(!isCollegesMenuOpen);
    } else {
      setOpenMenu(openMenu === id ? null : id);
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full z-50 xl:text-2xl lg:text-xl text-lg font-semibold">
      <Header />
      <nav
        className={`flex items-center justify-between py-4 px-6 ${
          openMenu !== null ? "bg-white text-black" : "text-white"
        } ${isMobile ? "flex-col" : ""}`}
        ref={navbarRef}
      >
        <div className="flex items-center justify-between lg:w-[223px] lg:h-[89px] w-[165px] h-[72px] shrink-0 ">
          <Image
            src={mainLogo}
            alt="Hesperides Logo"
            width={223}
            height={89}
            priority
            className="object-contain shrink-0 lg:w-[223px] lg:h-[89px] w-[165px] h-[72px] "
          />

          {isMobile && (
            <button onClick={toggleNav} className="text-white ml-6">
              <IoMenu size={30} />
            </button>
          )}
        </div>

        {!isNavOpen && (
          <div
            className={`flex gap-10 justify-center items-center ${
              isMobile ? "hidden" : ""
            }`}
          >
            <Link href="/">{t("links.home")}</Link>
            {links.map((link) => (
              <div key={link.id}>
                {link.id === 4 ? ( // رابط "الخدمات" فقط
                  <Link
                    href={link.url}
                    className="cursor-pointer transition-colors whitespace-nowrap"
                  >
                    {link.title}
                  </Link>
                ) : (
                  <button
                    className="cursor-pointer transition-colors whitespace-nowrap"
                    onClick={() => toggleMenu(link.id)}
                  >
                    {link.title}
                  </button>
                )}

                {openMenu === link.id && link.id !== 4 && (
                  <div className="absolute left-0 right-0 top-full bg-white opacity-100 text-black shadow-lg p-6 w-screen z-50">
                    <div className="space-y-4 w-full">
                      {link.id === 1 && (
                        <CollegesAndPrograms
                          params={{
                            id: "",
                          }}
                        />
                      )}
                      {link.id === 2 && <AdmissionNav />}
                      {link.id === 3 && <StudentLifeNav />}
                      {link.id === 5 && <Exploreunviersity />}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button className="w-44 h-14 bg-[#C49732] rounded-md text-white flex justify-center items-center gap-2">
              {t("submitApplicationNow")}
              <FaAngleLeft size={25} className="-skew-x-1" />
            </button>
            <button>
              <IoSearch size={30} />
            </button>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobile && isNavOpen && (
          <div
            className={`fixed top-0 left-0 w-full h-full bg-zinc-900 text-white z-50 flex flex-col 
    items-center justify-start transition-transform transform 
    ${isNavOpen ? "translate-y-0" : "translate-y-full"} duration-500 p-6`}
          >
            {/* زر الإغلاق */}
            <button
              className="absolute top-4 right-4 text-white text-4xl"
              onClick={() => setIsNavOpen(false)}
            >
              ✖
            </button>

            {/*  content menu */}
            <div className="grid grid-cols-2 gap-8 text-xl font-semibold text-center w-full max-w-2xl mt-16">
              {/* Basic links  */}
              <div className="flex flex-col space-y-4">
                <Link href="/" className="block hover:text-yellow-400">
                  {t("links.home")}
                </Link>
                {links.map((link) => (
                  <button
                    key={link.id}
                    className="block cursor-pointer transition-colors hover:text-yellow-400"
                    onClick={() => toggleMenu(link.id)}
                  >
                    {link.title}
                  </button>
                ))}
              </div>

              {/*  Additional links  */}
              <div className="flex flex-col space-y-4">
                {headerLinks1.map((link) => (
                  <button
                    key={link.id}
                    className="block cursor-pointer transition-colors hover:text-yellow-400"
                  >
                    {link.title}
                  </button>
                ))}
              </div>

              {/* button   */}
              <div className="col-span-2 flex justify-center">
                <button className="w-48 h-14 bg-[#C49732] rounded-md text-white flex justify-center items-center gap-2 shadow-lg">
                  {t("submitApplicationNow")}
                  <FaAngleLeft size={25} />
                </button>
              </div>

              {/* Research and visit the campus*/}
              <div className="col-span-2 flex justify-center gap-6">
                <button className="hover:text-yellow-400">
                  <IoSearch size={30} />
                </button>
                <button className="hover:text-yellow-400">
                  {t("campusVisit")}
                </button>
              </div>

              {/*   */}
              <div className="col-span-2 flex justify-center">
                <LanguageDropdown />
              </div>
            </div>
          </div>
        )}

        {/* Colleges and Programs Menu in Mobile */}
        {isMobile && isCollegesMenuOpen && (
          <div className="fixed top-52 right-0 h-[calc(100vh-96px)] w-full bg-zinc-300 text-black shadow-lg p-6 z-50">
            <CollegesAndPrograms
              isTapOpen={isCollegesMenuOpen}
              toggleTap={() => setIsCollegesMenuOpen(!isCollegesMenuOpen)}
              params={{
                id: "",
              }}
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
