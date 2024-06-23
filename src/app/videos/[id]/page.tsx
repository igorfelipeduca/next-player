import { videos } from "@/__mocks__/videos";
import { Suspense } from "react";

type VideosPageProps = {
  params: {
    id: string;
  };
};

const SkeletonFallback = () => {
  return (
    <div className="w-full h-[50rem] rounded-lg bg-zinc-800 animate-pulse" />
  );
};

export default function VideosPage({ params }: VideosPageProps) {
  const video = videos[Number(params.id)];

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="p-16">
      <h1 className="text-4xl bg-gradient-to-br from-zinc-400 to-white text-transparent bg-clip-text font-semibold">
        {video.title}
      </h1>

      <div className="mt-16">
        <Suspense fallback={<SkeletonFallback />}>
          <video
            src={video.url} // Assuming videoUrl is the property where the URL is stored
            width={"100%"}
            height={"100%"}
            controls
            preload="none"
          />
        </Suspense>
      </div>
    </div>
  );
}
