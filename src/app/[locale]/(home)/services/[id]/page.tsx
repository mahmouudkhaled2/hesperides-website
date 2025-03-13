import AccordionSectionService from "@/components/Services/AccordionSectionService";
import { getSeriveDetails } from "@/utlis/https";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

interface ServiceDetailsProps {
  params: {
    id: number;
    locale: string;
  };
}

interface Service {
  id: number;
  title: string;
  description: string;
  type: string;
  start_service: string;
  website: string;
  price: string;
  code: string;
  manager: string;
  image: string;
  category: string;
  contact_us: string;
}

interface Procedure {
  id: number;
  description: string;
}

interface ServiceDetailsResponse {
  success: boolean;
  message: string;
  data: {
    service: Service;
    procedures: Procedure[];
    termOfServices: Procedure[];
  };
}

// metadata
export async function generateMetadata({ params }: ServiceDetailsProps) {
  const { id, locale } = params;
  const response: ServiceDetailsResponse = await getSeriveDetails(locale, id);

  return {
    title: response?.data?.service?.title,
    description: response?.data?.service?.description,
    openGraph: {
      title: response?.data?.service?.title,
      description: response?.data?.service?.description,
      images: [response?.data?.service?.image],
    },
  };
}

const ServiceDetails = async ({ params }: ServiceDetailsProps) => {
  const { id, locale } = params;
  const response: ServiceDetailsResponse = await getSeriveDetails(locale, id);
  const t = await getTranslations();

  const { service, procedures, termOfServices } = response?.data;

  return (
    <section className="relative w-full h-auto overflow-hidden">
      <div className="w-full lg:h-[800px] h-[700px] relative">
        <Image
          fill
          className="object-cover"
          src={service.image}
          alt={service.title}
        />
        <div className="absolute bottom-14 start-10">
          <h1 className="text-white lg:text-8xl text-7xl font-semibold">
            {t("links.services")}
          </h1>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-6">
        <h1 className="lg:text-6xl md:text-5xl text-4xl font-medium">
          {service.title}
        </h1>
        <p className="text-gray-700 mt-2 lg:text-4xl md:text-3xl text-2xl">
          {service.description}
        </p>
        <button className="w-44 border-[1px] rounded-2xl bg-[#C49732]  p-3 text-2xl  flex justify-center items-center text-white">
          <a
            href={service.start_service}
            target="_blank"
            className="  flex gap-4 justify-center items-center"
          >
            بدء الخدمة
            <FaArrowLeftLong
              size={30}
              className="bg-white p-1 rounded-full text-black"
            />
          </a>
        </button>
        <div className="rounded-2xl border p-8 ">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-8 gap-6">
            <span className="flex flex-col gap-4">
              <p className="lg:text-3xl text-2xl font-semibold"> رمز الخدمة</p>
              <h2 className="lg:text-2xl text-xl ">{service.code}</h2>
            </span>
            <span className="flex flex-col gap-4">
              <p className="lg:text-3xl text-2xl  font-semibold">اسم الخدمة</p>
              <h2 className="lg:text-2xl text-xl ">{service.title}</h2>
            </span>
            <span className="flex flex-col gap-4">
              <p className="lg:text-3xl text-2xl  font-semibold">
                الفئة المستهدفة
              </p>
              <h2 className="lg:text-2xl text-xl ">{service.category}</h2>
            </span>
            <span className="flex flex-col gap-4">
              <p className="lg:text-3xl text-2xl  font-semibold"> الإدارة</p>
              <h2 className="lg:text-2xl text-xl ">{service.manager}</h2>
            </span>
            <span className="flex flex-col gap-4">
              <p className="lg:text-3xl text-2xl  font-semibold">
                موقع الخدمة
              </p>
              <Link href={service.website} className="text-2xl break-words">
                {service.website}
              </Link>
            </span>
            <span className="flex flex-col gap-4">
              <p className="lg:text-3xl text-2xl  font-semibold"> تواصل معنا</p>
              <h2 className="lg:text-2xl text-xl ">{service.contact_us}</h2>
            </span>
            <span className="flex flex-col gap-4">
              <p className="lg:text-3xl text-2xl  font-semibold">
                رسوم الخدمة
              </p>
              <Link href={service.website} className="text-2xl ">
                {service.price}
              </Link>
            </span>
          
           
          </div>
        </div>

        <AccordionSectionService title={t("termsOfService")} items={termOfServices} />
        <AccordionSectionService title={t("procedures")} items={procedures} />
      </div>
    </section>
  );
};

export default ServiceDetails;
