import { videos } from "@/__mocks__/videos";
import VideoCard from "./components/video-card";

export default async function Videos() {
  return (
    <div className="p-16">
      <h1 className="text-4xl bg-gradient-to-br from-zinc-400 to-white text-transparent bg-clip-text font-semibold">
        Watch the latest videos
      </h1>

      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} index={index} />
        ))}
      </div>
    </div>
  );
}
