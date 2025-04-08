import { BentoGrid, BentoGridItem } from './ui/bento-grid';


import 'react-lazy-load-image-component/src/effects/blur.css';
import { Button } from './ui/button';
import { NavLink } from 'react-router';

import LazyMedia from "./LazyMedia";
import {projectItems} from './data/projectData';


// const gridPattern = ["col-span-2", "col-span-1",  "col-span-1", "col-span-2","col-span-3"];
export default function ProjectCard() {
  // projectItems.forEach((item, i) => {
  //   item.className = `lg:${gridPattern[i%gridPattern.length]}`;
  // })

  const baseUrl:String="https://ik.imagekit.io/8ubfxvx6t/Animations/"


  return (
    <BentoGrid className="w-screen  md:auto-rows-[15rem] ">
      {projectItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={<NavLink to={`/projects/${item.public_id}`}><Button className="bg-[#5EC2B5] p-4 rounded-3xl  " >Know More</Button></NavLink>}
          header={<LazyMedia mediaType={item.mediaType} src={baseUrl + item.route} />}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}



