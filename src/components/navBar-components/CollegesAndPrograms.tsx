"use client";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "@/i18n/routing";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { fetchColleges } from "@/utlis/collages";

interface College {
  id: number;
  name: string;
}

interface CollegesAndProgramsProps {
  isTapOpen?: boolean;
  toggleTap?: () => void;
  params: {
    id: string; // dynamic param 'id'
  };
}
const CollegesAndPrograms = ({ toggleTap, params }: CollegesAndProgramsProps) => {
  const t = useTranslations();
  const locale = useLocale();
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [activeCollege, setActiveCollege] = useState<number | null>(null);

  const isRTL = locale === "ar";
  const ArrowIcon = isRTL ? FaAngleLeft : FaAngleRight;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchColleges(locale);
        setColleges(data);
      } catch (error) {
        console.error("Error fetching colleges data:", error);
        setError("Failed to fetch colleges data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    console.log(params, "Fetched");
  }, [locale, params]);

  const handleToggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
    setActiveCollege(null);
  };

  const handleCollegeClick = (collegeId: number) => {
    setActiveCollege(activeCollege === collegeId ? null : collegeId);
  };

  if (loading) return <p className="text-center">{t("loading")}</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="w-full" dir={isRTL ? "rtl" : "ltr"}>
      {/* Desktop Grid Layout */}
      <div className="hidden lg:grid grid-cols-12 w-full">
        <div className="col-span-3 border-e border-black p-4">
          <h2 className="text-4xl">{t("links.colleges-programs")}</h2>
          <p className="mt-6 text-lg">{t("collegesPrograms")}</p>
        </div>

        <div className="col-span-3 border-e border-black p-4 flex flex-col items-start gap-6 text-4xl font-medium">
          <button
            className="flex gap-4 items-center"
            onClick={() => handleToggleSection("faculties")}
          >
            {t("faculties")}
            <ArrowIcon />
          </button>
          <button
            className="flex gap-4 items-center"
            onClick={() => handleToggleSection("usefulSources")}
          >
            {t("Usefulsources")}
            <ArrowIcon />
          </button>
        </div>

        {/* Show faculties list when open */}
        {openSection === "faculties" && (
          <div className="col-span-3 border-e border-black p-4 flex flex-col items-start gap-8 text-2xl font-medium">
            {colleges.length > 0 ? (
              colleges.map((college) => (
                <button
                  key={college.id}
                  onClick={() => handleCollegeClick(college.id)}
                  className="flex gap-4 items-start p-0"
                >
                  {college.name}
                  <ArrowIcon />
                </button>
              ))
            ) : (
              <p className="text-gray-500">{t("noCollegesAvailable")}</p>
            )}
          </div>
        )}

        {/* Show useful sources when open */}
        {openSection === "usefulSources" && (
          <div className="col-span-3 border-e border-black p-4 flex flex-col items-start gap-8 text-2xl font-medium">
            <Link href="/facultyMembership">{t("facultyMembership")}</Link>
            <Link href="/library">{t("Library")}</Link>
          </div>
        )}

        {/* Show links for active college */}
        {activeCollege && openSection === "faculties" && (
          <div className="col-span-3 p-4 flex flex-col items-start gap-8 text-2xl font-medium">
            <Link href={`/collages/explore/${activeCollege}`}>{t("explore")}</Link>
            <Link href={`/collages/research/${activeCollege}`}>
              {t("researchAndImpact")}
            </Link>
            <Link href={`/collages/students/${activeCollege}`}>{t("forStudents")}</Link>
            <Link href={`/collages/media/${activeCollege}`}>{t("forMedia")}</Link>
          </div>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 p-2 pb-12">
        <button className="absolute top-4 right-4 text-black text-xl" onClick={toggleTap}>
          ✖
        </button>
        <div className="mb-2 mt-4">
          <h2 className="text-xl">{t("links.colleges-programs")}</h2>
          <p className="mt-2 text-sm">{t("collegesPrograms")}</p>
        </div>
        <div className="border-t border-zinc-700 my-4 w-52"></div>

        <div className="flex flex-col items-start gap-2 text-lg font-medium mb-2">
          <button
            className="flex gap-1 items-center"
            onClick={() => handleToggleSection("faculties")}
          >
            {t("faculties")}
            <ArrowIcon className="text-base" />
          </button>
          <button
            className="flex gap-1 items-center"
            onClick={() => handleToggleSection("usefulSources")}
          >
            {t("Usefulsources")}
            <ArrowIcon className="text-base" />
          </button>
        </div>
        <div className="border-t border-zinc-700 my-4 w-52"></div>

        {/* Show faculties list when open */}
        {openSection === "faculties" && (
          <div className="flex flex-col items-start gap-4 text-base font-medium">
            {colleges.length > 0 ? (
              colleges.map((college) => (
                <button
                  key={college.id}
                  onClick={() => handleCollegeClick(college.id)}
                  className="flex gap-1 items-center"
                >
                  {college.name}
                  <ArrowIcon />
                </button>
              ))
            ) : (
              <p className="text-gray-500">{t("noCollegesAvailable")}</p>
            )}
          </div>
        )}

        {/* Show useful sources when open */}
        {openSection === "usefulSources" && (
          <div className="flex flex-col items-start gap-1 text-base font-medium">
            <Link href="/facultyMembership">{t("facultyMembership")}</Link>
            <Link href="/library">{t("Library")}</Link>
          </div>
        )}

        {/* Show links for active college */}
        {activeCollege && openSection === "faculties" && (
          <div className="mt-2 flex flex-col items-start gap-2 text-base font-medium">
            <div className="border-t border-zinc-700 my-4 w-52"></div>
            <Link href={`/collages/explore/${activeCollege}`}>{t("explore")}</Link>
            <Link href={`/collages/research/${activeCollege}`}>
              {t("researchAndImpact")}
            </Link>
            <Link href={`/collages/students/${activeCollege}`}>{t("forStudents")}</Link>
            <Link href={`/collages/media/${activeCollege}`}>{t("forMedia")}</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegesAndPrograms;