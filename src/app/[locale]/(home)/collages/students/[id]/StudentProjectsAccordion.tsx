"use client";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { arrow, search } from "../../../../../../../public"; 
import { useTranslations } from "next-intl";

interface ProjectItem {
  name: string;
  description: string;
  image?: string;
}

interface StudentProjectsAccordionProps {
  projectsData: {
    name: string;
    description: string;
    items?: ProjectItem[];
  };
}

const StudentProjectsAccordion = ({ projectsData }: StudentProjectsAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const t = useTranslations();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const filterProjects = (items: ProjectItem[] | undefined) => {
    if (!items || !searchTerm) return items || [];
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="ml-8 mr-8">
      <div className="relative mb-10">
        <div className="w-full border-b-2 border-[#bbb] flex justify-between items-center">
          <h2 className="lg:text-5xl text-3xl font-bold pb-6">{projectsData.name}</h2>
          <button
            onClick={toggleAccordion}
            className="bg-[#C49732] rounded-full text-white size-10 flex justify-center items-center"
            aria-expanded={isOpen}
            aria-controls="student-projects-content"
          >
            {isOpen ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
          </button>
        </div>

        {isOpen && (
          <div id="student-projects-content" className="lg:p-6 p-1">
            <div className="flex lg:flex-row items-center justify-center gap-4 lg:mb-10 sm:my-1 bg-white lg:p-10 py-3 rounded-xl">
              <div className="w-full flex-1">
                <select
                  className="border-none rounded-xl h-14 px-6 bg-[#F3F1F1] text-[#00000080] w-full hover:bg-none transition-colors duration-200"
                  onChange={(e) => setSearchTerm(e.target.value)}
                >
                  <option value="">{t("ChooseDepartmentOfProjects")}</option>
                  {projectsData.items && projectsData.items.length > 0 ? (
                    projectsData.items.map((project, index) => (
                      <option key={index} value={project.name}>
                        {project.name}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      No projects available
                    </option>
                  )}
                </select>
              </div>
              <Image alt="search" src={search} className="w-12 h-12" />
            </div>

            {projectsData.items && projectsData.items.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filterProjects(projectsData.items).map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="rounded-lg overflow-hidden max-w-[264px]"
                  >
                    {subItem.image && (
                      <Image
                        src={subItem.image}
                        alt={subItem.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-xl"
                      />
                    )}
                    <div className="p-2 mt-3">
                      <h3 className="text-zinc-700 text-xl font-bold !leading-snug">
                        {subItem.name}
                      </h3>
                      <p
                        className="text-zinc-600 text-base !leading-snug mt-1"
                        dangerouslySetInnerHTML={{
                          __html: subItem.description.replace(/\r\n/g, "<br />"),
                        }}
                      />
                    </div>
                    <div className="p-2">
                      <Image src={arrow} alt="More" width={36} height={36} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-zinc-700 text-lg">No projects available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentProjectsAccordion;