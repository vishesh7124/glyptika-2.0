import React from "react";
import { Button } from "../ui/button";

type ProjectItem = {
  id:number;
  name:string;
  title: string;
  description: React.ReactNode;
  mediaType: "image" | "video";
  src: string;
};

export const projectItems: ProjectItem[] = [
  {
    id:1,
    name:"Samsung",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    description: <Button className="bg-[#5EC2B5] p-4 rounded-3xl  " >Know More</Button>    ,
    mediaType: "video",
    src:"https://res.cloudinary.com/duifdyecp/video/upload/v1741978814/dpbbvhgjfhu3umuxvizc.mp4",
  },
  {
    id:1,
    name:"Samsung",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    description: <Button className="bg-[#5EC2B5] p-4 rounded-3xl  " >Know More</Button>    ,
    mediaType: "video",
    src:"https://res.cloudinary.com/duifdyecp/video/upload/v1741978814/dpbbvhgjfhu3umuxvizc.mp4",
  },
  {
    id:1,
    name:"Samsung",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    description: <Button className="bg-[#5EC2B5] p-4 rounded-3xl  " >Know More</Button>    ,
    mediaType: "video",
    src:"https://res.cloudinary.com/duifdyecp/video/upload/v1741978814/dpbbvhgjfhu3umuxvizc.mp4",
  },
  {
    id:1,
    name:"Samsung",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    description: <Button className="bg-[#5EC2B5] p-4 rounded-3xl  " >Know More</Button>    ,
    mediaType: "video",
    src:"https://res.cloudinary.com/duifdyecp/video/upload/v1741978814/dpbbvhgjfhu3umuxvizc.mp4",
  },
];

