import Image from "next/image";
import { useTranslations } from "next-intl";
import { WhoWeAreImg } from "../../../public";

const WhoWeAre = () => {
  const t = useTranslations("whoWeAre"); 

  return (
    <section className="container mx-auto   h-full my-12">
      <div className="grid xl:gap-12 lg:gap-10 gap-8 lg:grid-cols-8 grid-cols-2 justify-center items-center">
        <div className="lg:col-span-3 col-span-12 space-y-4 p-4">
          <h1 className="font-semibold text-5xl">{t("title")}</h1> 
          <p className="text-2xl">{t("description1")}</p>
          <div className="relative w-full h-64">
            <Image
              src={WhoWeAreImg}
              alt={t("imageAlt")}
              fill
              className="rounded-md object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-5 col-span-12 space-y-4 p-4">
          <h2 className="font-medium text-3xl">{t("welcome")}</h2>
          <p className="text-2xl">{t("description2")}</p>
          <p className="text-2xl">{t("description3")}</p>
          <p className="text-2xl">{t("description4")}</p>
        </div>
      </div>
    </section>
  );
  
};

export default WhoWeAre;
