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
        name: "Diya Wadhawan",
        position: "Legal and Operations Manager",
        imageUrl:"team/diya.webp",
        linkedIn: "https://www.linkedin.com/in/diya-wadhawan-548941280/"
    },
    {
        name: "Vanshaj Kashyap",
        position: "HR Manager",
        imageUrl:"team/vanshaj.jpg",
        linkedIn: "https://www.linkedin.com/in/vanshaj-kashyap-38046b293/"
    },
    {
        name: "Vanshaj Kaushik",
        position: "Project Team Lead (XPLOR) & Frontend Developer",
        imageUrl:"team/kaushik.jpg",
        linkedIn: "https://www.linkedin.com/in/vanshaj-kaushik-a8bb1b278/"
    },
    {
        name: "Harshdeep Jakhar",
        position: "CTO (AI Developer)",
        imageUrl:"team/harshdeep.jpg",
        linkedIn: "https://www.linkedin.com/in/harshdeep-jakhar-b1736a286/"
    },
    {
        name: "Maurya Kandhari",
        position: "Head of Content, Publicity, and Outreach",
        imageUrl:"team/maurya.jpg?updatedAt=1744288980776",
        linkedIn: "https://www.linkedin.com/in/maurya-kandhari-a4bb16313/"
    },
    {
        name: "Awanti Prakash",
        position: "Head of 2D Animation & Creativity",
        imageUrl:"team/awanti.jpg",
        linkedIn: "https://www.linkedin.com/in/awanti-prakash/"
    },
    {
        name: "Piyush Malik",
        position: "Head of Video Editing and Post-Production",
        imageUrl:"team/piyush2.jpg",
        linkedIn: "https://www.linkedin.com/in/p1yushmalik/"
    },
    {
        name: "Ashwin Garg",
        position: "Head of 3D Animation and Modelling",
        imageUrl:"team/ashwin.webp",
        linkedIn: "https://www.linkedin.com/in/ashwin-garg-251781317/"
    },
    {
        name: "Aryan Khurana",
        position: "Head of Graphic Design",
        imageUrl:"team/aryan.webp",
        linkedIn: "https://www.linkedin.com/in/aryan-khurana-0-/"
    },
]

export default function Team() {
// inside component:


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
              {`With a powerhouse of 10+ creative designers and 20+ skilled 3D modeling experts, our team brings unmatched talent and innovation to every project.`}
            </TextAnimate>
            <TextAnimate
              className="text-center font-text-tertiary max-sm:hidden z-20 "
              animation="fadeIn"
              by="line"
              as="p"
              duration={2}
            >
              {` At Glyptika, excellence isn't an exception — it's the standard.`}
              </TextAnimate>

          </div>
          <LazyMedia className=" h-[89vh] w-[95vw] max-[960px]:h-[60vh] max-sm:h-full object-cover z-10" mediaType={"image"} src={"https://ik.imagekit.io/8ubfxvx6t/IMAGES/DSC_0327.webp"}  >

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
