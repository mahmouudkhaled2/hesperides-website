import { getTranslations, getLocale } from "next-intl/server"
import Image from "next/image";
import { heroBG } from "../../../../../../../public";
import CertficatesAndAwards from "./_components/certficates-and-rewards";
import { getUniversityFounder } from "@/lib/apis/explore-university.api";

// Founder interface
// interface Founder {
//   name: string;
//   image: string;
// }

// CV of the University Founder
interface CVFounderUniversity {
  description: string;
}


// All Founder Data Response
// interface UniversityData {
//   founder: Founder;
//   cv_founder_university: CVFounderUniversity[];
//   award: Award[];
//   madals: Medal[];
//   certificates: Certificate[];
// }

export default async function page() {

  // Translation
  const t = await getTranslations();
  const locale = await getLocale();

  // Variables
  const founderData = await getUniversityFounder(locale) || [];

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-black relative h-screen">
          <Image alt="Hesperides Explore" src={heroBG} fill sizes="100%" className="w-full lg:h-3/4 h-1/2 object-cover" />
          <h1 className="text-white text-3xl lg:text-7xl font-bold absolute lg:top-[80%] bottom-[10%] right-6 flex items-center justify-center">
              { founderData.data.founder.name || '---' }
          </h1>
      </section>

      {/* Founder CV */}
      <section className="grid grid-cols-1 lg:grid-cols-6 gap-14 my-16 px-6">
        <div className="lg:col-span-2 relative w-full h-[450px] rounded-2xl overflow-hidden"> 
          <Image src={founderData.data.founder.image || heroBG } alt="Founder Picture" fill sizes="100%" className="object-cover"/>
        </div>

        <div className="lg:col-span-4 max-h-[450px] overflow-auto pe-5">
          <h2 className="text-3xl text-zinc-900 font-semibold mb-5">{t("founder-cv")}</h2>
          <div className="flex flex-col gap-5">
            {founderData.data.cv_founder_university.map((item: CVFounderUniversity, i: number) => (
              <p key={i} className="text-2xl text-zinc-900 ps-4 border-s-4 border-[#c49732]">
                { item.description }
              </p>
            ))}
          </div>
        </div>
        
      </section>

      {/* Cerficates and rewards */}

      { founderData?.data?.length === 0 ? 
      <div>
        {t("there-is-no-data-here")}
      </div> 
      :
      <CertficatesAndAwards certficates={founderData.data.certificates} awards={founderData.data.award} medals={founderData.data.madals} /> 
      }
    </>
  )
}
