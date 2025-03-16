import { Compare } from "@/components/ui/compare";
import img1 from "../assets/images/a.png"
import img2 from "../assets/images/b.png"

export default function BehindRender() {
  return (
    <div className="relative font-text-primary !my-20 max-sm:!my-10 flex flex-col items-center gap-14 justify-center">
       <h1 className="text-3xl" >BEHIND THE RENDER</h1> 
      <Compare
        firstImage={img1}
        secondImage={img2}
        firstImageClassName="object-fill object-left-top"
        secondImageClassname="object-fill object-left-top"
        className="h-[300px] w-[320px] md:h-[500px] md:w-6/12"
        slideMode="drag"
      />
    </div>
  );
}
