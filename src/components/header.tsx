import Logo from "@/components/ui/logo";
import Link from "next/link";
import duca from "../../public/duca.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full py-4 px-16 border-b bg-black border-zinc-700 flex items-center justify-between backdrop-blur-lg fixed">
      <Link href={"/"}>
        <Logo size="smaller" />
      </Link>

      <div className="grid grid-cols-3 gap-x-4 items-center">
        <Link href={"/videos"}>Videos</Link>
        <a href="https://twitter.com/ducaswtf" target="_blank">
          Twitter
        </a>
        <a href="https://github.com/igorfelipeduca/next-player" target="_blank">
          GitHub
        </a>
      </div>

      <a href="https://twitter.com/ducaswtf" target="_blank">
        <Image
          src={duca}
          alt="Duca"
          width={100}
          height={100}
          className="rounded-full size-8"
        />
      </a>
    </div>
  );
}
