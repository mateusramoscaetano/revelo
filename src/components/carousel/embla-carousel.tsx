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

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="embla w-full" id="carousel">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">{children}</div>
      </div>

      <motion.button
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        onClick={scrollPrev}
        className="embla__prev absolute left-4"
      >
        <ArrowLeftIcon className="size-4" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        onClick={scrollNext}
        className="embla__next absolute right-4"
      >
        <ArrowRightIcon className="size-4" />
      </motion.button>

      <div className="embla__dots absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            type="button"
            key={index}
            className={`embla__dot h-2 w-2 rounded-full bg-white ${
              inView === index ? "scale-105 opacity-100" : "bg-white opacity-50"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
