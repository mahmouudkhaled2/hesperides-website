"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
const UniversityGuide = dynamic(() => import("../../../facultyMembership/universityGuide"));
const Members = dynamic(() => import("../../../facultyMembership/members"));

import AccordionComponent from "@/components/AccordionComponent";

interface FacultyMember {
  name: string;
  description: string;
  category: string;
  image: string;
}

interface ExploreData {
  name: string;
  description: string;
  faculty_member: FacultyMember;
  academic_accreditation: { description: string }[];
  industrial_cooperatives: { description: string }[];
}

interface ExploreProps {
  exploreData: ExploreData;
  params: { id: number; locale: string };
}

const Explore = ({ exploreData }: ExploreProps) => {
  const t = useTranslations();



  const accordionData = [
    ...(exploreData.academic_accreditation?.map((item) => ({
      name: t("AcademicAccreditation"),
      description: item.description,
    })) || []),
    ...(exploreData.industrial_cooperatives?.map((item) => ({
      name: t("IndustrialCooperatives"),
      description: item.description,
    })) || []),
  ];

  return (
    <div className="mb-12 rounded-xl ">
      <div className="w-full mx-12 my-16 ">
        <h1 className="lg:text-4xl text-3xl font-bold mb-6">{exploreData.name}</h1>
        <p className="lg:text-3xl text-2xl w-[90vw]">{exploreData.description}</p>
      </div>

      <div className="w-full mx-2 my-12">
        <div className="mt-12 mb-10">
          <h1 className="lg:text-5xl text-3xl font-bold mr-6 mb-10 ml-6">
            {t("FacultyAndAdministrativeStaffGuide")}
          </h1>
          <div className="border-b-4 border-yellow-600 my-1 w-[40%] mr-[2%] ml-[2%]"></div>
          <div className="border-b-4 border-s-gray-600 w-[96%] mr-[2%] ml-[2%]"></div>
        </div>
      </div>

      <div className="lg:mx-12 bg-white p-6 rounded-xl">
        <UniversityGuide />
        <Members />
      </div>
      <div className="lg:mx-12 bg-white p-6 rounded-xl">
        <AccordionComponent AccordionComponentData={accordionData} />
      </div>
    </div>
  );
};

export default Explore;