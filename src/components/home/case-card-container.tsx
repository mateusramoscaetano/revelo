import type { ReactNode } from "react";

interface IGridMobleProps {
  children: ReactNode;
}

export function CaseCardContainer({ children }: IGridMobleProps) {
  return (
    <>
      <div className="flex lg:hidden flex-col h-full ">
        <div className="bg-white w-full max-w-[400px] h-[400px]"></div>
        {children}
      </div>
    </>
  );
}
