import { Link } from "@/i18n/routing";
import {
  getAdmissionFees,
  getAdmissionLinks,
  getAdmissionResourcesLinks,
} from "@/utlis/https";
import { useQuery } from "@tanstack/react-query";
import { useLocale, useTranslations } from "next-intl";
import { FaAngleLeft } from "react-icons/fa6";
import { useState } from "react";

interface AdmissionData {
  id: number;
  name: string;
}

interface AdmissionResponse {
  success: boolean;
  message: string;
  data: AdmissionData[];
}

const AdmissionNav = () => {
  const t = useTranslations();
  const locale = useLocale();

  const [openSection, setOpenSection] = useState<string | null>(null);

  const { data: AdmissionLinks, isLoading } = useQuery<AdmissionResponse>({
    queryKey: ["Admission-Links"],
    queryFn: () => getAdmissionLinks(locale),
  });

  const { data: AdmissionResourcesLinks, isLoading: ResourcesLinksIsLoading } =
    useQuery<AdmissionResponse>({
      queryKey: ["Admission-Resources"],
      queryFn: () => getAdmissionResourcesLinks(locale),
    });

  const { data: AdmissionFeesLinks, isLoading: AdmissionFeesIsLoading } =
    useQuery<AdmissionResponse>({
      queryKey: ["Admission-Fees"],
      queryFn: () => getAdmissionFees(locale),
    });

  if (isLoading || ResourcesLinksIsLoading || AdmissionFeesIsLoading) {
    return (
      <div className="flex justify-center items-center">
        <p>{t("loading")}</p>
      </div>
    );
  }

  const handleToggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="grid-cols-12 grid">
      <div className="col-span-3 border-e-[1px] border-black p-4">
        <h2 className="text-4xl">{t("links.admissions")}</h2>
        <p className="mt-6 text-lg">{t("collegesPrograms")}</p>
      </div>
      <div className="col-span-3 border-e-[1px] border-black p-4 flex flex-col justify-between items-start gap-6 text-4xl font-medium">
        <button
          onClick={() => handleToggleSection("admissionLinks")}
          className="flex gap-4 items-center"
        >
          {t("University_Admission")}
          <FaAngleLeft className="ltr:rotate-180 " />
        </button>
        <button
          onClick={() => handleToggleSection("resourcesLinks")}
          className="flex gap-4 items-center"
        >
          {t("Useful_Resources")}
          <FaAngleLeft className="ltr:rotate-180 " />
        </button>
        <button
          onClick={() => handleToggleSection("feesLinks")}
          className="flex gap-4 items-center"
        >
          {t("Tuition_Fees_and_Scholarships")}
          <FaAngleLeft className="ltr:rotate-180 " />
        </button>
      </div>

      {/* Show AdmissionLinks when open */}
      {openSection === "admissionLinks" && AdmissionLinks && (
        <div className="col-span-3 p-4 flex flex-col items-start gap-8 text-4xl font-medium">
          {AdmissionLinks.data.map((data) => (
            <Link href={`/admission/${data.id}`} key={data.id}>
              {data.name}
            </Link>
          ))}
        </div>
      )}

      {/* Show AdmissionFeesLinks when open */}
      {openSection === "feesLinks" && AdmissionFeesLinks && (
        <div className="col-span-3 p-4 flex flex-col items-start gap-8 text-4xl font-medium">
          {AdmissionFeesLinks.data.map((data) => (
            <Link href={`/fees/${data.id}`} key={data.id}>
              {data.name}
            </Link>
          ))}
        </div>
      )}

      {/* Show AdmissionResourcesLinks when open */}
      {openSection === "resourcesLinks" && AdmissionResourcesLinks && (
        <div className="col-span-3 p-4 flex flex-col items-start gap-8 text-4xl font-medium">
          {AdmissionResourcesLinks.data.map((data) => (
            <Link href={`/resources/${data.id}`} key={data.id}>
              {data.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdmissionNav;
