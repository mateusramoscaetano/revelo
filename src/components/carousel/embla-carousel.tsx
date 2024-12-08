"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { motion } from "framer-motion";
import { useDotButton } from "@/hooks/use-dot-button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

interface ICarouselProps {
  children: React.ReactNode;
  loop?: boolean;
}

export function Carousel({ children, loop = true }: ICarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
  });
  const [inView, setInView] = useState<number>(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        const activeSlideIndex = emblaApi.selectedScrollSnap();
        setInView(activeSlideIndex);
      });
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla " id="carousel">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">{children}</div>
      </div>
    </div>
  );
}
