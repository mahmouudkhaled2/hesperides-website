'use client'

import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";
import { useTranslations } from 'next-intl';

export default function CustomHeading({ isAccordionOpen, setIsAccordionOpen, title }) {
    const t = useTranslations();
    return (
    <>
        {/* Heading Section */}
        <div className="w-full border-b-2 border-[#bbb] flex justify-between items-center px-6">
            <h1 className="lg:text-5xl text-3xl font-bold pb-6">
                {t(title)}
            </h1>

            {/* Arrow Toggle */}
            <button
                onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                className="focus:outline-none"
            >
                {isAccordionOpen ? (
                <FaCircleArrowUp className="text-[#c49732] text-3xl" />
                ) : (
                <FaCircleArrowDown className="text-[#c49732] text-3xl" />
                )}
            </button>
        </div>
    </>
    )
}