import { AboutUsGrid } from "@/components/about-us-grid";
import AboutUsSection from "@/components/about-us-section";
import { AboutUsCard } from "@/components/cards/about-us-card";

import CaseCard from "@/components/case";

import { Grid, GridMd, GridXl } from "@/components/grid";
import { GridMobile } from "@/components/grid-mobile";
import Image from "next/image";

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
        className="flex flex-col justify-start items-center mt-[93px] relative"
      >
        <AboutUsGrid />
      </div>
    </>
  );
}
