"use client";
import { useEffect, useState } from "react";
import { GroupIntro } from "./group-intro";

export function GroupContainer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <>
      <div
        id="group"
        className="w-full min-h-full flex flex-col items-center justify-center pt-10 gap-10 pb-[100px] sm:pb-[157px]"
      >
        <img src="/atm.gif" width={"auto"} height={"auto"} />
      </div>
      <GroupIntro />
    </>
  );
}
