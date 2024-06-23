"use client";

import { videos } from "@/__mocks__/videos";
import RightArrow from "@/components/ui/icons/right-arrow";
import InterceptModal from "@/components/ui/modal";
import { CheckIcon, Share1Icon } from "@radix-ui/react-icons";
import { useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type InterceptedVideoProps = {
  params: {
    id: string;
    time: string;
  };
};

export default function InterceptedVideo({ params }: InterceptedVideoProps) {
  const video = videos[Number(params.id)];
  const [isVideoShared, setIsVideoShared] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const time = Number(searchParams.get("time"));

  const shareButtonControls = useAnimationControls();

  useEffect(() => {
    router.prefetch(`/videos/${params.id}`); //this will prefetch the video page in order to cut down loading time

    localStorage.setItem(
      "recentVideo",
      JSON.stringify({ videoId: params.id, time })
    ); //this will store the last viewed video id in the local storage
  }, []);

  const addVideoUrlToClipboard = () => {
    navigator.clipboard.writeText(
      `https://igorfelipeduca.com/videos/${params.id}`
    ); // this will copy the video url to the clipboard

    shareButtonControls.start({
      color: "#10b981",
      border: "1px solid #10b981",
    }); // starts the success animation on the share button

    setIsVideoShared(true); // sets the isVideoShared state to true
  };

  return (
    <InterceptModal className={"w-[30rem] flex flex-col gap-y-8"}>
      <div className="w-full flex justify-center gap-x-4">
        <a
          href={`/videos/${params.id}`}
          className="w-[14rem] rounded-full bg-transparent border border-zinc-800 flex items-center justify-between pl-4 py-1 pr-2 cursor-pointer"
        >
          <h3>Watch full video</h3>

          <div className="size-7 bg-zinc-800 rounded-full flex justify-center items-center">
            <RightArrow className="size-4 text-white" />
          </div>
        </a>

        <motion.div
          className="w-[14rem] rounded-full bg-transparent border border-zinc-800 flex items-center justify-between pl-4 py-1 pr-2 cursor-pointer"
          onClick={addVideoUrlToClipboard}
          animate={shareButtonControls}
        >
          <h3>Share video</h3>

          {isVideoShared ? (
            <motion.div
              initial={{ rotate: "180deg" }}
              animate={{ rotate: "0deg" }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="size-7 bg-zinc-800 rounded-full flex justify-center items-center"
            >
              <CheckIcon className="size-4 text-emerald-500" />
            </motion.div>
          ) : (
            <div className="size-7 bg-zinc-800 rounded-full flex justify-center items-center">
              <Share1Icon className="size-4 text-white" />
            </div>
          )}
        </motion.div>
      </div>

      <Image
        className="w-full h-auto rounded-lg pt-8"
        src={video.thumbnail}
        alt={video.title}
        height={100}
        width={200}
      />

      <div className="flex flex-col gap-y-4 pt-8">
        <h1 className="font-semibold text-2xl">{video.title}</h1>

        <p className="text-zinc-400">{video.description}</p>
      </div>
    </InterceptModal>
  );
}
