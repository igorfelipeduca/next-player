import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/hover-border";
import RightArrow from "@/components/ui/icons/right-arrow";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";

export default function Home() {
  const words = ["Content", "Videos", "Livestreams", "Movies"];

  return (
    <div className="h-[40rem] w-full flex flex-col gap-y-16 items-center justify-center dark">
      <div className="w-full flex justify-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="a"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-between w-[17rem]"
          href="https://github.com/igorfelipeduca/next-player"
        >
          <h3>See the project on GitHub</h3>

          <div className="size-7 bg-zinc-800 rounded-full flex justify-center items-center">
            <RightArrow className="size-4 text-white" />
          </div>
        </HoverBorderGradient>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-7xl font-semibold text-transparent bg-gradient-to-br bg-clip-text from-zinc-600 to-white">
          A new way to
        </h1>

        <div className="flex gap-x-2 items-center">
          <h1 className="text-7xl text-zinc-400 font-semibold">Watch</h1>
          <FlipWords words={words} />
        </div>
      </div>

      <div className="w-full flex items-center justify-center gap-x-4">
        <Button
          className="bg-white rounded-lg text-md text-black py-2 px-4"
          variant={"default"}
        >
          <div className="w-full flex items-center gap-x-2">
            <span>Start now for free</span>

            <ArrowRightIcon className="size-5" />
          </div>
        </Button>

        <Button
          className="rounded-lg text-md text-white py-2 px-4"
          variant={"ghost"}
        >
          <div className="w-full flex items-center gap-x-2">
            <span>Twitter build on public</span>

            <ArrowRightIcon className="size-5" />
          </div>
        </Button>
      </div>
    </div>
  );
}
