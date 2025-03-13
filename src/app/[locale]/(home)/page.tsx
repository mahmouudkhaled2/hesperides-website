import { getHome } from "@/utlis/https";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroSection = dynamic(
  () => import("@/components/home-components/HeroSection")
);
const WhoWeAre = dynamic(() => import("@/components/home-components/WhoWeAre"));
const OurVision = dynamic(
  () => import("@/components/home-components/OurVision")
);
const PresidentsMessage = dynamic(
  () => import("@/components/home-components/PresidentsMessage")
);
const WhyHesperidesUniversity = dynamic(
  () => import("@/components/home-components/WhyHesperidesUniversity")
);
const OurOffer = dynamic(() => import("@/components/home-components/OurOffer"));
const HomeSlider = dynamic(
  () => import("@/components/home-components/HomeSlider")
);
const ApplicationProcess = dynamic(
  () => import("@/components/home-components/ApplicationProcess")
);
const ContactUs = dynamic(
  () => import("@/components/home-components/ContactUs")
);

interface Service {
  title: string;
  book: string;
}

interface HomeData {
  success: boolean;
  message: string;
  data: {
    ethics_policies: string;
    improvement_plans: string;
    services: Service[];
  };
}

interface HomeProps {
  params: {
    locale: string;
  };
}

export default async function Home({ params }: HomeProps) {
  let homeData: HomeData | null = null;
  let error: string | null = null;

  try {
    homeData = await getHome(params.locale);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    error = "حدث خطأ أثناء جلب البيانات";
  }

  if (error) {
    return (
      <div className="text-red-500 h-screen flex justify-center items-center">
        <p className="text-4xl font-semibold">{error}</p>
      </div>
    );
  }

  if (!homeData) {
    return  <div className="text-red-500 h-screen flex justify-center items-center">
        <p className="text-4xl font-semibold">لم يتم العثور على البيانات</p>
      </div>;
  }

  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <OurVision />
      <PresidentsMessage />
      <Suspense fallback={<div>Loading...</div>}>
        <WhyHesperidesUniversity data={homeData?.data} />
      </Suspense>
      <Suspense fallback={<div>Loading Home Slider...</div>}>
        <HomeSlider data={homeData?.data} />
      </Suspense>
      <OurOffer />
      <ApplicationProcess />
      <ContactUs />
    </>
  );
}
