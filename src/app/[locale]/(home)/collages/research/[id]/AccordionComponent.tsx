"use client";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { arrow } from "../../../../../../../public";

interface AccordionItem {
  name: string;
  description: string;
  image?: string;
  items?: { name: string; description: string; image?: string }[];
}

interface AccordionComponentProps {
  AccordionComponentData: AccordionItem[];
}

const AccordionComponent = ({ AccordionComponentData }: AccordionComponentProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="ml-8 mr-8">
      {AccordionComponentData.map((item, index) => (
        <div key={index} className="relative mb-10">
          <div className="w-full border-b-2 border-[#bbb] flex justify-between items-center">
            <h2 className="lg:text-5xl text-3xl font-bold pb-6">{item.name}</h2>
            <button
              onClick={() => toggleAccordion(index)}
              className="bg-[#C49732] rounded-full text-white size-10 flex justify-center items-center"
              aria-expanded={openIndex === index}
              aria-controls={`accordion-content-${index}`}
            >
              {openIndex === index ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
            </button>
          </div>

          {openIndex === index && (
            <div id={`accordion-content-${index}`} className="p-6">
              {item.items && item.items.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {item.items.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="rounded-lg overflow-hidden max-w-[264px] "
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
                <p className="text-zinc-700 text-lg">No items available in this section.</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;