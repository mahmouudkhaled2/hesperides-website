"use client";

import React, { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { LibraryData } from './page';

const SwiperComponent = ({ libraryData }: { libraryData: LibraryData | null }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const t = useTranslations();
  const locale = useLocale();

  if (!libraryData) {
    return <p className="text-center text-red-500">No data available.</p>;
  }

  return (
    <div>
      <div className="mt-12 mb-10">
        <h1 className="lg:text-5xl text-3xl font-bold mr-6 mb-4 ml-6">{t('LibraryImages')}</h1>
        <div className="border-b-4 border-yellow-600 my-1 w-[13%] mr-[2%] ml-[2%]"></div>
        <div className="border-b-4 border-s-gray-600 w-[96%] mr-[2%] ml-[2%]"></div>
      </div>

      <div className="w-full relative h-[400px] md:h-[500px] lg:h-[600px] px-4 sm:px-10 flex justify-center ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {libraryData.slider.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide.url}
                alt={`Slide ${index}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-lg"
                width={300}
                height={200}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 px-4 py-2 bg-gray-800 bg-opacity-50 rounded-md text-white z-10">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-2xl sm:text-3xl text-yellow-600 hover:text-yellow-400 transition-colors"
          >
            {locale === 'ar' ? <IoIosArrowForward /> : <IoIosArrowBack />}
          </button>

          <span className="text-lg sm:text-2xl md:text-3xl">
            {(swiperRef.current?.realIndex ?? 0) + 1} / {libraryData.slider.length}
          </span>


          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="text-2xl sm:text-3xl text-yellow-600 hover:text-yellow-400 transition-colors"
          >
            {locale === 'ar' ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;