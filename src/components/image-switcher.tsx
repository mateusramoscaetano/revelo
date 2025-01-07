"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export function ImageSwitcher({
  image1,
  image2,
  className,
  className2,
  hasLineMobile = false,
  hasLineWeb = false,
  verticalLineClassName,
  horizontalLineClassName,
  redLineClassName,
}: {
  image1: string;
  image2: string;
  className?: string;
  className2?: string;
  hasLineMobile?: boolean;
  hasLineWeb?: boolean;
  verticalLineClassName?: string;
  horizontalLineClassName?: string;
  redLineClassName?: string;
}) {
  const [currentImage, setCurrentImage] = useState(image1);

  const randomTime = Math.floor(Math.random() * 4000) + 3000;

  useEffect(() => {
    const timerID = setTimeout(() => {
      setCurrentImage((prev) => (prev === image1 ? image2 : image1));
    }, randomTime);

    return () => {
      clearTimeout(timerID);
    };
  }, [currentImage, image1, image2, randomTime]);

  return (
    <div className="relative w-full h-full ">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentImage}
          src={currentImage}
          alt="Alternating"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            type: "tween",
            duration: 1,
          }}
          className={cn(
            "absolute top-0 left-0 w-full h-full object-cover",
            currentImage === image1 ? className : "",
            currentImage === image2 ? className2 : ""
          )}
        />
        {hasLineMobile && (
          <>
            <div className="absolute h-0.5 w-[28px] bottom-[28px] 370:bottom-5 bg-white"></div>
            <div className="absolute h-[30px] 370:h-[22px] w-[2px] bottom-0 left-[28px]  bg-white"></div>
            <div className="bg-revelo h-[61px] w-0.5 absolute bottom-[-61px] left-[28px] z-20"></div>
          </>
        )}
        {hasLineWeb && (
          <>
            <div
              className={cn(
                "absolute h-0.5 w-[28px] bottom-10  bg-white",
                horizontalLineClassName
              )}
            ></div>
            <div
              className={cn(
                "absolute h-[42px] w-[2px] bottom-0 left-[28px]  bg-white",
                verticalLineClassName
              )}
            ></div>
            <div
              className={cn(
                "bg-revelo h-[81px] w-0.5 absolute bottom-[-80px] left-[28px] z-20",
                redLineClassName
              )}
            ></div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
