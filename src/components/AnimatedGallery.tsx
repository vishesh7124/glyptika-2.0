import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";


const baseUrl:string= "https://ik.imagekit.io/8ubfxvx6t/"


const images = [
  {
    url: "Graphics/cycles_render.webp",
  },
  {
    url: "Graphics/forest.webp",
  },
  {
    url: "Graphics/Render.webp",
  },
  {
    url: "Graphics/envm.webp",
  },
  {
    url: "Graphics/a.png",
  },
  {
    url: "Graphics/Night_1.webp",
  },
  {
    url: "Graphics/Night_2.webp",
  },
  {
    url: "Graphics/arch.webp",
  },
  {
    url: "Graphics/singleroom.webp",
  },
  {
    url: "Graphics/Doubleroom.webp",
  },
  {
    url: "Graphics/arch2.webp",
  },
];

const firstRow = images.slice(0, 4);
const secondRow = images.slice(4,7);
const thirdRow = images.slice(7,9)

const ImageCard = ({
  url,

}: {
  url: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-96 max-sm:w-40 max-[960px]:w-56 cursor-pointer overflow-hidden rounded-xl border p-4 max-sm:p-1.5 ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-md w-full  h-full  "  alt="" src={baseUrl + url} />
      </div>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((image) => (
          <ImageCard key={image.url} {...image} />
        ))}
      </Marquee>
      {/* <Marquee  pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((image) => (
          <ImageCard key={image.url} {...image} />
        ))}
      </Marquee> */}
      <Marquee  pauseOnHover reverse vertical className="[--duration:20s]">
        {secondRow.map((image) => (
          <ImageCard key={image.url} {...image} />
        ))}
      </Marquee>
      <Marquee  pauseOnHover vertical className=" max-sm:hidden [--duration:20s]">
        {thirdRow.map((image) => (
          <ImageCard key={image.url} {...image} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
