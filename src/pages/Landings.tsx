"use client";

// import { motion } from "framer-motion";
// // import React from "react";
// import { AuroraBackground } from "@/components/ui/aurora-background";

// import { Compare } from "@/components/ui/compare";
import LandingVideo from "@/components/LandingVid";
import { MarqueeDemoVertical } from "@/components/AnimatedGallery";
import { Button } from "@/components/ui/button";

// const CompareDemo = () => {
//   return (
//     <div className="h-full w-full flex flex-col justify-center items-center">
//       <Compare
//         firstImage="https://assets.aceternity.com/code-problem.png"
//         secondImage="https://assets.aceternity.com/code-solution.png"
//         firstImageClassName="object-cover object-left-top"
//         secondImageClassname="object-cover object-left-top"
//         className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
//         slideMode="drag"
//       />
//     </div>
//   );
// };

export default function Landings() {
  return (
    // <CompareDemo/>
    <>
      <LandingVideo />
      <div className="relative m-6 w-full font-text-primary flex flex-col items-center gap-10 justify-center">
        <div className="flex flex-col p-8 gap-2 justify-center items-center ">
          <h1 className="text-4xl text-center ">Glimpse Into Our Creative World</h1>
          <p className="text-center font-text-tertiary "> 
          Discover our portfolio of stunning 3D renders, architectural designs, and immersive environments crafted with precision and passion
          </p>
        </div>
        <MarqueeDemoVertical />
      </div>
      <div className="relative font-text-primary !my-6 flex flex-col items-center gap-6 justify-center">
        <h1 className="text-4xl">Bring Ideas To Life</h1>
        <Button className="bg-[#5EC2B5] p-4 rounded-3xl" >Get in Touch</Button>
      </div>
    </>
  );
}
