import Image from "next/image";
import { presidentImg } from "../../../public";
import { useTranslations } from "next-intl";
import { LiaUniversitySolid } from "react-icons/lia";

const PresidentsMessage = () => {
  const t = useTranslations("PresidentsMessage");

  return (
    <section className="my-12 flex flex-col justify-center items-center">
      <div className="container mx-auto flex flex-col max-w-6xl p-4 gap-4 h-full">
        <Image
          src={presidentImg}
          alt={t("imageAlt")}
          width={300}
          className="object-contain"
        />
        <h2 className="lg:text-5xl text-3xl font-semibold text-[#0b1e38]">
          {t("title")}
        </h2>
        <p className="text-2xl font-semibold">{t("message1")}</p>
        <p className="text-2xl font-semibold">{t("message2")}</p>
        <p className="text-2xl font-semibold">{t("message3")}</p>
        <span className="text-2xl font-bold flex flex-col justify-end items-end text-[#0b1e38]">
          <p>{t("presidentName")}</p>
          <p>{t("presidentTitle")}</p>
        </span>
      </div>
      <div className="bg-[#fafafa] flex flex-col justify-center items-center w-full h-[30vh] my-20 p-4">
        <div className="container mx-auto max-w-6xl flex lg:flex-row flex-col gap-4">
          <div className="bg-[#ECECEC8C] rounded-xl h-60 w-full flex flex-col justify-center items-center font-bold gap-2">
            <LiaUniversitySolid size={50} />
            <p className="text-5xl">2</p>
            <p className="text-3xl">{t("facultiesLabel")}</p>
          </div>
          <div className="bg-[#ECECEC8C] rounded-xl h-60 w-full flex flex-col justify-center items-center font-bold gap-2">
            <LiaUniversitySolid size={50} />
            <p className="text-5xl">100</p>
            <p className="text-3xl">{t("studentsLabel")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentsMessage;
