"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style-mobile.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import { mediaItems } from "@/utils/media-items";

export function CarouselMobile() {
  const shuffledItems = mediaItems;

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        loop
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper overflow-hidden object-cover"
      >
        {shuffledItems.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "image" ? (
              <Image
                src={item.src}
                width={300}
                height={300}
                alt={`media-${index}`}
                className="overflow-hidden"
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
