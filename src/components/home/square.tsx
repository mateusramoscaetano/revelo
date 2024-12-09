import { cn } from "@/lib/utils";

export function GridSquare({
  name,
  img,
  className,
}: {
  name: string;
  img: string;
  className?: string;
}) {
  return (
    <>
      <div
        className={cn(
          "flex items-center justify-center w-[389px] h-[388px] border-[0.5px] border-white",
          className
        )}
      >
        {name}
      </div>
    </>
  );
}
