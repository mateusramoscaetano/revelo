"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Carousel() {
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
          slideShadows: true,
        }}
        loop
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper overflow-hidden"
      >
        <SwiperSlide>
          <Image
            src="/gallery/_0000_PHOTO14.jpg"
            width={300}
            height={300}
            alt="image-1"
            className="overflow-hidden"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/gallery/_0001_PHOTO13.jpg"
            width={300}
            height={300}
            alt="image-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/gallery/_0002_PHOTO12.jpg"
            width={300}
            height={300}
            alt="image-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/gallery/_0003_PHOTO11.jpg"
            width={300}
            height={300}
            alt="image-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/gallery/_0004_PHOTO10.jpg"
            width={300}
            height={300}
            alt="image-1"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
