"use client";

import { Video, videos } from "@/__mocks__/videos";
import { parseVideoTime } from "@/lib/parseVideotime";
import { PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function LastWatched() {
  const [videoObj, setVideoObj] = useState<{
    videoId: string;
    time: string;
  } | null>(null);

  const [videoSpecs, setVideoSpecs] = useState<Video>();

  const pathname = usePathname();

  useEffect(() => {
    const lastWatchedVideo = localStorage.getItem("recentVideo");

    const videoObj = lastWatchedVideo
      ? JSON.parse(lastWatchedVideo)
      : undefined;

    const videoSpecs = videos[videoObj?.videoId];

    setVideoObj(videoObj);
    setVideoSpecs(videoSpecs);
  }, []);

  const watchedTime = parseVideoTime(Number(videoObj?.time) ?? 0);

  const isVideoUrl = pathname.includes("/videos/");

  if (videoObj && !isVideoUrl && Number(videoObj.time) > 0) {
    return (
      <div className="w-full h-full">
        <motion.div
          initial={{ bottom: 0, right: "2rem", opacity: 0 }}
          animate={{ bottom: "2rem", opacity: 1 }}
          className="absolute z-50 bottom-8 right-8 w-[20rem] bg-zinc-900 py-2 px-4 rounded-lg cursor-pointer"
          transition={{ duration: 0.5 }}
        >
          <div className="w-full flex items-center gap-x-2">
            <div
              className={
                "p-px rounded-full bg-zinc-900 border border-zinc-800 size-5 flex justify-center items-center"
              }
            >
              <PlayIcon className="h-full w-full text-blue-500" />
            </div>

            <span>Continue watching</span>
          </div>

          <div className="flex items-center gap-x-4 mt-2">
            <Image
              src={videoSpecs?.thumbnail ?? ""}
              alt={videoSpecs?.title ?? ""}
              width={200}
              height={200}
              className="size-12 rounded-sm object-cover"
            />

            <div className="flex flex-col gap-y-2">
              <h1 className="text-white">{videoSpecs?.title}</h1>
              <span className="text-zinc-500 text-sm">{watchedTime}</span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return <></>;
}
