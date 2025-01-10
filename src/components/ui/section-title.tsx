interface ISectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: ISectionTitleProps) {
  return (
    <>
      <div className="text-xl font-semibold flex items-center mb-[32px]">
        {title}
        <span className="ml-2 h-0.5 w-[62px] bg-red-500"></span>
      </div>
    </>
  );
}
