"use client";

import { Video } from "@/__mocks__/videos";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type VideoCardProps = {
  video: Video;
  index: number;
};

export default function VideoCard({ video, index }: VideoCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const maxPreviewWidth = 18;

  const getPrevWidthByPercentage = (percentage: number) => {
    return Math.round((maxPreviewWidth * percentage) / 100);
  };

  const getPrevWithBySeconds = () => {
    const percentage = (seconds / video.duration) * 100;
    return getPrevWidthByPercentage(percentage);
  };

  useEffect(() => {
    if (isHovering) {
      while (seconds < video.duration) {
        const interval = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000); // this will update the preview watching time counter every second

        return () => clearInterval(interval); // this will clear the interval when the component unmounts
      }
    }
  }, [isHovering]); // just to make sure the effect is only run when the isHovering state changes

  return (
    <Link
      className="flex flex-col gap-y-4 h-[10rem] w-[18rem] aspect-video cursor-pointer group"
      href={`/videos/${index}?time=${seconds}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute w-[18rem] mt-[11rem] h-1 bg-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-linear" />

      <div className="w-full">
        <div
          className="absolute mt-[11rem] h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-linear"
          style={{ width: `${getPrevWithBySeconds()}rem` }} // calculate the width of the preview based on the seconds watched
        />
      </div>

      <Image
        alt={video.title}
        src={video.thumbnail}
        height={100}
        width={200}
        className="h-full w-full"
      />

      <div className="flex flex-col gap-y-2">
        <h3 className="text-2xl font-semibold">{video.title}</h3>
        <p className="text-zinc-400">{video.description}</p>
      </div>
    </Link>
  );
}
