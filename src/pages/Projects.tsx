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
            Glimpse Into Our Creative World
          </TextAnimate>
          <TextAnimate
            className="text-center font-text-tertiary "
            animation="fadeIn"
            by="line"
            as="p"
            duration={2}
          >
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque incidunt, voluptatibus accusamus nobis alias fugit cum consecteturullam perspiciatis."
            }
          </TextAnimate>
        </div>
        <ProjectCard />
      </div>
    </>
  );
}
