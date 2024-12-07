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
  const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };
  return (
    <>
      <div
        className={cn(
          "flex items-center justify-center w-[389px] h-[388px]",
          className
        )}
        style={{ backgroundColor: getRandomColor() }}
      >
        {name}
      </div>
    </>
  );
}
