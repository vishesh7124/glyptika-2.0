import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Button } from "./ui/button";

import vid1 from '../assets/videos/AlphaTreadShoes.mp4'
import vid2 from '../assets/videos/Samsung.mp4'
import Loader from "./Loader";
import { useState } from "react";
import LazyMedia from "./LazyMedia";

export default function ProjectCard() {
  console.log(items)

  return (
    <BentoGrid className="w-screen  md:auto-rows-[22rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. "}
          description={<Button className="bg-[#5EC2B5] p-4 rounded-3xl  " >Know More</Button>}
          header={<LazyMedia mediaType="video" src="" />}
          className={`md:${gridPattern[i%gridPattern.length]}`}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const gridPattern = ["col-span-2", "col-span-1",  "col-span-1", "col-span-2","col-span-3"];

const items = [
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    description: <Button className="bg-[#5EC2B5] p-4 rounded-3xl  " >Know More</Button>    ,
    header:       <video
    src={vid1}
    className="w-full h-full rounded-md object-fill  "
    autoPlay
    loop
    muted
  />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    description: <Button className="bg-[#5EC2B5] p-4 rounded-3xl  " >Know More</Button>    ,
    header:       <video
    src={vid1}
    className="w-full h-full rounded-md object-fill  "
    autoPlay
    loop
    muted
  />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    description: <Button className="bg-[#5EC2B5] p-4 rounded-3xl  " >Know More</Button>    ,
    header:       <video
    src={vid1}
    className="w-full h-full rounded-md object-fill  "
    autoPlay
    loop
    muted
  />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    description: <Button className="bg-[#5EC2B5] p-4 rounded-3xl  " >Know More</Button>    ,
    header:       <video
    src={vid1}
    className="w-full h-full rounded-md object-fill  "
    autoPlay
    loop
    muted
  />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    description: <Button className="bg-[#5EC2B5] p-4 rounded-3xl  " >Know More</Button>    ,
    header:       <video
    src={vid1}
    className="w-full h-full rounded-md object-fill  "
    autoPlay
    loop
    muted
  />,
    className: "md:col-span-3 ",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },


];
