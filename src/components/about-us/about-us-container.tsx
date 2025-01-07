"use client";

import { MeetOurTeam } from "./meet-our-team";
import { HowWeDo } from "./how-we-do";
import { HowWeDoMobile } from "./how-we-do-mobile";
import { HowWeDoTitle } from "./how-we-do-title";
import Image from "next/image";

export function AboutUSContainer() {
  return (
    <>
      <div
        id="us"
        className="flex flex-col justify-start items-center relative w-full"
      >
        <MeetOurTeam />
        <HowWeDoTitle />
        <HowWeDo />
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
