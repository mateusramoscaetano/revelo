import { cn } from "@/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";

interface IHowWeDoCardProps {
  width: number;
  height: number;
  asset: string;
  title: string;
  description: ReactNode;
  className?: string;
  left: boolean;
}

export function HowWeDoCard({
  height,
  width,
  asset,
  description,
  title,
  className,
  left,
}: IHowWeDoCardProps) {
  return (
    <>
      <div
        className={cn(
          "flex items-center justify-start gap-[25px] max-w-[406px]",
          className
        )}
      >
        {left && <Image src={asset} width={width} height={height} alt="icon" />}
        <div className="flex flex-col space-y-4">
          <div
            className={cn(
              "text-xl font-medium",
              { "text-left": left === true },
              { "text-right": left === false }
            )}
          >
            {title}
          </div>
          <div
            className={cn(
              "text-sm",
              { "text-left": left === true },
              { "text-right": left === false }
            )}
          >
            {description}
          </div>
        </div>
        {!left && (
          <Image src={asset} width={width} height={height} alt="icon" />
        )}
      </div>
    </>
  );
}
