"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';
import { IoMdArrowDropdownCircle } from "react-icons/io";

interface CustomSelectProps {
  options: string[];
}

export default function CustomSelect({ options }: CustomSelectProps): JSX.Element {
  // Translation
  const t = useTranslations();

  // States
  const [selectedOption, setSelectedOption] = useState<string>("");

  // Functions
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="flex items-center relative bg-white rounded-2xl overflow-hidden">

      <IoMdArrowDropdownCircle className="text-4xl absolute left-5 text-[#083767]" />

      <div className="relative w-full">
        <select
          className="block appearance-none bg-transparent border-none text-zinc-500 text-xl font-semibold outline-none focus:outline-none h-[64px] w-full px-5 rounded-2xl"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="" disabled>
            {t("interested-in")}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
