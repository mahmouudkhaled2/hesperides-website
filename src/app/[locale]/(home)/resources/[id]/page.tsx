import { getAdmissionResources } from "@/utlis/https";

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

const Resources = async ({ params }: UniversityAdmission) => {
  const { id, locale } = params;

  const response: FeesResponse = await getAdmissionResources(locale, id);
  if (!response.success) {
    return <p>حدث خطأ أثناء جلب البيانات.</p>;
  }
  const ResourceData = response.data;
  return (
    <section className="p-6 h-full my-12">
      <div className="flex flex-col gap-6 relative">
        <h1 className="lg:text-6xl text-5xl font-semibold">{ResourceData.title}</h1>
        <div className="relative">
          <div className="h-[4px]  bg-[#C49732] absolute top-1/2 transform -translate-y-1/2 w-72" />
          <div className="h-[2px] w-full bg-gray-300 my-4" />
        </div>

        <div
          className="mt-4 text-gray-700 lg:text-3xl text-2xl font-semibold !leading-snug accordion-description"
          dangerouslySetInnerHTML={{
            __html: ResourceData.description.replace(/\r\n/g, "<br />"),
          }}
        />
      </div>
    </section>
  );
};

export default Resources;
