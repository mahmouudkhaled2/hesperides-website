"use client";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";

interface SuccessStoryItem {
  name: string;
  description: string;
  image?: string;
  college?: string;
  category?: string;
}

interface SuccessStoriesAccordionProps {
  successStoriesData: {
    name: string;
    description: string;
    items?: SuccessStoryItem[];
  };
}

const SuccessStoriesAccordion = ({ successStoriesData }: SuccessStoriesAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<SuccessStoryItem | null>(null);
  const t =useTranslations();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const openModal = (story: SuccessStoryItem) => {
    console.log("Opening modal with story:", story);
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedStory(null);
    setIsModalOpen(false);
  };

  return (
    <div className="ml-8 mr-8">
      <div className="relative mb-10">
        <div className="w-full border-b-2 border-[#bbb] flex justify-between items-center">
          <h2 className="lg:text-5xl text-3xl font-bold pb-6">{successStoriesData.name}</h2>
          <button
            onClick={toggleAccordion}
            className="bg-[#C49732] rounded-full text-white size-10 flex justify-center items-center"
            aria-expanded={isOpen}
            aria-controls="success-stories-content"
          >
            {isOpen ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
          </button>
        </div>

        {isOpen && (
          <div id="success-stories-content" className="p-6">
            {successStoriesData.items && successStoriesData.items.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {successStoriesData.items.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="rounded-lg overflow-hidden max-w-[270px] relative inset-0 bg-cyan-900 bg-opacity-50 group-hover:bg-opacity-60 transition-all"
                  >
                    {subItem.image && (
                      <Image
                        src={subItem.image}
                        alt={subItem.name}
                        width={300}
                        height={200}
                        className="w-full h-56 object-cover rounded-t-xl cursor-pointer"
                        onClick={() => openModal(subItem)}
                      />
                    )}
                    <h1 className="absolute bottom-1 text-lg font-bold mx-1 text-white">
                      {subItem.name}
                    </h1>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-zinc-700 text-lg">No items available.</p>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 lg:p-5">
          <div className="bg-white p-6 rounded-xl w-full h-[90vh] overflow-auto">
            <div className="w-full flex justify-end">
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 rounded-full lg:mb-20 text-black text-5xl font-bold"
              >
                <IoCloseOutline />
              </button>
            </div>

            <div className="flex flex-row justify-center gap-6 items-center">
              <div>
                {selectedStory.image && (
                  <Image
                    src={selectedStory.image}
                    alt={selectedStory.name}
                    width={300}
                    height={200}
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{selectedStory.name}</h3>
                <p
                  className="text-lg mb-2"
                  dangerouslySetInnerHTML={{
                    __html: selectedStory.description.replace(/\r\n/g, "<br />"),
                  }}
                />
                {selectedStory.college && (
                  <p className="text-lg mb-2">
                    <strong>{t("collage:")}</strong> {selectedStory.college}
                  </p>
                )}
                {selectedStory.category && (
                  <p className="text-lg mb-2">
                    <strong>{t("category:")}</strong> {selectedStory.category}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessStoriesAccordion;