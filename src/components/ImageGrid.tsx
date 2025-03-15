import { BentoGrid, BentoGridItem } from './ui/bento-grid';


import 'react-lazy-load-image-component/src/effects/blur.css';


import LazyMedia from "./LazyMedia";

interface ImagGridProp{
  projectImg?:string[]
}

const gridPattern = ["col-span-1", "col-span-1",  "col-span-1", "col-span-2","col-span-1",];
export default function ImageGrid({projectImg}:ImagGridProp) {
  
  return (
    <BentoGrid className="w-screen  md:auto-rows-[15rem] lg:auto-rows-[12rem]">
      {projectImg?.map((img, i) => (
        <BentoGridItem
          key={i}
          header={<LazyMedia mediaType={"image"} src={img} />}
          className={gridPattern[i%gridPattern.length]}
        />
      ))}
    </BentoGrid>
  );
}



