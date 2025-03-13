"use client";
import { useTranslations } from "next-intl";
import AccordionComponent from "./AccordionComponent";

interface ResearchProps {
  researchData: {
    data: {
      special: { name: string; description: string; image?: string }[];
      general: {
        data: { name: string; description: string; image?: string }[];
      };
    };
  };
}

const Research = ({ researchData }: ResearchProps) => {
  const t = useTranslations();

  const accordionData = [
    {
      name: t("DistinctiveResearch"),
      description: "", 
      items: researchData.data.special || [], 
    },
    {
      name: t("Researchpublications"),
      description: "",
      items: researchData.data.general?.data || [], 
    },
  ];

  return (
    <div className="mb-12">
      <div className="rounded-xl">
        <AccordionComponent AccordionComponentData={accordionData} />
      </div>
    </div>
  );
};

export default Research;