"use client";

import { CarouselMobile } from "./carousel-mobile";
import { CarouselWeb } from "./carousel-web";

export function CarouselContainer() {
  return (
    <>
      <div
        id="gallery"
        className="flex md:hidden w-full min-h-full items-center justify-center pb-[50px] "
      >
        <CarouselMobile />
      </div>

      <div
        id="gallery"
        className="hidden md:flex w-full min-h-full items-center justify-center pb-[50px] py-40"
      >
        <CarouselWeb />
      </div>
    </>
  );
}
