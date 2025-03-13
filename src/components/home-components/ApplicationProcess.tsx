import { useTranslations } from "next-intl";
import { TbMessage } from "react-icons/tb";
import { TbCalendarCheck } from "react-icons/tb";
import { RiFileList3Line } from "react-icons/ri";
import { Link } from "@/i18n/routing";

const ApplicationProcess = () => {
  const t = useTranslations();

  return (
    <section className="w-full  h-full lg:py-6 justify-center items-center bg-[#0b1e38]">
      <div className="container mx-auto flex flex-col gap-14 max-w-6xl p-4">
        <div className="flex justify-between">
          <h1 className="text-white font-semibold lg:text-5xl text-4xl">
            {t("how-apply")}
          </h1>
          <Link
            href="#contact_us"
            className="text-white text-2xl hover:text-[#C49732] transition-all duration-300 ease-in-out font-semibold"
          >
            {t("submitApplicationNow")}
          </Link>
        </div>
        <div className="flex flex-wrap lg:gap-0 gap-4">
          {/* الخطوة 1 */}
          <div className="flex flex-col gap-4 justify-center lg:border-r-2 border-none p-6 lg:w-1/3 w-full">
            <RiFileList3Line size={50} className="text-[#c09532]" />
            <h2 className="text-2xl font-semibold text-white">
              {t("applicationStep1Title")}
            </h2>
            <p className="text-xl text-white font-semibold max-w-md">
              {t("applicationStep1Description")}
            </p>
          </div>
          {/* الخطوة 2 */}
          <div className="flex flex-col gap-4 justify-center lg:border-r-2 border-none p-6 lg:w-1/3 w-full">
            <TbMessage size={50} className="text-[#c09532]" />
            <h2 className="text-2xl font-semibold text-white">
              {t("applicationStep2Title")}
            </h2>
            <p className="text-xl text-white font-semibold">
              {t("applicationStep2Description")}
            </p>
          </div>
          {/* الخطوة 3 */}
          <div className="flex flex-col gap-4 justify-center lg:border-r-2 border-none p-6 lg:w-1/3 w-full">
            <TbCalendarCheck size={50} className="text-[#c09532]" />
            <h2 className="text-2xl font-semibold text-white">
              {t("applicationStep3Title")}
            </h2>
            <p className="text-xl text-white font-semibold">
              {t("applicationStep3Description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
