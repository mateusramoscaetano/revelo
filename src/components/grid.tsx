import { cn } from "@/lib/utils";
import { FollowRevelo } from "./follow-revelo";

export function Grid() {
  const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };

  return (
    <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full relative">
      <FollowRevelo />
      {Array.from({ length: 16 }, (_, index) => (
        <div
          key={index}
          className={cn("flex items-center justify-center w-[389px] h-[388px]")}
          style={{ backgroundColor: getRandomColor() }}
        >
          Item {index + 1}
        </div>
      ))}
    </div>
  );
}
