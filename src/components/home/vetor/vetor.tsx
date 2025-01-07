"use client";
import { cn } from "@/lib/utils";

interface IVetorProps {
  className?: string;
}

export function Vetor({ className }: IVetorProps) {
  return (
    <>
      <img
        src="/EnxergarVid_1.gif"
        alt=""
        className={cn("w-auto h-auto", className)}
      />
    </>
  );
}
