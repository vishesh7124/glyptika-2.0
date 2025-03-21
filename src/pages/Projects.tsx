"use client";

// import LandingVideo from "@/components/LandingVid";
// import { MarqueeDemoVertical } from "@/components/AnimatedGallery";
// import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";



export default function Projects() {
  return (
    <>
      <div className="relative !mb-6 w-full font-text-primary flex flex-col items-center gap- justify-center">
        <div className="flex flex-col p-8 gap-2 justify-center items-center ">
          <h1 className="text-4xl text-center font-text-primary ">LOREM IPSUM</h1>
          <p className="text-center font-text-tertiary "> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque
            incidunt, voluptatibus accusamus nobis alias fugit cum consectetur
            ullam perspiciatis.
          </p>
        </div>
        <ProjectCard/>
      </div>
    </>
  );
}
