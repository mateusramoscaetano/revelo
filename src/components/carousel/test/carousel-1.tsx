"use client";
import "./style.css";

import { useState } from "react";
import { mediaItems } from "@/utils/media-items";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length
    );
  };

  const calculateStyle = (index: number) => {
    const offset = index - currentIndex;

    // Coverflow settings
    const rotate = 50; // degrees
    const depth = 100; // px
    const stretch = 0; // px
    const modifier = 1; // intensity multiplier

    // Calculating transformations
    const translateX = offset * (200 + stretch);
    const translateZ = -Math.abs(offset) * depth * modifier;
    const rotationY = offset * rotate;

    // Return dynamic styles
    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotationY}deg)`,
      zIndex: -Math.abs(offset), // Ensures stacking order
      opacity: Math.abs(offset) > 3 ? 0 : 1, // Fades out distant slides
    };
  };

  return (
    <div className="carousel-container relative w-full flex items-center">
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-2 z-10 bg-black text-white px-4 py-2"
      >
        Prev
      </button>
      <div className="carousel relative w-full h-[400px] flex items-center justify-center perspective-[1000px] overflow-hidden">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="carousel-item absolute w-[300px] h-[300px] rounded-lg shadow-lg transition-transform duration-500"
            style={calculateStyle(index)}
          >
            <img
              src={item.src}
              alt={`media-${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-2 z-10 bg-black text-white px-4 py-2"
      >
        Next
      </button>
    </div>
  );
}
