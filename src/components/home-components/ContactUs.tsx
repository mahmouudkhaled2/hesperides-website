import { useTranslations } from "next-intl";
import GoogleMap from "./GoogleMap";

const ContactUs = () => {
    const t = useTranslations();
  
  return (
    <section id="contact_us" className=" h-full my-12  flex justify-center items-center">
      <div className="container mx-auto  flex lg:flex-row flex-col gap-10 justify-center items-center max-w-6xl p-4">
        <div className="lg:w-1/2 w-full flex flex-col gap-4 text-lg">
          <h1 className="text-5xl font-bold"> {t("contact_us")}</h1>
          <p className="text-3xl font-medium">
          {t("contact_us_content")}
     
          </p>
          <form>
            <input placeholder={t("full_name")} className="block w-full my-4 p-3 border-[1px] border-[#EEEEEE73 rounded-md bg-[#EEEEEE73] text-[#C2C2C261]" />
            <input placeholder={t("email")}  className="block w-full my-4 p-3 border-[1px] border-[#EEEEEE73 rounded-md bg-[#EEEEEE73] text-[#C2C2C261]" />
            <input  placeholder={t("phone_number")} className="block w-full my-4 p-3 border-[1px] border-[#EEEEEE73 rounded-md bg-[#EEEEEE73] text-[#C2C2C261]" />
            <textarea  placeholder={t("your_message")} className="block w-full my-4 p-3 border-[1px] border-[#EEEEEE73 rounded-md bg-[#EEEEEE73] text-[#C2C2C261] min-h-40 " />
            <button className="bg-[#0b1e38] hover:bg-[#C49732] transition-all duration-300 ease-in-out w-full rounded-md text-white text-xl h-10">{t("send")}</button>
          </form>
        </div>
        <GoogleMap />
      </div>
    </section>
  );
};

export default ContactUs;
