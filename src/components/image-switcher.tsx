"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function ImageSwitcher({
  image1,
  image2,
}: {
  image1: string;
  image2: string;
}) {
  {
    const [currentImage, setCurrentImage] = useState(image1);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev === image1 ? image2 : image1));
      }, 2000);

      return () => clearInterval(interval);
    }, [image1, image2]);

    return (
      <motion.img
        src={currentImage}
        alt="Alternating"
        key={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        style={{ width: "100%", height: "auto" }}
      />
    );
  }
}
