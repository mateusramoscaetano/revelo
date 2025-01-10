import Image from "next/image";
import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button
        className="absolute left-20 top-[50%] z-20"
        type="button"
        onClick={() => swiper.slidePrev()}
      >
        <Image
          src="FLECHA.svg"
          width={30}
          height={30}
          className="text-revelo rotate-180"
          alt=""
        />
      </button>
      <button
        className="absolute right-20 top-[50%] z-20"
        type="button"
        onClick={() => swiper.slideNext()}
      >
        <Image
          src="FLECHA.svg"
          width={30}
          height={30}
          className="text-revelo"
          alt=""
        />
      </button>
    </div>
  );
};
