"use client";
import { PersonStanding } from "lucide-react";
import { PercentSquareIcon } from "lucide-react";
import { Carousel } from "./embla-carousel";
import { motion } from "framer-motion";

export function TemplateCarousel() {
  return (
    <>
      <Carousel>
        <motion.div className="embla__slide w-[352px] h-[352px] border-1 border-white flex items-center justify-center max-w-2xl">
          <PercentSquareIcon size={50} />
        </motion.div>{" "}
        <div className="embla__slide w-[352px] h-[352px] border-1 border-white flex items-center justify-center max-w-2xl">
          <PercentSquareIcon size={50} />
        </div>
        <div className="embla__slide w-[352px] h-[352px] border-1 border-white flex items-center justify-center max-w-2xl">
          <PercentSquareIcon size={50} />
        </div>
        <div className="embla__slide w-[352px] h-[352px] border-1 border-white flex items-center justify-center max-w-2xl">
          <PercentSquareIcon size={50} />
        </div>
        <div className="embla__slide w-[352px] h-[352px] border-1 border-white flex items-center justify-center max-w-2xl">
          <PercentSquareIcon size={50} />
        </div>
        <div className="embla__slide w-[352px] h-[352px] border-1 border-white flex items-center justify-center max-w-2xl">
          <PercentSquareIcon size={50} />
        </div>
        <div className="embla__slide w-[352px] h-[352px] border-1 border-white flex items-center justify-center max-w-2xl">
          <PercentSquareIcon size={50} />
        </div>
        <div className="embla__slide w-[352px] h-[352px] border-1 border-white flex items-center justify-center max-w-2xl">
          <PercentSquareIcon size={50} />
        </div>
      </Carousel>
    </>
  );
}
