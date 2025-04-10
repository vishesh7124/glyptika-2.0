"use client";

import ProjectCard from "@/components/ProjectCard";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Projects() {
  return (
    <>
      <div className="relative !mb-6 w-full font-text-primary flex flex-col items-center gap- justify-center">
        <div className="flex flex-col p-8 gap-2 justify-center items-center ">
          <TextAnimate
            className="text-4xl text-center font-text-primary "
            animation="slideUp"
            by="word"
          >
            🎬 Animating Ideas with Glyptika
          </TextAnimate>
          <TextAnimate
            className="text-center font-text-tertiary "
            animation="fadeIn"
            by="line"
            as="p"
            duration={2}
          >
            {
              "At Glyptika, we transform static models into captivating stories. Our animations fuse precision with imagination—bringing your products, concepts, and visions to life with smooth motion and stunning detail. Whether it’s for a product reveal or a digital campaign, we make every frame count."
            }
          </TextAnimate>
        </div>
        <ProjectCard />
      </div>
    </>
  );
}
