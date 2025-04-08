import { BentoGrid, BentoGridItem } from './ui/bento-grid';


import 'react-lazy-load-image-component/src/effects/blur.css';


import LazyMedia from "./LazyMedia";

interface ImagGridProp{
  projectImg?:string[]
}

const gridPattern = ["col-span-1", "col-span-1",  "col-span-1", "col-span-2","col-span-1",];
export default function ImageGrid({projectImg}:ImagGridProp) {
  const baseUrl:String="https://ik.imagekit.io/8ubfxvx6t/Animations/"

  return (
    <BentoGrid className="w-screen grid-cols-2 max-sm:auto-rows-[15rem] md:auto-rows-[15rem] lg:auto-rows-[12rem]  ">
      {projectImg?.map((img, i) => (
        <BentoGridItem
          key={i}
          header={<LazyMedia mediaType={"image"} src={baseUrl + img} />}
          className={gridPattern[i%gridPattern.length]}
        />
      ))}
    </BentoGrid>
  );
}



