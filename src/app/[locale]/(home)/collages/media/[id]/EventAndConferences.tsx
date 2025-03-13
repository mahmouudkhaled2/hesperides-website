"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { search } from "../../../../../../../public";

interface Option {
  type: string;
  name: string;
}

interface EventAndConferencesProps {
  options: Option[];
}

const EventAndConferencesClient = ({ options }: EventAndConferencesProps) => {
  const t = useTranslations();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="mx-12">
      <h1 className="lg:text-5xl text-3xl font-bold mb-6 rounded-xl">
        {t("EventsAndConferences")}
      </h1>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-4 mb-20">
        <div className="w-full">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border-none rounded-xl h-14 px-6 bg-[#F3F1F1] text-[#00000080] w-full hover:bg-none transition-colors duration-20"
          />
        </div>
        <h1 className="text-2xl font-bold">{t("or")}</h1>
        <div className="w-full">
          <select
            className="border-none rounded-xl h-14 px-6 bg-[#F3F1F1] text-[#00000080] w-full hover:bg-none transition-colors duration-20"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">{t("ChooseEventsAndConferences")}</option>
            {options.map((option, index) => (
              <option key={`${option.type}-${index}`} value={`${option.type}-${option.name}`}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <Image alt="search" src={search} className="w-12 h-12" />
      </div>
    </div>
  );
};

export default EventAndConferencesClient;