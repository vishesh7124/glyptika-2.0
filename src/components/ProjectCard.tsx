import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Button } from "./ui/button";

import vid1 from '../assets/videos/AlphaTreadShoes.mp4'
import vid2 from '../assets/videos/Samsung.mp4'

export default function ProjectCard() {
  return (
    <BentoGrid className="w-screen  md:auto-rows-[18rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. "}
          description={<Button className="bg-[#5EC2B5] p-4 rounded-3xl  " >Know More</Button>}
          header={<video
            src={i%2==0 ? vid1:vid2}
            className="w-full h-full rounded-md object-fill  "
            autoPlay
            loop
            muted
          />}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempora. ",
    description: <Button className="bg-[#5EC2B5] p-4 rounded-3xl  " >Know More</Button>    ,
    header:       <video
    src={vid1}
    className="w-full h-full rounded-md object-fill  "
    autoPlay
    loop
    muted
  />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
