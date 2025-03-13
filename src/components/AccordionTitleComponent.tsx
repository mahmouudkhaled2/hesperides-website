"use client";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useState } from "react";

interface AccordionItem {
  title: string;
  description: string;
}

interface AccordionComponentProps {
  AccordionComponentData: AccordionItem;
}

const AccordionTitleComponent = ({
  AccordionComponentData,
}: AccordionComponentProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const formattedDescription = AccordionComponentData.description.replace(/\r\n/g, "<br />");

  return (
    <div>
      <div className="p-6 border-b-[2px] relative my-8">
        <div className="flex justify-between">
          <div className="inline-flex flex-col">
            <h2 className="lg:text-5xl text-3xl font-semibold">
              {AccordionComponentData.title}
            </h2>
          </div>
          <button
            onClick={toggleAccordion}
            className="bg-[#C49732] rounded-full text-white size-10 flex justify-center items-center"
          >
            {isOpen ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
          </button>
        </div>

        {isOpen && (
          <div
            className="mt-4 text-gray-700 text-3xl font-semibold !leading-snug accordion-description"
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          />
        )}
      </div>
    </div>
  );
};

export default AccordionTitleComponent;
