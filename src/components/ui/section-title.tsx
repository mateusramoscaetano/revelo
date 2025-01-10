import cn from "@/utils/cn";

interface ISectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className }: ISectionTitleProps) {
  return (
    <>
      <div
        className={cn(
          "text-xl font-semibold flex items-center mb-[32px]",
          className
        )}
      >
        {title}
        <span className="ml-2 h-0.5 w-[62px] bg-red-500"></span>
      </div>
    </>
  );
}
