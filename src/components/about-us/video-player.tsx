"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { X } from "../icons/x";

export const VideoPlayer = ({ className }: { className?: string }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const [isOverlayActive, setIsOverlayActive] = useState(false); // Controle do overlay
  const toggleOverlay = () => {
    setIsMuted(true);
    setIsOverlayActive((prev) => !prev);
  };

  const overlay = isOverlayActive ? "0" : "40px";

  return (
    <div className={cn("relative h-[767px]  w-[562px] mx-auto ", className)}>
      {isOverlayActive && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-10"
          onClick={toggleOverlay}
        ></div>
      )}
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full  overflow-hidden z-0 opacity-40",
          {
            "z-20 opacity-100 scale-[130%] ": isOverlayActive === true,
          }
        )}
      >
        <ReactPlayer
          url="/video.mp4"
          playing={isPlaying}
          muted={isMuted}
          loop
          width={251}
          height={554}
          className={cn("absolute top-24 left-[150px] scale-[96%] ")}
          config={{
            file: {
              attributes: {
                style: {
                  borderRadius: overlay,
                },
              },
            },
          }}
        />
      </div>

      <Image
        src="/iphone.png"
        width={562}
        height={767}
        alt="iphone"
        className="absolute top-0 left-0 z-10 pointer-events-none"
      />

      <div className="absolute top-[350px] left-[236px] z-20">
        <button
          type="button"
          onClick={() => {
            toggleOverlay();

            setIsMuted(false);
          }}
          className="px-4 py-2  text-white rounded-md"
        >
          {!isOverlayActive && <Play size={50} />}
        </button>
      </div>
      <div className="absolute top-[20px] right-24 z-20">
        <button
          type="button"
          onClick={() => {
            toggleOverlay();

            setIsMuted(false);
          }}
          className="px-4 py-2  text-white rounded-md"
        >
          {isOverlayActive && <X />}
        </button>
      </div>
    </div>
  );
};
