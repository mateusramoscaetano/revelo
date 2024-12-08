"use client";

import { MeetOurTeam } from "./meet-our-team";
import { HowWeDo } from "./how-we-do";
import { HowWeDoMobile } from "./how-we-do-mobile";
import { HowWeDoTitle } from "./how-we-do-title";

export function AboutUSContainer() {
  return (
    <>
      <div
        id="us"
        className="flex flex-col justify-start items-center relative"
      >
        <MeetOurTeam />
        <HowWeDoTitle />
        <HowWeDo />
        <HowWeDoMobile />
      </div>
    </>
  );
}
