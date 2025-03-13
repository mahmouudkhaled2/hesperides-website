import Image from "next/image";
import { GoArrowLeft } from "react-icons/go";
import { getFees } from "@/utlis/https";
import { Link } from "@/i18n/routing";

interface UniversityAdmission {
  params: {
    id: number;
    locale: string;
  };
}

interface FeeData {
  id: number;
  main_title: string;
  image: string;
}

interface FeesResponse {
  success: boolean;
  message: string;
  data: {
    Description: string;
    data: FeeData[];
  };
}

const TuitionFeesPage = async ({ params }: UniversityAdmission) => {
  const { id, locale } = params;

  const response: FeesResponse = await getFees(locale, id);

  if (!response.success) {
    return <p>حدث خطأ أثناء جلب البيانات.</p>;
  }
  return (
    <section className="p-6">
      <p className="text-3xl my-10 font-medium">{response.data.Description}</p>
      <div className="grid grid-cols-12">
        {response.data.data.map((data) => (
          <Link href={`/fees/fees-details/${data.id}`} key={data.id} className="col-span-4">
            <div className="w-full flex flex-col gap-4">
              <Image
                className="rounded-3xl"
                width={500}
                height={300}
                alt={data.main_title}
                src={data.image}
              />
              <p className="text-4xl font-semibold">{data.main_title}</p>
              <button className="bg-[#C49732] rounded-full text-white size-10 text-3xl flex justify-center items-center">
                <GoArrowLeft />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TuitionFeesPage;
