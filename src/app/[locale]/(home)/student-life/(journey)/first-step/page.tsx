import { getFirstStep } from "@/lib/apis/student-life.api";
import { Suspense } from "react";

interface FirstStepProps {
  params: {
    locale: string;
  };
}

// Type definition for the response
interface FirstStepData {
  success: boolean;
  message: string;
  data: {
    name: string;
    description: string;
  }[];
}

const FirstStep = async ({ params }: FirstStepProps) => {
  const { locale } = params;

  const response: FirstStepData = await getFirstStep(locale);

  return (
    <section>
      <div className="w-full p-6">
        {response.data.map((item, index) => (
          <div className="flex flex-col gap-8" key={index}>
            <h2 className="text-5xl font-semibold">{item.name}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: item.description.replace(/\r\n/g, "<br />"), 
              }}
              className="text-3xl font-semibold"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const FirstStepWithSuspense = ({ params }: FirstStepProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FirstStep params={params} />
    </Suspense>
  );
};

export default FirstStepWithSuspense;
