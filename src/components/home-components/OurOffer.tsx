import { useTranslations } from "next-intl";
import { ouroffer1, ouroffer2 } from "../../../public";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";

const OurOffer = () => {
  const t = useTranslations();
  return (
    <section className="h-full my-12 flex justify-center flex-col">
      <div className="container mx-auto flex lg:flex-row flex-col gap-14 justify-between max-w-6xl p-4">
        <h1 className="lg:text-7xl text-6xl font-semibold whitespace-nowrap">
          {t("offer")}
        </h1>
        <span>
          <p className="text-2xl font-semibold max-w-3xl">
            {t("offer_description")}
          </p>

          <div className="inline-block my-4">
            <div className="bg-[#C49732] h-[1px] rounded-full w-full my-1" />
            <h2 className="text-2xl font-medium text-[#c09532]">
              {t("explore_colleges")}
            </h2>
          </div>
        </span>
      </div>
      <div className="container max-w-6xl mx-auto grid lg:grid-cols-12 grid-cols-2 w-full gap-10 justify-center items-center lg:p-0 p-4">
        <div className="col-span-6 w-full flex flex-col gap-4">
          <div className="relative w-full h-72">
            <Image
              className="object-cover"
              alt="medicine image 1"
              src={ouroffer1}
              fill
            />
          </div>
          <span>
            <FaGraduationCap size={30} />
            <h2 className="text-xl font-medium">{t("student_services")}</h2>
          </span>
          <h2 className="text-[#36348E] text-4xl font-semibold">
            {t("medicine_program_title")}
          </h2>
          <div className="bg-black w-24 h-[4px]"></div>
          <p className="text-xl font-semibold">
            {t("medicine_program_description")}
          </p>
          <button className="bg-[#0b1e38] hover:bg-[#C49732] transition-all duration-300 ease-in-out w-32 rounded-md text-white text-xl h-12 mt-6">
            {t("apply_now")}
          </button>
        </div>
        <div className="col-span-6 w-full flex flex-col gap-4">
          <div className="relative w-full h-72">
            <Image
              className="object-cover"
              alt="medicine image 2"
              src={ouroffer2}
              fill
            />
          </div>
          <span>
            <FaGraduationCap size={30} />
            <h2 className="text-xl font-medium">{t("student_services")}</h2>
          </span>
          <h2 className="text-[#36348E] text-4xl font-semibold">
            {t("dentistry_program_title")}
          </h2>
          <div className="bg-black w-24 h-[4px]"></div>
          <p className="text-xl font-semibold">
            {t("dentistry_program_description")}
          </p>
          <button className="bg-[#0b1e38] hover:bg-[#C49732] transition-all duration-300 ease-in-out w-32 rounded-md text-white text-xl h-12 mt-6">
            {t("apply_now")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurOffer;
