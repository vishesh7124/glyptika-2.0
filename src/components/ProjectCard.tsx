import { BentoGrid, BentoGridItem } from './ui/bento-grid';

import 'react-lazy-load-image-component/src/effects/blur.css';

import LazyMedia from "./LazyMedia";
import {projectItems} from './data/projectData';

export default function ProjectCard() {

  return (
    <BentoGrid className="w-screen  md:auto-rows-[22rem]">
      {projectItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<LazyMedia mediaType={item.mediaType} src={item.src} />}
          className={`md:${gridPattern[i%gridPattern.length]}`}
        />
      ))}
    </BentoGrid>
  );
}


const gridPattern = ["col-span-2", "col-span-1",  "col-span-1", "col-span-2","col-span-3"];

