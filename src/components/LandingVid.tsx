import { useState, useEffect, useRef } from "react";
// import vid1 from '../assets/videos/AlphaTreadShoes.mp4'
// import vid2 from '../assets/videos/Samsung.mp4'
import { NavLink } from "react-router";
import { BoxReveal } from "./magicui/box-reveal";
// import MuxVideo from '@mux/mux-video-react';


interface Video {
  id: number;
  url: string;
  title: string;
  description: string
}

const videos: Video[] = [
  {
    id: 1,
    url: "https://ik.imagekit.io/8ubfxvx6t/Animations/Alpha/AlphaTreadShoes.mp4",
    title: "Video 1",
    description: "Creative Excellence"
  },
  {
    id: 2,
    url: "https://ik.imagekit.io/8ubfxvx6t/Animations/Samsung/Samsung.mp4",
    title: "Video 1",
    description: "Scalable 3D Solutions"
  },
  {
    id: 3,
    url: "https://ik.imagekit.io/8ubfxvx6t/Animations/Experiential/bgmi/bgmi.mp4",
    title: "Video 1",
    description: " Fast, Flexible, Future-Ready"
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
      {/* <MuxVideo
        ref={videoRef}
        src={videos[currentVideo].url}
        // metadata={{
        //   video_id: 'video-id-123456',
        //   video_title: 'Super Interesting Video',
        //   viewer_user_id: 'user-id-bc-789',
        // }}
        className="  w-full h-full rounded-md object-fill  "
        onEnded={handleVideoEnd}
        autoplay
        muted
        // controls
      /> */}
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
      <div className="absolute left-6 bottom-2" >
          <BoxReveal key={videos[currentVideo].url}  boxColor={"#5EC2B5"} duration={1}>
            <p className=" font-text-primary text-6xl max-sm:text-3xl max-sm:p-2 bg-[#000000b3] rounded-md p-5 ">
              {videos[currentVideo].description}
            </p>
          </BoxReveal>

      </div>

      <NavLink
        to="/projects"

        className="absolute bottom-2 right-4 font-text-primary text-white text-xl hover:text-[#5EC2B5] transition-colors"
      >
        PROJECTS {'>>'}
      </NavLink>
    </div>
  );
};

export default LandingVideo;
