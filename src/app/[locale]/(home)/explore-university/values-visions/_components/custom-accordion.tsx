'use client'
import { useState } from 'react';
import CustomHeading from './custom-heading';

type CustomAccordionProps = {
    title: string;
    content: string;
}

export default function CustomAccordion({ title, content } : CustomAccordionProps ) {

  // State for accordion toggle
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);

  return (
    <>
        <CustomHeading  isAccordionOpen={isAccordionOpen} setIsAccordionOpen={setIsAccordionOpen} title={title} />

        {/* Accordion Content */}
        {isAccordionOpen && (
        <div className="p-6 transition-all ease-in-out duration-300">
            <p>
                {content}
            </p>
        </div>
        )}
    </>
)}
