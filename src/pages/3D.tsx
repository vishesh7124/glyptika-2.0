"use client";

import {
  useState,
  FunctionComponent,
} from "react";

import Scene from "@/components/Scene";
import {motion, AnimatePresence} from "motion/react"
import ModelCarousel from "@/components/ModelCarousel";


// import {Mercedes} from "../components/models/Mercedes"

import { Perfume } from "@/components/models/Sauvage_perfume";
import {Gun} from "@/components/models/Gun"

import {Boeing} from "@/components/models/Boeing"
import { Demon } from "@/components/models/Demon";
import { Jordan } from "@/components/models/Jordan";

interface model {
  id: number;
  url: FunctionComponent;
  title: string;
  thumbnail: string;
}


const models: model[] = [
  {
    id: 1,
    url: Gun,
    title: "GUN",
    thumbnail: "IMAGES/m1.png",
  },
  {
    id: 2,
    url: Boeing,
    title: "Boeing",
    thumbnail:
      "IMAGES/m2.png",
  },
  {
    id: 3,
    url: Jordan,
    title: "Air Jordan",
    thumbnail: "IMAGES/m3.png",
  },
  {
    id: 4,
    url: Demon,
    title: "Demon",
    thumbnail: "IMAGES/m4.png",
  },
  {
    id: 5,
    url: Perfume,
    title: "Dior Sauvage",
    thumbnail: "IMAGES/m5.png",
  },
];

export default function ThreeD() {
  const [selectedModel, setSelectedModel] = useState<model>(models[0]);
  const handleModelSelect = (i: number) => {
    const model = models[i];
    setSelectedModel(model);
  };

  return (
    <>
    <div className="relative h-[89vh] w-[95vw] max-[960px]:h-[60vh] rounded-md  !m-auto max-sm:h-[30vh] ">
      <Scene selectedModel={selectedModel} />

      <AnimatePresence mode="wait" >
        <motion.div 
          key={selectedModel.title}
          initial={{x:-1000 }}
          animate={{x:0, transition: {type:"spring", duration: 1, bounce:0.1 }}}
          exit={{ scale: 0, transition: {type:"spring", duration: 0.5, bounce:0.1 } }}
          viewport={{once:false}}
          className="absolute top-0 left-0 z-0 font-text-primary lg:text-[18rem] text-[5rem] md:text-[11rem] text-center w-full h-full flex justify-center items-center"
        >
          {/* <h1>{selectedModel.title.toUpperCase()}</h1> */}
        </motion.div>
      </AnimatePresence>    
      
      <ModelCarousel className="max-sm:hidden" models={models} handleModelSelect={handleModelSelect} />  


    </div>
      <div className="relative m-6 w-full font-text-primary flex flex-col items-center gap-10 justify-center">
        {/* <div className="flex flex-col p-8 gap-2 justify-center items-center ">
          <h1 className="text-4xl text-center ">LOREM IPSUM</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque
            incidunt, voluptatibus accusamus nobis alias fugit cum consectetur
            ullam perspiciatis.
          </p>
        </div> */}
        <ModelCarousel className="sm:hidden static w-1/2 !mt-2 rounded-md " models={models} handleModelSelect={handleModelSelect} />  
        <h1 className="text-2xl text-center sm:hidden ">Select To View Model</h1>


      </div>
      {/* <div className="relative font-text-primary !my-6 flex flex-col items-center gap-6 justify-center">
        <h1 className="text-4xl">LOREM IPSUM</h1>
        <Button className="bg-[#5EC2B5] p-4 rounded-3xl" >Get in Touch</Button>
      </div> */}
    </>
  );
}
