import { useParams } from "react-router";
import { projectItems } from "@/components/data/projectData";
import BehindRender from "@/components/BehindRender";
import ImageGrid from "@/components/ImageGrid";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import LazyMedia from "@/components/LazyMedia";
import { NavLink } from "react-router";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function ProjectDetails() {
  const params = useParams();
  const project = projectItems.find(
    (item) => item.public_id === encodeURIComponent(params.pid ?? "")
  );

  const baseUrl: String = "https://ik.imagekit.io/glyptikaweb/cdn/Animations/";

  return (
    <>
      <div className="relative !mx-auto w-full font-text-primary flex max-sm:flex-col-reverse max-sm:gap-1 items-center gap-10 justify-center">
        <div className="flex flex-col w-11/12 p-8 gap-8 justify-center items-start max-sm:items-center ">
        {// @ts-ignore
          <TextAnimate
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
                rotate: 45,
                scale: 0.5,
              },
              show: (i) => ({
                opacity: 1,
                y: 0,
                rotate: 0,
                scale: 1,
                transition: {
                  delay: i * 0.1,
                  duration: 0.4,
                  y: {
                    type: "spring",
                    damping: 12,
                    stiffness: 200,
                    mass: 0.8,
                  },
                  rotate: {
                    type: "spring",
                    damping: 8,
                    stiffness: 150,
                  },
                  scale: {
                    type: "spring",
                    damping: 10,
                    stiffness: 300,
                  },
                },
              }),
              exit: (i) => ({
                opacity: 0,
                y: 30,
                rotate: 45,
                scale: 0.5,
                transition: {
                  delay: i * 0.1,
                  duration: 0.4,
                },
              }),
            }}
            className="text-6xl text-[#5EC2B5]  text-left font-text-primary max-sm:text-center "
            by="character"
          >
            {project?.name.toUpperCase()}
          </TextAnimate>}
          {/* <h1 className="text-4xl  text-left font-text-primary max-sm:text-center ">
            {project?.name.toUpperCase()}
          </h1> */}
          {project?.details?.split(".").map((line) => (
            <BoxReveal key={line} boxColor={"#5EC2B5"} duration={0.5}>
              <p className="text-left font-text-tertiary  max-sm:text-center">
                {line}
              </p>
            </BoxReveal>
          ))}
        </div>
        <iframe
          width="640"
          height="360"
          style={{
            height: "auto",
            width: "80%",
            margin: "2rem",
            borderRadius: "1rem",
            aspectRatio: 640 / 360,
          }}
          src={`https://imagekit.io/player/embed/8ubfxvx6t/Animations/${project?.route}`}
          title="ImageKit video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        ></iframe>
      </div>
      {project?.renderItems && (
        <BehindRender images={project?.renderItems ?? []} />
      )}
      {project?.galleryItems && (
        <div className="relative font-text-primary !my-6 flex flex-col items-center gap-10 justify-center">
          <h1 className="text-3xl text-[#5EC2B5]">GALLERY</h1>
          <ImageGrid projectImg={project?.galleryItems} />
        </div>
      )}
      <div className="relative font-text-primary !my-6 flex flex-col items-center gap-10 justify-center">
        <h1 className="text-3xl text-[#5EC2B5]">Explore More Projects</h1>
        <Marquee pauseOnHover className="[--duration:20s]">
          {projectItems.map((item, index) => (
            <figure
              key={index}
              className={cn(
                "relative max-h-56 w-96 max-sm:w-40 max-sm:max-h-32 max-[960px]:w-56 cursor-pointer overflow-hidden rounded-xl border   ",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              )}
            >
              <NavLink to={`/projects/${item.public_id}`}>
                <div className=" relative h-full flex flex-row items-center">
                  <LazyMedia mediaType={"video"} src={baseUrl + item.route} />
                  <div className="absolute top-0 right-0 flex justify-center items-center bg-[#0000003b] font-text-secondary h-full w-full not-hover:opacity-0 ">
                    <p>Click to View</p>
                  </div>
                </div>
              </NavLink>
            </figure>
          ))}
        </Marquee>
      </div>
    </>
  );
}
