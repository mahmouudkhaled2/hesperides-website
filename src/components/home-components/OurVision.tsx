import { useTranslations } from "next-intl";
import { FaUniversity, FaBookOpen, FaHandsHelping  } from "react-icons/fa";

const OurVision = () => {
  const t = useTranslations();
  const OurVisionData = [
    { id: 1, title: t("Vision"), description: t("VisionDesc"), icon: <FaUniversity size={50} /> },
    { id: 2, title: t("Our-message"), description: t("messageDec"), icon: <FaBookOpen size={50} /> },
    { id: 3, title: t("our-Values"), description: t("valuesdes"), icon: <FaHandsHelping  size={50} /> },
  ];

  return (
    <section className="lg:h-[50vh] h-full my-12 bg-[#fafafa] flex justify-center items-center">
      <div className="container mx-auto  flex gap-10 justify-center items-center flex-wrap">
        {OurVisionData.map((item) => (
          <div
            key={item.id}
            className="bg-[#C49732] min-h-[300px] w-[380px] rounded-lg p-6 flex flex-col gap-4 text-[#0b1e38] hover:text-white hover:bg-[#0b1e38] transition-all duration-300 ease-in-out"
          >
            {item.icon}
            <h2 className="text-4xl font-semibold">{item.title}</h2>
            <p className="text-2xl">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurVision;
