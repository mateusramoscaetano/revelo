"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { GroupIntro } from "./group-intro";

interface IGroupContainerProps {}

export function GroupContainer({}: IGroupContainerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <>
      <div className="w-full min-h-full flex flex-col items-center justify-center pt-10 gap-10 pb-[100px] sm:pb-[157px]">
        <ReactPlayer
          url={"/video-web.mp4"}
          width={"auto"}
          height={"auto"}
          playing={true}
          muted={true}
          loop
        />
        <GroupIntro />
      </div>
    </>
  );
}
