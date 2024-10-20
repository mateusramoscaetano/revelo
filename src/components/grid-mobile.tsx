import type { ReactNode } from "react";
import CaseCard from "./case";

interface IGridMobleProps {
  children: ReactNode;
}

export function GridMobile({ children }: IGridMobleProps) {
  return (
    <>
      <div className="flex lg:hidden flex-col h-full">
        <div className="bg-white w-full max-w-[400px] h-[400px]"></div>
        {children}
      </div>
    </>
  );
}
