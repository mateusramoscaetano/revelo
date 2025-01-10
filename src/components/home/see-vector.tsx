"use client";
import { cn } from "@/lib/utils";

interface ISeeVectorProps {
  className?: string;
}

export function SeeVector({ className }: ISeeVectorProps) {
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
