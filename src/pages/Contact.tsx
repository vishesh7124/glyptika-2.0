import ContactForm from "@/components/ContactForm";
import {motion} from "motion/react"


type logo = {
  name: string;
  url: string;
};

const logos: logo[] = [
  {
    name: "Blender",
    url: "https://ik.imagekit.io/glyptikaweb/cdn/Logos/blender2.png",
  },
  {
    name: "Unreal",
    url: "https://ik.imagekit.io/glyptikaweb/cdn/Logos/unreal.png",
  },
  {
    name: "Revit",
    url: "https://ik.imagekit.io/glyptikaweb/cdn/Logos/revit.png",
  },
];

export default function Contact() {
  return (
    <>
      <div className="relative max-sm:p-8 max-sm:!mb-14 !mb-6 w-full font-text-primary flex flex-col items-center gap-6 justify-center">
        <div className="flex flex-col p-6 pb-0 gap-6 justify-center items-center ">
          <h1 className="text-4xl text-center font-text-primary ">Collaborate With Us </h1>
          <p className="text-center sm:max-w-1/2 font-text-tertiary ">
          Share your ideas and let us craft unique designs and animations tailored to your vision.
          </p>
        </div>
        <div className="flex  gap-12 justify-center items-center ">
            {logos.map((logo,index)=>(
                <img key={index} src={logo.url} alt="" className="h-12 w-12 rounded-2xl object-contain " />
            ))}
        </div>
        <motion.div initial={{y:600}} animate={{y:0, transition:{duration:1,delay:0.5,type:"spring",bounce:0.5}}} className="flex flex-col p-8 gap-2 justify-center items-center bg-[#000000b3] rounded-md ">
            <ContactForm/>
        </motion.div>
      </div>
    </>
  );
}
