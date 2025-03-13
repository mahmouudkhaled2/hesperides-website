"use client";
import { useTranslations } from "next-intl";
import AccordionComponent from "../../media/[id]/AccordionComponent";
import StudentProjectsAccordion from "./StudentProjectsAccordion";
import SuccessStoriesAccordion from "../../media/[id]/SuccessStoriesData.ts";

interface StudentsProps {
  studentsData: {
    data: {
      projects: { name: string; description: string; image?: string }[];
      awards: { name: string; description: string; image?: string }[];
      successStories: { name: string; description: string; image?: string; college?: string; category?: string }[];
    };
  };
}

const Students = ({ studentsData }: StudentsProps) => {
  const t = useTranslations();

  const accordionData = [
    {
      name: t("Awards"),
      description: "",
      items: studentsData.data.awards || [],
    },
  ];

  const projectsData = {
    name: t("StudentsProjects"),
    description: "",
    items: studentsData.data.projects || [],
  };

  const successStoriesData = {
    name: t("SuccessStories"),
    description: "",
    items: studentsData.data.successStories || [],
  };

  return (
    <div className="mb-12">
      <div className="rounded-xl">
        <StudentProjectsAccordion projectsData={projectsData} />
        <AccordionComponent AccordionComponentData={accordionData} />
        <SuccessStoriesAccordion successStoriesData={successStoriesData} />
      </div>
    </div>
  );
};

export default Students;