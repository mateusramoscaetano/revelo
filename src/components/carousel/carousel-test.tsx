"use client";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import { mediaItems } from "@/utils/media-items";

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
        slidesPerView={isMobile ? 3 : 5}
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
