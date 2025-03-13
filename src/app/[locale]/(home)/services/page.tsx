"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getSerives } from "@/utlis/https";
import { background1 } from "../../../../../public";
import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@/i18n/routing";

interface Service {
  id:number;
  title: string;
  description: string;
  type: string;
  start_service: string;
  website: string;
  price: string;
  code: string;
  manager: string;
  image: string;
 
}

interface ServicesResponse {
  success: boolean;
  message: string;
  data: Service[];
}

const Services = ({ params }: { params: { locale: string } }) => {
  const { locale } = params;
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState<"new" | "current">("new");
  const { data: SerivesData, isLoading } = useQuery<ServicesResponse>({
    queryKey: ["serives"],
    queryFn: () => getSerives(locale),
  });

  if (!SerivesData?.success || !SerivesData.data.length) {
    return <p className="text-center text-xl">لا توجد خدمات متاحة حاليًا</p>;
  }

  const newStudents = SerivesData.data.filter(
    (service) => service.type === "new"
  );
  const currentStudents = SerivesData.data.filter(
    (service) => service.type === "current"
  );

  if (isLoading) {
    <div>
      <p>Loading...</p>
    </div>
  }

  return (
    <section className="relative w-full h-auto overflow-hidden">
      <div className="w-full lg:h-[700px] h-[600px] relative">
        <Image
          alt="background"
          fill
          className="object-cover"
          src={background1}
        />
        <div className="absolute bottom-14 start-10">
          <h1 className="text-white text-9xl font-semibold">
            {t("links.services")}
          </h1>
        </div>
      </div>

      {/* تبويبات الاختيار */}
      <div className="flex gap-6 mt-6 p-6  lg:text-5xl text-4xl font-semibold">
        
        <label className="flex items-center gap-2  cursor-pointer">
          <input
            type="radio"
            name="studentType"
            value="current"
            checked={activeTab === "current"}
            onChange={() => setActiveTab("current")}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === "current"
                ? "bg-[#C49732] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          />
          <span
            
          >
                        {t("current_students")}

            
          </span>
        </label>
        <label className="flex items-center gap-2  cursor-pointer">
          <input
            type="radio"
            name="studentType"
            value="new"
            checked={activeTab === "new"}
            onChange={() => setActiveTab("new")}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === "new"
                ? "bg-[#C49732] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          />
          <span
       
          >

            {t("new_students")}
            
          </span>
        </label>
      </div>

      {/* عرض الخدمات حسب التبويب النشط */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {(activeTab === "new" ? newStudents : currentStudents).map(
          (service) => (
            <div
              key={service.code}
              className="rounded-xl shadow-lg flex flex-col gap-8 justify-center p-6 h-56"
            >
              <h3 className="text-4xl font-medium mt-4 truncate">
                {service.title}
              </h3>
              <div className="w-full flex gap-6 font-medium">
                <button className="w-1/2 border-[1px] rounded-md border-[#C49732] p-2 text-xl flex justify-center items-center">
                  <Link href={`/services/${service.id}`}>
                    
                    {t("viewDetails")}
                  </Link>
                </button>
                <button className="w-1/2 border-[1px] rounded-md border-[#C49732] p-2 text-xl flex justify-center items-center">
                  <a
                    href={service.website}
                    target="_blank"
                    className="flex gap-4 justify-center items-center"
                  >
                    
                    {t("startService")}

                    <FaArrowLeftLong
                      size={30}
                      className="bg-[#C49732] p-1 rounded-full text-white"
                    />
                  </a>
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
