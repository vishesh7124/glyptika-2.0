"use client";


import ThreeHero from "@/components/ThreeHero";


export default function ThreeD() {
  return (
    <>
      <ThreeHero/>
      <div className="relative m-6 w-full font-text-primary flex flex-col items-center gap-10 justify-center">
        <div className="flex flex-col p-8 gap-2 justify-center items-center ">
          <h1 className="text-4xl text-center ">LOREM IPSUM</h1>
          <p className="text-center"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque
            incidunt, voluptatibus accusamus nobis alias fugit cum consectetur
            ullam perspiciatis.
          </p>
        </div>
      </div>
      {/* <div className="relative font-text-primary !my-6 flex flex-col items-center gap-6 justify-center">
        <h1 className="text-4xl">LOREM IPSUM</h1>
        <Button className="bg-[#5EC2B5] p-4 rounded-3xl" >Get in Touch</Button>
      </div> */}
    </>
  );
}
