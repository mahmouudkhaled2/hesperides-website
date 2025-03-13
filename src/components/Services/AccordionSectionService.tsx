"use client";
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

interface AccordionSectionProps {
  title: string;
  items: { id: number; description: string }[];
}

const AccordionSectionService: React.FC<AccordionSectionProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 rounded-lg overflow-hidden">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen((open) => !open)}
      >
        <div className="inline-flex flex-col">
              <h2 className="lg:text-5xl text-3xl font-semibold">
                {title}
              </h2>
            </div>
        <button className="bg-[#C49732] rounded-full text-white size-10 flex justify-center items-center shrink-0">
          {isOpen ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
        </button>
      </div>
      <div className="bg-black w-full h-[1px] my-4" />

      {isOpen && (
        <div className="p-4 lg:text-2xl text-xl text-gray-600 bg-white">
          <p >
            {items.map((item) => (
              <li key={item.id}>{item.description}</li>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default AccordionSectionService;