"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style-mobile.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import { mediaItems } from "@/utils/media-items";

export function CarouselMobile() {
  const shuffledItems = mediaItems;
  const swiper = useSwiper();

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        loop
        spaceBetween={0}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper overflow-hidden object-cover relative "
      >
        {shuffledItems.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "image" ? (
              <Image
                src={item.src}
                width={300}
                height={300}
                alt={`media-${index}`}
                className="overflow-hidden "
              />
            ) : (
              <img
                src={item.src}
                width={300}
                height={300}
                alt={`media-${index}`}
                className="overflow-hidden"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
