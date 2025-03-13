"use client";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useState } from "react";

interface AccordionItem {
  name: string;
  description: string;
}

interface AccordionComponentProps {
  AccordionComponentData: AccordionItem[];
}

const AccordionComponent = ({
  AccordionComponentData,
}: AccordionComponentProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div>
      {AccordionComponentData.map((item, index) => (
        <div key={index} className="relative mb-10 ">
          <div className="w-full  border-b-2 border-[#bbb] flex justify-between items-center px-6 pb-6">
            
            <h2 className="lg:text-5xl text-3xl font-bold ">
              
              {item?.name}
            </h2>

            <button
              onClick={() => toggleAccordion(index)}
              className="bg-[#C49732] rounded-full text-white size-10 flex justify-center items-center"
            >
              {openIndex === index ? (
                <FaArrowUp size={20} />
              ) : (
                <FaArrowDown size={20} />
              )}
            </button>
          </div>

          {openIndex === index && (
            <div
              className="p-6 bg-[#f8f8f8] text-zinc-700 text-3xl font-semibold !leading-snug accordion-description"
              dangerouslySetInnerHTML={{ __html: item.description.replace(/\r\n/g, "<br />") }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;
