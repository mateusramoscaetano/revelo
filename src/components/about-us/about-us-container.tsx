"use client";

import { MeetOurTeam } from "./meet-our-team";
import { HowWeDoWeb } from "./how-we-do-web";
import { HowWeDoMobile } from "./how-we-do-mobile";
import { HowWeDoTopSection } from "./how-we-do-top-section";
import Image from "next/image";

export function AboutUSContainer() {
  return (
    <>
      <div
        id="us"
        className="flex flex-col justify-start items-center relative w-full"
      >
        <MeetOurTeam />
        <HowWeDoTopSection />
        <HowWeDoWeb />
        <HowWeDoMobile />
        <Image
          src={"/sonsa.png"}
          width={901}
          height={163}
          alt=""
          className="absolute bottom-[875px] right-0 hidden 2xl:flex"
        />
      </div>
    </>
  );
}
