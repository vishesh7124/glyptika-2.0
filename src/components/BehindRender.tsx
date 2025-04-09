import { Compare } from "@/components/ui/compare";
// import img1 from "../assets/images/a.png"
// import img2 from "../assets/images/b.png"

interface Props {
  images:string[] 
}

export default function BehindRender({images}:Props) {
  const baseUrl:String="https://ik.imagekit.io/8ubfxvx6t/Animations/"

  return (
    <div className="relative font-text-primary !my-20 max-sm:!my-10 flex flex-col items-center gap-14 justify-center">
       <h1 className="text-3xl text-[#5EC2B5]" >BEHIND THE RENDER</h1> 
      <Compare
        firstImage={baseUrl + images[0]}
        secondImage={baseUrl + images[1]}
        firstImageClassName="object-fill object-left-top"
        secondImageClassname="object-fill object-left-top"
        className="h-[300px] w-[320px] md:h-[500px] md:w-6/12"
        slideMode="drag"
      />
    </div>
  );
}
