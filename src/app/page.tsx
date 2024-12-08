import { AboutUsGrid } from "@/components/about-us/about-us-grid";
import AboutUsSection from "@/components/about-us-section";

import CaseCard from "@/components/case";

import { Grid, GridMd, GridXl } from "@/components/grid";
import { GridMobile } from "@/components/grid-mobile";
import Image from "next/image";
import { HowWeDo } from "@/components/about-us/how-we-do";
import Carousel from "@/components/carousel/carousel-test";
import { HowWeDoMobile } from "@/components/about-us/how-we-do-mobile";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col justify-start items-center mt-[93px] relative"
      >
        <Grid />
        <GridMd />
        <GridXl />

        <GridMobile>
          <CaseCard
            caseNumber="01"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </GridMobile>
        <GridMobile>
          <CaseCard
            caseNumber="02"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </GridMobile>
        <GridMobile>
          <CaseCard
            caseNumber="03"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </GridMobile>
        <GridMobile>
          <CaseCard
            caseNumber="04"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </GridMobile>
        <Image
          src={"/Banner.jpg"}
          width={401}
          height={176}
          alt="banner"
          className="lg:hidden"
        />

        <div className="flex items-center justify-center">
          {" "}
          <AboutUsSection />
        </div>
      </div>

      <div
        id="us"
        className="flex flex-col justify-start items-center  relative"
      >
        <AboutUsGrid />
        <div className="mb-24 ">
          <div className="pb-2 px-10 flex flex-col items-start  justify-start mb-[30px]">
            <div className=" text-xl font-semibold flex items-center">
              Como fazemos
              <span className="ml-2 h-0.5 w-[62px] bg-red-500"></span>
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
      <Carousel />
    </>
  );
}
