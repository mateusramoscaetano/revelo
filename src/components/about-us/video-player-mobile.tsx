"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { X } from "../icons/x";

export const VideoPlayer2 = ({ className }: { className?: string }) => {
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
    </div>
  );
};
