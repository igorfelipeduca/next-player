export type Video = {
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  duration: number; // duration in seconds
};

export const videos: Video[] = [
  {
    title: "Video 1",
    description: "Video 1 description",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://embed.api.video/vod/vi5YnPxFDwrAFYVvuLmiCwW5",
    duration: 120
  },
  {
    title: "Video 2",
    description: "Video 2 description",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: 120
  },
  {
    title: "Video 3",
    description: "Video 3 description",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: 120
  },
  {
    title: "Video 4",
    description: "Video 4 description",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: 120
  },
];
