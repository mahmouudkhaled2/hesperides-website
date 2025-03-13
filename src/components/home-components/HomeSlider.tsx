"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
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
interface HomeSliderProps {
  data: HomeData;
}

const HomeSlider = ({ data }: HomeSliderProps) => {
  const t = useTranslations();

  return (
    <section className=" w-full  lg:py-6 justify-center items-center p-4  bg-[#fafafa]">
      <div className="container mx-auto    max-w-6xl p-4">
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {data?.services?.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg">
                <div className="bg-[#0b1e38] w-full max-w-xl rounded-lg lg:h-48 h-44 flex flex-col justify-between p-4">
                  <p className="text-[#C49732] lg:text-2xl text-lg">
                    {banner.title.length > 60
                      ? `${banner.title.slice(0, 60)}...`
                      : banner.title}
                  </p>

                  <a
                    href={banner.book}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#C49732] hover:bg-white transition-all duration-300 ease-in-out w-32 rounded-md text-white hover:text-[#C49732] hover:scale-110 text-xl h-12 mt-6">
                      {t("read_more")}
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
