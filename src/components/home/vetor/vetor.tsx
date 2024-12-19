"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
interface IVetorProps {
  className?: string;
}

export function Vetor({ className }: IVetorProps) {
  return (
    <>
      <img
        src="/Enxergar.gif"
        alt=""
        className={cn("w-auto h-auto", className)}
      />
    </>
  );
}
