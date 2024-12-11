import { SquareChevronLeft, SquareChevronRight } from "lucide-react";
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
        <SquareChevronLeft size={48} className="text-revelo" />
      </button>
      <button
        className="absolute right-20 top-[50%] z-20"
        type="button"
        onClick={() => swiper.slideNext()}
      >
        <SquareChevronRight
          size={48}
          className="text-[#101010]"
          fill="#ec2d31"
        />
      </button>
    </div>
  );
};
