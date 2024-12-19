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
}: {
  image1: string;
  image2: string;
  className?: string;
  className2?: string;
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
    <div className="relative w-full h-full">
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
            duration: 1, // Duração do efeito de fade
          }}
          className={cn(
            "absolute top-0 left-0 w-full h-full object-cover", // Garantir que as imagens se sobreponham
            currentImage === image1 ? className : "",
            currentImage === image2 ? className2 : ""
          )}
        />
      </AnimatePresence>
    </div>
  );
}
