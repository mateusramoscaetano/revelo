import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GridSquare({
  name,
  img,
  className,
}: {
  name: string;
  img: ReactNode;
  className?: string;
}) {
  return (
    <>
      <div
        className={cn(
          "flex items-center justify-center w-[389px] h-[388px] ",
          className
        )}
      >
        {img}
      </div>
    </>
  );
}
