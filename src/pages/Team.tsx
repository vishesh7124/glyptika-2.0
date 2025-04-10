"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import LazyMedia from "@/components/LazyMedia";



import ProfileCard from "@/components/ProfileCard";

const teamData = [
    {
        name: "Jai Raj Singh Ahluwalia",
        position: "CEO",
        imageUrl:"https://ik.imagekit.io/8ubfxvx6t/IMAGES/jai_raj.jpg?updatedAt=1744249913733",
        linkedIn: "https://www.linkedin.com/in/jai-raj-singh-ahluwalia/"
    }
]

export default function Team() {


  return (
    <>
      <div className="relative m-6 w-full font-text-primary flex flex-col items-center gap-10 justify-center">
        <div className="relative  h-[89vh] w-[95vw] max-[960px]:h-[60vh] rounded-md bg-gradient-to-r from-[#24246bae] from-0% via-[#040b13] via-80% to-[#24246bae] to-100%!m-auto max-sm:h-[30vh] ">
          <div className="absolute rounded-md top-0 right-0 w-full h-full flex flex-col p-8 gap-2 justify-start items-center bg-[#00000055]">
            <TextAnimate
              className="text-4xl text-center z-20"
              animation="slideUp"
              by="word"
            >
              Meet our talented team
            </TextAnimate>

            <TextAnimate
              className="text-center font-text-tertiary max-sm:hidden z-20 "
              animation="fadeIn"
              by="line"
              as="p"
              duration={2}
            >
              {`Get to know the brilliant individuals whose dedication and creativity power our vision forward.`}
            </TextAnimate>

          </div>
          <LazyMedia className="w-full h-[89vh] object-cover z-10" mediaType={"image"} src={"https://ik.imagekit.io/8ubfxvx6t/IMAGES/DSC_0327.webp"}  >

          </LazyMedia>
          {/* <img src={"https://ik.imagekit.io/8ubfxvx6t/IMAGES/DSC_0327.webp?updatedAt=1744248430886"} className=" w-full h-full object-cover z-10  " alt="" /> */}
        </div>
        <div className="relative m-6 w-full font-text-primary flex flex-col items-center gap-10 justify-center">
        <TextAnimate
              className="text-4xl text-center z-20"
              animation="slideUp"
              by="word"
            >
             Our Leadership
            </TextAnimate>
          <div className="flex flex-wrap p-8 gap-2 justify-center gap-y-16 items-center ">
            {teamData.map((member, idx) => (

                <ProfileCard key={idx} member={member}  />
            ))}
          </div>
          <TextAnimate
              className="text-4xl text-center z-20"
              animation="slideUp"
              by="word"
            >
             Department Leads & Operations
            </TextAnimate>
           <div className="flex flex-wrap p-8 gap-2 justify-center gap-y-16 gap-x-20 items-center ">
                {teamData.map((member,idx)=>(
                <ProfileCard key={idx} member={member}  />
            ))}
          </div> 
        </div>
      </div>
    </>
  );
}
