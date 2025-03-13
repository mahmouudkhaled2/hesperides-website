"use client"
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";

const StudentLifeNav = () => {
  const t = useTranslations();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleToggleSection = (section: keyof typeof sectionButtons) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sectionButtons = {
    admissionLinks: [
      { label: t("BeginningOfEverything"), route: "/student-life/first-step" },
      { label: t("Stories_from_the_university"), route: "/student-life/stories" },
    ],
    resourcesLinks: [
      { label: t("Resource 1"), route: "/resources/one" },
      { label: t("Resource 2"), route: "/resources/two" },
    ],
    feesLinks: [
      { label: t("Fee Option 1"), route: "/fees/option1" },
      { label: t("Fee Option 2"), route: "/fees/option2" },
      { label: t("Fee Option 3"), route: "/fees/option3" },
      { label: t("Fee Option 4"), route: "/fees/option4" },
      { label: t("Fee Option 1"), route: "/fees/option1" },
      { label: t("Fee Option 2"), route: "/fees/option2" },
    ],
  };

  const renderSubButtons = (section: keyof typeof sectionButtons) =>
    openSection === section && (
      <div className="flex flex-col justify-between gap-4 ">
        {sectionButtons[section].map((item, index) => (
          <Link key={index} href={item.route}>
            <button>{item.label}</button>
          </Link>
        ))}
      </div>
    );

  return (
    <div className="grid-cols-12 grid">
      <div className="col-span-3 border-e-[1px] border-black p-4">
        <h2 className="text-4xl">{t("links.student-life")}</h2>
        <p className="mt-6 text-lg">{t("collegesPrograms")}</p>
      </div>
      <div className="col-span-3 border-e-[1px] border-black p-4 flex flex-col justify-between items-start gap-6 text-3xl font-medium">
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleToggleSection("admissionLinks")}
            className="flex gap-4 items-center"
          >
            {t("your_journey")}
            <FaAngleLeft className="ltr:rotate-180 " />
          </button>
        </div>


        <div className="flex items-center gap-4">
          <button
            onClick={() => handleToggleSection("feesLinks")}
            className="flex gap-4 items-center"
          >
            {t("LiveAndLearnAndDiscover")}
            <FaAngleLeft className="ltr:rotate-180 " />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleToggleSection("resourcesLinks")}
            className="flex gap-4 items-center"
          >
            {t("Transition")}
            <FaAngleLeft className="ltr:rotate-180 " />
          </button>
        </div>
        <Link href="/student-life/career-path">{t("Build_Your_Career")}</Link>
      </div>
      {openSection && (
        <div className="col-span-3  p-4 flex flex-col justify-between items-start gap-6 text-3xl font-medium">
          {renderSubButtons("admissionLinks")}
          {renderSubButtons("resourcesLinks")}
          {renderSubButtons("feesLinks")}
        </div>
      )}
    </div>
  );
};

export default StudentLifeNav;
