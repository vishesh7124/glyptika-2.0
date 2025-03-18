
import { MarqueeDemoVertical } from "@/components/AnimatedGallery";
import videoLogo from '../assets/images/video_logo.png'
import { useState } from "react";
import { NavLink } from "react-router";
import {motion} from "motion/react"
import { SquareCheckBig } from "lucide-react";
import { Button } from "@/components/ui/button";

import LazyMedia from "@/components/LazyMedia";

type logo ={
    name: string;
    url: string;
}

type media ={
    mediaType: "image" | "video";
    url: string;
    name: string;
}

type service = {
    id: number;
    title: string;
    description: string[];
    media:media;
    logos: logo[];
    image?: string;
}


const serviceData: service[] = [
    {
        id: 1,
        title: "2D/3D Animations",
        description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque incidunt", "voluptatibus accusamus nobis alias fugit cum consectetur ullam perspiciatis."],
        media: {
            mediaType: "video",
            url: "https://res.cloudinary.com/duifdyecp/video/upload/AlphaTreadShoes_kwksls.mp4",
            name: "Alpha Tread"
        },
        logos:[
            {
                name: "Blender",
                url: "https://res.cloudinary.com/duifdyecp/image/upload/blender_mxqeeq.png"
            },
            {
                name: "Blender",
                url: "https://res.cloudinary.com/duifdyecp/image/upload/blender_mxqeeq.png"
            },
            {
                name: "Blender",
                url: "https://res.cloudinary.com/duifdyecp/image/upload/blender_mxqeeq.png"
            },
            {
                name: "Blender",
                url: "https://res.cloudinary.com/duifdyecp/image/upload/blender_mxqeeq.png"
            },
            {
                name: "Premiere Pro",
                url: "https://res.cloudinary.com/duifdyecp/image/upload/premiere_nizzta.png"
            }
        ],
        image:videoLogo
    },
    {
        id: 2,
        title: "2D/3D Design",
        description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque incidunt", "voluptatibus accusamus nobis alias fugit cum consectetur ullam perspiciatis."],
        media: {
            mediaType: "image",
            url: "https://res.cloudinary.com/duifdyecp/image/upload/a_jvvqci.png",
            name: "Alpha Tread"
        },
        logos:[
            {
                name: "blender",
                url: "https://res.cloudinary.com/duifdyecp/image/upload/blender_mxqeeq.png"
            }
        ],
        image:videoLogo

    },
    {
        id: 2,
        title: "2D/3D Design",
        description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque incidunt", "voluptatibus accusamus nobis alias fugit cum consectetur ullam perspiciatis."],
        media: {
            mediaType: "image",
            url: "https://res.cloudinary.com/duifdyecp/video/upload/AlphaTreadShoes_kwksls.mp4",
            name: "Alpha Tread"
        },
        logos:[
            {
                name: "blender",
                url: "https://res.cloudinary.com/duifdyecp/image/upload/blender_mxqeeq.png"
            }
        ],
        image:videoLogo

    },
    {
        id: 2,
        title: "2D/3D Design",
        description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque incidunt", "voluptatibus accusamus nobis alias fugit cum consectetur ullam perspiciatis."],
        media: {
            mediaType: "image",
            url: "https://res.cloudinary.com/duifdyecp/video/upload/AlphaTreadShoes_kwksls.mp4",
            name: "Alpha Tread"
        },
        logos:[
            {
                name: "blender",
                url: "https://res.cloudinary.com/duifdyecp/image/upload/blender_mxqeeq.png"
            }
        ],
        image:videoLogo

        
    },

]

export default function Services() {
    const [currentService, setCurrentService] = useState<number>(0);
    const positions = [70,50,30,60]
    const isMobile = window.matchMedia("(max-width: 520px)").matches




  return (
    <>
      <div className="relative h-[89vh] w-full max-[960px]:h-[85vh] rounded-md   max-sm:h-[95vh] max-sm:flex-col flex gap-8 justify-between items-center ">
        <div className="flex flex-col p-8 lg:pl-24 gap-8 justify-center items-start max-sm:p-4 max-sm:!m-4  bg-[#000000b3] ">
            <div className="lg:w-1/2  flex flex-col justify-center items-start gap-4 w-full ">
                <LazyMedia mediaType={serviceData[currentService].media.mediaType} src={serviceData[currentService].media.url} controls={true}  />
                <h3 className="text-xl font-text-primary" >{serviceData[currentService].media.name}</h3>
            </div>
            <div className="flex flex-col gap-2">
                {serviceData[currentService].description.map((desc, index) => (
                    <div className="flex gap-1">

                        <SquareCheckBig className="h-4 w-4" />
                        <p key={index} className="font-text-primary text-sm">{desc}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-between w-full items-end">
                <div className="flex flex-wrap gap-4">
                    {serviceData[currentService].logos.map((logo, index) => (
                        <img key={index} src={logo.url} alt="" className="h-16 w-16 rounded-2xl object-contain " />
                    ))}
                </div>
                <Button className="bg-[#5EC2B5] p-4 rounded-3xl font-text-primary  " ><NavLink to="/contact">Talk To Us</NavLink></Button>

            </div>

        </div>
        <div className="banners flex flex-col max-sm:flex-row justify-center items-center gap-6 max-sm:gap-2">
            {serviceData.map((service, index) => (
                <motion.div initial={{x:!isMobile? 400:0}} whileInView={{x:currentService===index?0:!isMobile?positions[index]:0, transition:{delay:0.5,duration:1.5,type:"spring",bounce:0.5}}} viewport={{once:true}}  whileHover={{x:0}} key={index} onClick={()=>setCurrentService(index)}
                 className={` banner hover:cursor-pointer hover:bg-[#000000b3]  h-24 lg:w-[25rem] max-[960px]:w-[18rem] rounded-2xl rounded-r-none flex px-4 justify-start items-center gap-6 max-sm:flex-col max-sm:h-48 max-sm:w-24 max-sm:p-8     max-sm:rounded-r-2xl
                    ${currentService === index ? "bg-[#000000b3]" : "bg-[#5EC2B5]"}`}
                 >
                    <img src={service.image} className="aspect-square object-contain w-8 h-8" alt="" />
                    <h1  className="text-xl font-text-primary max-sm:text-center max-sm:text-[1rem]  ">{service.title}</h1>
                </motion.div>
            ))}
        </div>
        {/* <MarqueeDemoVertical /> */}
      </div>
      {/* <div className="relative font-text-primary !my-6 flex flex-col items-center gap-6 justify-center">
        <h1 className="text-4xl">LOREM IPSUM</h1>
        <Button className="bg-[#5EC2B5] p-4 rounded-3xl" >Get in Touch</Button>
      </div> */}
    </>
  );
}
