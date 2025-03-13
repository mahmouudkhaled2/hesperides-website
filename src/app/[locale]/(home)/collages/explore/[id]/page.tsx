import { getExplore } from "@/utlis/explore";
import Explore from "./Explore";

interface UniversityExploreProps {
  params: {
    id: string; 
    locale: string;
  };
}

export default async function Page({ params }: UniversityExploreProps) {

  const exploreData = await getExplore(params.locale, parseInt(params.id, 10));

  if (!exploreData || !exploreData.data) {
    return <p className="text-center text-xl">حدث خطأ أثناء جلب البيانات.</p>;
  }


  return <Explore exploreData={exploreData.data} params={{ ...params, id: parseInt(params.id, 10) }} />;
}