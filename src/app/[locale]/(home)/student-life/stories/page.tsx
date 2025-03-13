"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { getStories } from "@/lib/apis/student-life.api";
import { useTranslations } from "next-intl";
import { IoMdClose } from "react-icons/io";

interface Story {
  name: string;
  description: string;
  college: string;
  category: string;
  image: string;
}
interface Pagination {
  current_page: number;
  total_pages: number;
  per_page: number;
  total_items: number;
  next_page_url: string | null;
  prev_page_url: string | null;
}
interface StoriesResponse {
  success: boolean;
  message: string;
  data: {
    stories: Story[];
    pagination: Pagination;
  };
}
interface StoriesProps {
  params: {
    locale: string;
  };
}
const Modal = ({
  story,
  onClose,
}: {
  story: Story | null;
  onClose: () => void;
}) => {
  if (!story) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-white p-8 rounded-md w-3/4 max-w-6xl relative flex lg:flex-row flex-col gap-4 justify-center items-center">
        <div className="w-1/3 rounded-md">
          <Image width={400} height={400} src={story.image} alt={story.name} />
        </div>
        <div className="lg:w-3/4">
          <h3 className="lg:text-3xl text-2xl font-semibold mb-4">
            {story.name}
          </h3>
          <div className="flex items-center mt-4 gap-6 text-2xl font-semibold">
            <span>
              <p className=" text-[#C49732]">كلية</p>

              <p className=" text-gray-500 my-3">{story.college}</p>
            </span>
            <div className="h-16 w-[1px] bg-black" />
            <span>
              <p className=" text-[#C49732]">القسم </p>
              <p className=" text-gray-500 my-3">{story.category}</p>
            </span>
          </div>

          <p className="lg:text-3xl text-2xl">{story.description}</p>

          <button onClick={onClose} className="text-4xl   absolute top-4 end-4">
            <IoMdClose />
          </button>
        </div>
      </div>
    </div>
  );
};

const Stories = ({ params }: StoriesProps) => {
  const { locale } = params;

  const t = useTranslations();

  const { data, isLoading } = useQuery<StoriesResponse>({
    queryKey: ["student-Stories"],
    queryFn: () => getStories(locale),
  });

  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const handleImageClick = (story: Story) => {
    setSelectedStory(story);
  };

  const handleCloseModal = () => {
    setSelectedStory(null);
  };

  if (isLoading) {
    return (
      <div className="h-[50vh] flex justify-center items-center">
        <p className="text-4xl font-semibold">{t("loading")}</p>
      </div>
    );
  }

  return (
    <section className="p-8">
      <div className="mt-12 mb-10 flex flex-col ">
        <h2 className="text-5xl font-semibold">
          {t("stories_from_inside_university")}
        </h2>

        <div className="relative w-full  my-4">
          <div className="absolute top-0 start-0 w-[30%] border-b-4 border-yellow-600"></div>

          <div className="border-b-4 border-s-gray-600 w-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-8">
        {data?.data.stories.map((story, index) => (
          <div className="col-span-3 w-full rounded-md" key={index}>
            <Image
              width={400}
              height={400}
              src={story.image}
              alt={story.name}
              className="cursor-pointer"
              onClick={() => handleImageClick(story)}
            />
          </div>
        ))}
      </div>

      <Modal story={selectedStory} onClose={handleCloseModal} />
    </section>
  );
};

export default Stories;
