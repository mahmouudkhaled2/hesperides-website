import AccordionComponent from "@/components/AccordionComponent";
import { getCareerPath } from "@/lib/apis/student-life.api";
import { Suspense } from "react";

interface CareerPathProps {
  params: {
    locale: string;
  };
}

// Type definition for the response
interface CareerPathData {
  success: boolean;
  message: string;
  data: {
    name: string;
    description: string;
  }[];
}

const CareerPath = async ({ params }: CareerPathProps) => {
  const { locale } = params;

  const response: CareerPathData = await getCareerPath(locale);

  return (
    <section>
      <div className="w-full p-6">
        <AccordionComponent AccordionComponentData={response.data} />
      </div>
    </section>
  );
};

const CareerPathWithSuspense = ({ params }: CareerPathProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CareerPath params={params} />
    </Suspense>
  );
};

export default CareerPathWithSuspense;
