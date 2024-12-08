"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const textMotion = {
  rest: {
    opacity: 0,
    x: 80,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const textMotion2 = {
  rest: {
    opacity: 0,
    x: 60,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

export function TeamMemberCard({
  img,
  name,
  position,
}: {
  img: string;
  name: string;
  position: string;
}) {
  const [isTouchActive, setIsTouchActive] = useState(false);

  const handleTouchStart = () => setIsTouchActive(true);
  const handleTouchEnd = () => setIsTouchActive(false);

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate={isTouchActive ? "hover" : "rest"}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`relative w-[352px] h-[352px] overflow-hidden cursor-pointer group transition-colors duration-700 ease-in-out ${
        isTouchActive ? "bg-white" : "lg:hover:bg-white"
      }`}
    >
      <motion.img
        src={img}
        alt="member-profile"
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isTouchActive ? "opacity-0" : "lg:group-hover:opacity-0"
        }`}
      />

      <div
        className={`absolute inset-0 flex flex-col items-start px-[30px] justify-end pb-[51px] transition-opacity duration-700 space-y-[0px] ${
          isTouchActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <motion.h1
          className="text-[25px] font-body-bold text-black leading-7"
          variants={textMotion}
          contentEditable={false}
        >
          {name}
        </motion.h1>
        <motion.h1
          className="text-[18px] font-light text-revelo"
          variants={textMotion2}
          contentEditable={false}
        >
          {position}
        </motion.h1>
      </div>
    </motion.div>
  );
}
