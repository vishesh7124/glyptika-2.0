"use client";

// import { motion } from "framer-motion";
// // import React from "react";
// import { AuroraBackground } from "@/components/ui/aurora-background";

import { Compare } from "@/components/ui/compare";
 
const CompareDemo = ()=> {
  return (
    <div className="h-full w-full flex justify-center items-center">
        
        <Compare
          firstImage="https://assets.aceternity.com/code-problem.png"
          secondImage="https://assets.aceternity.com/code-solution.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
          slideMode="drag"
        />
    </div>

  );
}

export default function Landings() {
  return (
    <CompareDemo/>
  );
}
