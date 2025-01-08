"use client";

import { CarouselMobile } from "./carousel-mobile";
import { CarouselLg } from "./carousel-lg";
import { CarouselMd } from "./carousel-md";

export function CarouselContainer() {
  return (
    <>
      <div
        id="gallery"
        className="flex md:hidden w-full min-h-full items-center justify-center pb-[50px] "
      >
        <CarouselMobile />
      </div>
      {/* <div
        id="gallery"
        className="hidden md:flex 1400:hidden w-full min-h-full items-center justify-center pb-[50px] py-40"
      >
        <CarouselMd />
      </div> */}
      <div
        id="gallery"
        className="hidden md:flex w-full min-h-full items-center justify-center pb-[50px] py-40"
      >
        <CarouselLg />
      </div>
    </>
  );
}
