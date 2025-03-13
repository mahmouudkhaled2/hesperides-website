import { getFStudents } from "@/utlis/explore";
import Students from "./Students";

interface UniversityStudentsProps {
  params: { id: string; locale: string };
}

async function fetchstudentsData(locale: string, id: number) {
  try {
    const response = await getFStudents(locale, id);
    if (!response || !response.success) {
      throw new Error("Invalid response from getStudents");
    }
    return response;
  } catch (error) {
    console.error("Failed to fetch Students data:", error);
    return null;
  }
}

export default async function Page({ params }: UniversityStudentsProps) {
  const id = parseInt(params.id, 10);
  if (isNaN(id)) {
    return <p className="text-center text-xl">معرف غير صالح.</p>;
  }

  const rawStudentsData = await fetchstudentsData(params.locale, id);

  if (!rawStudentsData || !rawStudentsData.data) {
    return <p className="text-center text-xl">حدث خطأ أثناء جلب البيانات.</p>;
  }

  const studentsData = {
    data: {
      projects: rawStudentsData.data.projects?.data || [],
      awards: rawStudentsData.data.awards?.data || [],
      successStories: rawStudentsData.data.stories_success?.data || [],
    },
  };

  return <Students studentsData={studentsData} />;
}