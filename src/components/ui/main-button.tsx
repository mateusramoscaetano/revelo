"use client";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
interface IMainButtonProps extends HTMLMotionProps<"button"> {
  label: ReactNode;
}

export function MainButton({ label, ...rest }: IMainButtonProps) {
  return (
    <>
      <div className="flex  cursor-pointer group">
        <motion.button
          {...rest}
          className="flex items-center justify-center px-3 py-2.5 bg-revelo tracking-wider rounded-lg relative w-[105px] h-7 group-hover:scale-x-[129%] group-hover:scale-y-125  duration-300"
        >
          <span className="  group-hover:scale-x-[85%]  group-hover:scale-y-[85%]  duration-300 group-hover:font-bold">
            {label}
          </span>
        </motion.button>
      </div>
    </>
  );
}
