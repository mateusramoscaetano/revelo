"use client";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useState, type ReactNode } from "react";
interface IMainButtonProps extends HTMLMotionProps<"button"> {
  label: ReactNode;
}

export function MainButton({ label, ...rest }: IMainButtonProps) {
  return (
    <>
      <div className="  cursor-pointer group hidden lg:flex">
        <motion.button
          {...rest}
          className="flex items-center justify-center px-3 py-2.5 bg-revelo tracking-wider rounded-lg relative w-[105px] h-7 group-hover:scale-x-[129%] group-hover:scale-y-125  duration-300"
        >
          <span className="  group-hover:scale-x-[85%]  group-hover:scale-y-[85%]  duration-300 group-hover:font-bold">
            {label}
          </span>
        </motion.button>
      </div>

      <button
        className={"flex lg:hidden cursor-pointer group"}
        type="button"
        onClick={rest.onClick}
      >
        <motion.div
          className={
            "flex items-center justify-center px-3 py-2.5 bg-revelo tracking-wider rounded-lg relative w-[111px] h-7 duration-300 "
          }
        >
          <span className="duration-300">{label}</span>
        </motion.div>
      </button>
    </>
  );
}
