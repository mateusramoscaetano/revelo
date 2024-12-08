"use client";

import { AboutUsGrid } from "./about-us-grid";
import { HowWeDo } from "./how-we-do";
import { HowWeDoMobile } from "./how-we-do-mobile";

interface IAboutUSContainerProps {}

export function AboutUSContainer({}: IAboutUSContainerProps) {
  return (
    <>
      <div
        id="us"
        className="flex flex-col justify-start items-center  relative"
      >
        <AboutUsGrid />
        <div className="mb-24 ">
          <div className="pb-2 px-10 flex flex-col items-start  justify-start mb-[30px]">
            <div className=" text-xl font-semibold flex items-center">
              Como fazemos
              <div className="ml-2 h-0.5 w-[62px] bg-red-500"></div>
            </div>
          </div>
          <div className="text-xl lg:text-2xl max-w-[405px] px-10">
            Nosso método foi desenvolvido minuciosamente para entregar o que há
            de melhor em fotografia, tratamento e atendimento.
          </div>
        </div>
        <HowWeDo />
        <HowWeDoMobile />
      </div>
    </>
  );
}
