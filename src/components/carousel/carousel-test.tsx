"use client";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

import { EffectCoverflow, Pagination, Navigation, A11y } from "swiper/modules";
import Image from "next/image";
import { mediaItems } from "@/utils/media-items";
import { SwiperNavButtons } from "./swiper-nav-button";

export default function Carousel() {
  const [isMobile, setIsMobile] = useState(false);
  const shuffledItems = mediaItems;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        loop
        slideToClickedSlide
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation, A11y]}
        className="mySwiper overflow-hidden object-cover relative"
      >
        {shuffledItems.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.src}
              width={300}
              height={300}
              alt={`media-${index}`}
              className="overflow-hidden"
            />
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </>
  );
}
