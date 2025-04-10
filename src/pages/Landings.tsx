"use client";

import LandingVideo from "@/components/LandingVid";
import { MarqueeDemoVertical } from "@/components/AnimatedGallery";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Landings() {
  return (
    // <CompareDemo/>
    <>

      <LandingVideo />
      <div className="relative m-6 w-full font-text-primary flex flex-col items-center gap-10 justify-center">
        <div className="flex flex-col p-8 gap-2 justify-center items-center ">
          <TextAnimate className="text-4xl text-center " animation="slideUp" by="word">
            Glimpse Into Our Creative World
          </TextAnimate>
          {/* <h1 className="text-4xl text-center ">
            Glimpse Into Our Creative World
          </h1> */}
          <TextAnimate
            className="text-center font-text-tertiary "
            animation="fadeIn"
            by="line"
            as="p" duration={2}
          >
            {`Discover our portfolio of stunning 3D renders, architectural designs, and immersive environments crafted with precision and passion`}
          </TextAnimate>
          {/* <p className="text-center font-text-tertiary ">
            Discover our portfolio of stunning 3D renders, architectural
            designs, and immersive environments crafted with precision and
            passion
          </p> */}
        </div>
        <MarqueeDemoVertical />
      </div>
      <div className="relative font-text-primary !my-6 flex flex-col items-center gap-6 justify-center">
        <TypewriterEffectSmooth
          className="text-4xl text-white "
          words={[
            {
              text: "Bring",
            },
            {
              text: "Ideas",
              className: "text-[#5EC2B5]",
            },
            {
              text: "To",
            },
            {
              text: "Life",
              className: "text-[#5EC2B5]",
            },
          ]}
        />
        {/* <h1 className="text-4xl">Bring Ideas To Life</h1> */}
        <Button className="bg-[#5EC2B5] p-4 rounded-3xl">Get in Touch</Button>
      </div>
    </>
  );
}
