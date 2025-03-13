"use client"
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocalizedConstants } from "@/app/[locale]/_constants";
import { useTranslations } from "next-intl";
import { mainLog2 } from "../../public";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const { aboutUs, additionalInfo } = useLocalizedConstants();
  const t = useTranslations();

  return (
    <footer className="h-full  bg-[#000000] py-12 text-white w-full overflow-hidden">
      <div className="lg:p-8 md:p-6 p-4 w-full ">
        <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-2 justify-center lg:mx-10 md:mx-6 mx-4  w-full   lg:gap-8 md:gap-6 gap-4  ">
          <div className="lg:col-span-3 col-span-1 flex flex-col gap-4 ">
            <Link href="/" className="flex-shrink-0 my-4 w-auto h-full">
              <Image src={mainLog2} alt="Main Logo" width={200} />
            </Link>
          </div>
          <div className="lg:col-span-2 col-span-1 gap-4">
            <div className="my-6">
              <div className="inline-block">
                <p className="md:text-3xl text-2xl font-semibold whitespace-nowrap">
                  {t("links.colleges-programs")}
                </p>
                <div className="bg-[#C49732] h-[1px] rounded-full w-full my-5" />
              </div>
            </div>
            <ul>
              {aboutUs.map((info) => (
                <li key={info.id} className="mb-2">
                  <Link href={info.path} className="text-md font-[600]">
                    {info.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 col-span-1 gap-4">
            <div className="my-6">
              <div className="inline-block">
                <p className="md:text-3xl text-2xl font-semibold whitespace-nowrap">
                  {t("acceptance")}
                </p>
                <div className="bg-[#C49732] h-[1px] rounded-full w-full my-5" />
              </div>
            </div>
            <ul>
              {aboutUs.map((info) => (
                <li key={info.id} className="mb-2">
                  <Link href={info.path} className="text-md font-[600]">
                    {info.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 col-span-1 gap-4">
            <div className="my-6">
              <div className="inline-block">
                <p className="md:text-3xl text-2xl font-semibold whitespace-nowrap">
                  {t("Student-Life")}
                </p>
                <div className="bg-[#C49732] h-[1px] rounded-full w-full my-5" />
              </div>
            </div>
            <ul>
              {additionalInfo.map((info) => (
                <li key={info.id} className="mb-2">
                  <Link href={info.path} className="text-md font-[600]">
                    {info.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 col-span-1 gap-4">
            <div className="my-6">
              <div className="inline-block">
                <p className="md:text-3xl text-2xl font-semibold whitespace-nowrap">
                  {t("another-links")}
                </p>
                <div className="bg-[#C49732] h-[1px] rounded-full w-full my-5" />
              </div>
            </div>
            <ul>
              {additionalInfo.map((info) => (
                <li key={info.id} className="mb-2">
                  <Link href={info.path} className="text-md font-[600]">
                    {info.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full flex justify-between  lg:mx-10 mx-6 gap-8  my-8">
          <div className="flex gap-8 md:text-2xl text-xl text-md items-center w-full ">
            <p className=" flex justify-center items-center gap-2 whitespace-nowrap">
              <FaLocationDot size={20} />
              {t("University-Address")}
            </p>
            <div className="bg-[#FFFFFF] w-[1px] h-5"></div>

            <p className="   flex justify-center items-center gap-2">
              <IoCall size={20} />
              +966458845214
            </p>
            <div className="bg-[#FFFFFF] w-[1px] h-5"></div>

            <p className="   flex justify-center items-center gap-2">
              <IoIosMail size={20} />
              info@sharjah.ac.ae
            </p>
          </div>
          <div className="flex gap-6 w-full items-center  ">
            <p className="md:text-3xl text-xl whitespace-nowrap font-semibold">
              {t("Subscribe")}
            </p>

            <div className="flex max-w-lg w-full relative">
          <input
  type="text"
  className="py-4 rounded-md focus:outline-none bg-transparent border-[1px] p-2 flex-grow xl:text-lg lg:text-md text-sm"
/>


              <button className="absolute end-4 top-1/2 -translate-y-1/2 py-2 px-6 flex justify-center items-center rounded-md bg-[#C49732] text-black text-2xl min-w-max">
              {t("send")}
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#FFFFFF] my-6 "></div>
        <div className=" w-full  mt-6 h-auto flex justify-between flex-wrap items-center   whitespace-nowrap   font-semibold">
          <p className="lg:text-2xl text-lg"> {t("all_rights_reserved")}</p>
          <div className="flex gap-8 md:text-3xl text-2xl text-md items-center ">
            <p> {t("privacy_policy_cookies")}</p>
            <div className="bg-[#FFFFFF] w-[1px] h-7"></div>
            <p>{t("terms_conditions")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
