"use client";

import { CarouselMobile } from "./carousel-mobile";
import Carousel from "./carousel-test";

export function CarouselContainer() {
  return (
    <>
      <div className="flex md:hidden w-full min-h-full items-center justify-center pb-[50px]">
        <CarouselMobile />
      </div>
      <div className="hidden md:flex w-full min-h-full items-center justify-center pb-[50px]">
        <Carousel />
      </div>
    </>
  );
}
