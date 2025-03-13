import Image from "next/image";
import { heroBG } from "../../../../../../../public";
import { getLocale, getTranslations } from "next-intl/server";
import { getUniversityPresident } from "@/lib/apis/explore-university.api";

interface CVPresidentUniversity {
  description: string;
}

interface Greeting {
  description: string;
}

export default async function page() {

  // Translation
  const t = await getTranslations();
  const locale = await getLocale();

  // Variables
  const presidentData = await getUniversityPresident(locale) || [];

    return (
      <>
      {/* Hero */}
      <section className="w-full bg-black relative h-screen">
          <Image alt="Hesperides Explore" src={heroBG} fill sizes="100%" className="w-full lg:h-3/4 h-1/2 object-cover" />
          <h1 className="text-white text-3xl lg:text-7xl font-bold absolute lg:top-[80%] bottom-[10%] right-6 flex items-center justify-center">
              { presidentData.data.president.name || '---' }
          </h1>
      </section>

      {/* President greetin */}
      <section className="grid grid-cols-1 lg:grid-cols-6 gap-14 my-16 px-6">
        <div className="lg:col-span-2 relative w-full h-[450px] rounded-2xl overflow-hidden"> 
          <Image src={ presidentData.data.president.image } alt="Founder Picture" fill sizes="100%" className="object-cover"/>
        </div>

        <div className="lg:col-span-4 max-h-[450px] overflow-auto pe-5">
          <h2 className="text-3xl text-zinc-900 font-semibold mb-5">{t("president-greeting")}</h2>
          {presidentData.data.greeting.map((item: Greeting, i: number) => (
              <p key={i} className="text-2xl text-zinc-900 ps-4 border-s-4 border-[#c49732]">
                { item.description }
              </p>
          ))}
        </div>
      </section>

      {/* President C.V */}
      <section className="grid grid-cols-1 lg:grid-cols-6 gap-14 my-16 px-6">

        <div className="lg:col-span-4 max-h-[450px] overflow-auto pe-5">
          <h2 className="text-3xl text-zinc-900 font-semibold mb-5">{t("president-cv")}</h2>
          <div className="flex flex-col gap-5">
            {presidentData.data.cv_president_university.map((item: CVPresidentUniversity, i: number) => (
                <p key={i} className="text-2xl text-zinc-900 ps-4 border-s-4 border-[#c49732]">
                  { item.description }
                </p>
            ))}
          </div>
        </div>
        
        {/* President picture */}
        <div className="lg:col-span-2 relative w-full h-[450px] rounded-2xl overflow-hidden"> 
          <Image src={presidentData.data.president.image} alt="Founder Picture" fill sizes="100%" className="object-cover"/>
        </div>
      </section>
    </>
    )
  }
  