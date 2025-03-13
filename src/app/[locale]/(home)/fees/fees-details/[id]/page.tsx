import AccordionTitleComponent from "@/components/AccordionTitleComponent";
import { getFeesDetails } from "@/utlis/https";

interface UniversityAdmission {
  params: {
    id: number;
    locale: string;
  };
}

interface FeesResponse {
  success: boolean;
  message: string;
  data: {
    title: string; 
    description: string; 
  };
}

const FeesDetails = async ({ params }: UniversityAdmission) => {
  const { id, locale } = params;

  const response: FeesResponse = await getFeesDetails(locale, id);

  if (!response.success) {
    return <p>حدث خطأ أثناء جلب البيانات.</p>;
  }

  return (
    <section className="p-6">
      <AccordionTitleComponent AccordionComponentData={response.data}/>
    </section>
  );
};

export default FeesDetails;
