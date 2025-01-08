"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

import { EffectCoverflow, Pagination, Navigation, A11y } from "swiper/modules";

import { mediaItems } from "@/utils/media-items";
import { SwiperNavButtons } from "./swiper-nav-button";
import type { Swiper as ST } from "swiper/types";
import { useState } from "react";

export function CarouselLg() {
  const shuffledItems = mediaItems;
  const [swiper, setSwiper] = useState<ST>();

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        draggable={true}
        centeredSlides={true}
        slidesPerView={8}
        initialSlide={0}
        loop
        onSwiper={setSwiper}
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
