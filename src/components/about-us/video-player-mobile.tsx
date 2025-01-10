"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import ReactPlayer from "react-player";

export const VideoPlayerMobile = ({ className }: { className?: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className={cn("relative h-[767px]  w-full mx-auto ", className)}>
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full  overflow-hidden z-0 opacity-40"
        )}
      >
        <ReactPlayer
          url="/video.mp4"
          playing={isPlaying}
          muted={isMuted}
          loop
          width={251}
          height={554}
          className={cn("absolute top-20 left-12  scale-[87%] ")}
          config={{
            file: {
              attributes: {
                style: {
                  borderRadius: "40px",
                },
              },
            },
          }}
        />
      </div>

      <Image
        src="/iphone-2png.png"
        width={237}
        height={767}
        alt="iphone"
        className="absolute top-28 left-[54px] z-10 pointer-events-none "
      />

      <div className="absolute top-[315px] left-[133.5px] z-20">
        <button
          type="button"
          onClick={() => {
            setIsMuted(false);
            togglePlay();
          }}
          className="px-4 py-2  text-white rounded-md"
        >
          <Play size={50} />
        </button>
      </div>

      <div className="w-[70px] absolute text-white left-[138px] bottom-[120px] bg-white h-0.5  rotate-90 mx-auto"></div>

      {/* <div className="relative  top-72">
        <Image
          src="/revelo-bg-2.png"
          width={1204}
          height={464}
          alt="iphone"
          className=" 510:hidden object-cover absolute scale-[250%]  "
        />
      </div> */}
    </div>
  );
};
