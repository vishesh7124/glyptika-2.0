import { useParams } from "react-router";
import { projectItems } from "@/components/data/projectData";
import BehindRender from "@/components/BehindRender";
import ImageGrid from "@/components/ImageGrid";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import LazyMedia from "@/components/LazyMedia";
import { NavLink } from "react-router";
// import { Marquee } from "./magicui/marquee";


export default function ProjectDetails() {
  
  const params = useParams();
  const project = projectItems.find(
    (item) => item.public_id === encodeURIComponent(params.pid ?? "")
  );

  const baseUrl:String="https://ik.imagekit.io/8ubfxvx6t/Animations/"



  return (
    <>
      <div className="relative !mx-auto w-full font-text-primary flex max-sm:flex-col-reverse max-sm:gap-1 items-center gap-10 justify-center">
        <div className="flex flex-col w-11/12 p-8 gap-8 justify-center items-start max-sm:items-center ">
          <h1 className="text-4xl  text-left font-text-primary max-sm:text-center ">
            {project?.name.toUpperCase()}
          </h1>
          <p className="text-left font-text-tertiary  max-sm:text-center">
            {project?.details}
          </p>
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
        >
        </iframe>
      </div>
      {project?.renderItems && 
      
      <BehindRender images={project?.renderItems ?? []} />
      }
      {project?.galleryItems && 
        <div className="relative font-text-primary !my-6 flex flex-col items-center gap-10 justify-center">
          <h1 className="text-3xl">GALLERY</h1>
          <ImageGrid projectImg={project?.galleryItems} />
        </div>
      }
        <div className="relative font-text-primary !my-6 flex flex-col items-center gap-10 justify-center">
          <h1 className="text-3xl">Explore More Projects</h1>
          <Marquee pauseOnHover  className="[--duration:20s]">
            {projectItems.map((item,index) => (
                  <figure key={index}
                    className={cn(
                      "relative max-h-56 w-96 max-sm:w-40 max-sm:max-h-32 max-[960px]:w-56 cursor-pointer overflow-hidden rounded-xl border   ",
                      // light styles
                      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                      // dark styles
                      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                    )}
                  >
                    <div className=" relative h-full flex flex-row items-center">
                      <NavLink to={`/projects/${item.public_id}`}>
                        <LazyMedia mediaType={"video"} src={baseUrl + item.route} />
                      </NavLink>
                      <div className="absolute top-0 right-0 flex justify-center items-center bg-[#0000003b] h-full w-full not-hover:opacity-0 " >
                        <p>Click to View</p>
                      </div>
                    </div>
                  </figure>
            ))}
          </Marquee>
        </div>
    </>
  );
}
