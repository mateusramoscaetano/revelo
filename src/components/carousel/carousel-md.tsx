"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

import { EffectCoverflow, Pagination, Navigation, A11y } from "swiper/modules";

import { mediaItems } from "@/utils/media-items";
import { SwiperNavButtons } from "./swiper-nav-button";

export function CarouselMd() {
  const shuffledItems = mediaItems;

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        draggable={false}
        centeredSlides={true}
        slidesPerView={5}
        loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation, A11y]}
        className="mySwiper overflow-hidden object-cover relative select-none"
      >
        {shuffledItems.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.src}
              width={300}
              height={300}
              alt={`media-${index}`}
              className="overflow-hidden"
              fetchPriority="high"
            />
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </>
  );
}
