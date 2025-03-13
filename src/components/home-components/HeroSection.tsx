import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 right-0 left-0 w-full h-full object-cover z-30"
        autoPlay
        loop
        muted
      >
        <source src="/hesperides.mp4" type="video/mp4" />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>

      {/* النص فوق الفيديو */}
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 pointer-events-none z-40">
        <div className="text-center xl:text-7xl lg:text-6xl  text-5xl text-white flex flex-col gap-3">
          <h1>{t("leadershipInEducation")}</h1>
          <h1>{t("towardsBetterFuture")}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
