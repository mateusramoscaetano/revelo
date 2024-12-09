"use client";
import { useEffect, useState } from "react";
import { CarouselMobile } from "./carousel-mobile";
import Carousel from "./carousel-test";

export function CarouselContainer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex w-full min-h-full items-center justify-center pb-[50px]">
      {isMobile ? <CarouselMobile /> : <Carousel />}
    </div>
  );
}
