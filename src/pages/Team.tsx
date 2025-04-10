"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import LazyMedia from "@/components/LazyMedia";



import ProfileCard from "@/components/ProfileCard";
const baseUrl:string = "https://ik.imagekit.io/glyptikaweb/cdn/"

const teamData = [
    {
        name: "Jai Raj Singh Ahluwalia",
        position: "CEO",
        imageUrl:"team/jai_raj.jpg",
        linkedIn: "https://www.linkedin.com/in/jai-raj-singh-ahluwalia/"
    },
    {
        name: "Pranay Mathur",
        position: "CFO",
        imageUrl:"team/pranay.jpg",
        linkedIn: "https://www.linkedin.com/in/pranay-mathur-05526a28a/"
    },
    {
        name: "Vanshaj Kashyap",
        position: "CFO",
        imageUrl:"team/vanshaj.jpg",
        linkedIn: "https://www.linkedin.com/in/vanshaj-kashyap-38046b293/"
    },
    {
        name: "Vanshaj Kaushik",
        position: "CFO",
        imageUrl:"team/kaushik.jpg",
        linkedIn: "https://www.linkedin.com/in/vanshaj-kaushik-a8bb1b278/"
    },
    {
        name: "Harshdeep Jakhar",
        position: "CFO",
        imageUrl:"team/harshdeep.jpg",
        linkedIn: "https://www.linkedin.com/in/harshdeep-jakhar-b1736a286/"
    },
    {
        name: "Maurya Kandhari",
        position: "CFO",
        imageUrl:"team/maurya.jpg?updatedAt=1744288980776",
        linkedIn: "https://www.linkedin.com/in/maurya-kandhari-a4bb16313/"
    },
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
        <div className="relative m-6 w-full font-text-primary flex flex-col items-center gap-10 gap-x-20   justify-center">
        <TextAnimate
              className="text-4xl text-center z-20"
              animation="slideUp"
              by="word"
            >
             Our Leadership
            </TextAnimate>
          <div className="flex flex-wrap p-8 gap-2 justify-center gap-y-16 gap-x-20 items-center ">
            {teamData.slice(0,2).map((member, idx) => (

                <ProfileCard baseUrl={baseUrl} key={idx} member={member}  />
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
                {teamData.slice(2).map((member,idx)=>(
                <ProfileCard baseUrl={baseUrl} key={idx} member={member}  />
            ))}
          </div> 
        </div>
      </div>
    </>
  );
}
