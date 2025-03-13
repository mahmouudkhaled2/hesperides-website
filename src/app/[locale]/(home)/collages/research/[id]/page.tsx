import { getResearch } from "@/utlis/explore";
import Research from "./Research";

interface UniversityResearchProps {
  params: { id: number; locale: string };
}

async function fetchResearchData(locale: string, id: number) {
  try {
    const response = await getResearch(locale, id);
    return response;
  } catch (error) {
    console.error("Failed to fetch Research data:", error);
    return null;
  }
}

export default async function Page({ params }: UniversityResearchProps) {
  const researchData = await fetchResearchData(params.locale, params.id);

  if (!researchData || !researchData.data) {
    return <p className="text-center text-xl">حدث خطأ أثناء جلب البيانات.</p>;
  }

  return <Research researchData={researchData} />;
}