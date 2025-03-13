import Image from "next/image";
import { WhyHesperides1, WhyHesperides2 } from "../../../public";
import { useTranslations } from "next-intl";
interface Service {
  title: string;
  book: string;
}
interface HomeData {
  ethics_policies: string;
  improvement_plans: string;
  services: Service[];
}
interface OurOfferProps {
  data: HomeData;
}
const WhyHesperidesUniversity = ({ data }: OurOfferProps) => {

  const t = useTranslations();

  return (
    <section className="h-full my-12  flex justify-center items-center">
      <div className="container mx-auto  flex  flex-col gap-28 justify-center items-center max-w-6xl lg:p-0 p-4">
        <div className="grid lg:grid-cols-12 grid-cols-2 w-full gap-10">
          <div className="col-span-6 w-full">
            <h2 className="text-5xl font-semibold">
              {t("why_choose_hesperides")}
            </h2>
            <div className="flex flex-col gap-1 my-4 text-[1.4rem] font-semibold">
              <p>{t("academic_programs")}</p>
              <p>{t("scientific_research")}</p>
              <p>{t("student_training")}</p>
              <p>{t("entrepreneurship")}</p>
              <p>{t("sustainability")}</p>
              <p>{t("strategic_partnerships")}</p>
            </div>
            <button className="bg-[#0b1e38] hover:bg-[#C49732] transition-all duration-300 ease-in-out w-48 rounded-md text-white text-2xl h-14 mt-6">
              {t("register_now")}
            </button>
          </div>
          <div className="col-span-6 w-full">
            <Image
              className="object-cover"
              alt="WhyHesperides1"
              width={600}
              src={WhyHesperides1}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-2 w-full gap-10 justify-center items-center">
          <div className="col-span-6 w-full">
            <Image
              className="object-cover"
              alt="WhyHesperides2"
              width={600}
              src={WhyHesperides2}
            />
          </div>
          <div className="col-span-6 w-full">
            <h2 className="text-5xl font-semibold">{t("code_of_ethics")} </h2>
            <div className="flex flex-col gap-2 my-4 text-[1.4rem] font-semibold">
              <p>{t("code_of_ethics_paragraph_1")}</p>
              <p>{t("code_of_ethics_paragraph_2")}</p>
            </div>
            <a
              href={data?.ethics_policies}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#0b1e38] hover:bg-[#C49732] transition-all duration-300 ease-in-out w-40 rounded-md text-white text-2xl h-14 mt-6">
                {t("read_more")}
              </button>
            </a>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-2 w-full gap-10 justify-center items-center">
          <div className="col-span-6 w-full">
            <h2 className="text-5xl font-semibold">{t("improvement_plan")}</h2>
            <div className="flex flex-col gap-2 my-4 text-[1.4rem] font-semibold">
              <p>{t("improvement_plan_paragraph")}</p>
            </div>
            <a
              href={data?.improvement_plans}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#0b1e38] hover:bg-[#C49732] transition-all duration-300 ease-in-out w-40 rounded-md text-white text-2xl h-14 mt-6">
                {t("read_more")}
              </button>
            </a>
          </div>
          <div className="col-span-6 w-full">
            <Image
              className="object-cover"
              alt="WhyHesperides2"
              width={600}
              src={WhyHesperides2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHesperidesUniversity;
