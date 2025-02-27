import { useState, useEffect, useRef } from "react";
import vid1 from '../assets/videos/AlphaTreadShoes.mp4'
import vid2 from '../assets/videos/Samsung.mp4'

interface Video {
  id: number;
  url: string;
  title: string;
}

const videos: Video[] = [
  {
    id: 1,
    url: vid1,
    title: "Video 1",
  },
  {
    id: 2,
    url: vid2,
    title: "Video 1",
  },
  {
    id: 3,
    url: vid1,
    title: "Video 1",
  },
  {
    id: 4,
    url:vid2,
    title: "Video 1",
  },
];

const LandingVideo = () => {
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentVideo]);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentVideo(index);
  };

  return (
    <div className="relative h-[89vh] w-[95vw] max-[960px]:h-[60vh] rounded-md bg-black !m-auto max-sm:h-[30vh] ">
      <video
        ref={videoRef}
        src={videos[currentVideo].url}
        className="  w-full h-full rounded-md object-fill  "
        onEnded={handleVideoEnd}
        autoPlay
        muted
      />

      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-lg p-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`block w-3 h-3 rounded-full my-2 transition-colors ${
              currentVideo === index
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
      <a
        href="#"
        className="absolute bottom-2 right-4 font-text-primary text-white text-sm hover:text-[#5EC2B5] transition-colors"
      >
        PROJECTS {'>>'}
      </a>
    </div>
  );
};

export default LandingVideo;
