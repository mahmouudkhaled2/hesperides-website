import Image from "next/image";
import { background1 } from "../../../../../public";
import { useTranslations } from "next-intl";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const t = useTranslations();
  return (
    <>
      <main className="relative w-full h-auto overflow-hidden">
        <div className="w-full lg:h-[700px] h-[600px] relative">
          <Image
            alt="background"
            fill
            className="object-cover"
            src={background1}
          />
          <div className="absolute bottom-14 start-10">
            <h1 className="text-white lg:text-8xl text-7xl font-semibold">
              {t("Tuition_Fees_and_Scholarships")}
            </h1>
          </div>
        </div>
        <div className=" w-full">{children}</div>
      </main>
    </>
  );
}
