
import { useParams } from "react-router";
import { projectItems } from "@/components/data/projectData";
import BehindRender from "@/components/BehindRender";
import ImageGrid from "@/components/ImageGrid";



export default function Landings() {
  const params = useParams();
  const project = projectItems.find((item) => item.public_id === params.pid);
  return (
    <>
      <div className="relative !mx-auto w-full font-text-primary flex max-sm:flex-col-reverse max-sm:gap-1 items-center gap-10 justify-center">
        <div className="flex flex-col w-11/12 p-8 gap-8 justify-center items-start max-sm:items-center ">
          <h1 className="text-4xl  text-left max-sm:text-center ">{project?.name.toUpperCase()}</h1>
          <p className="text-left  max-sm:text-center"> 
            {project?.details}
          </p>
        </div>
        <iframe
            src={`https://player.cloudinary.com/embed/?cloud_name=duifdyecp&public_id=${project?.public_id}&profile=cld-default`}
            width="640"
            height="360"  
            style={{height:  "auto", width: "80%", margin:"2rem", borderRadius:"1rem", aspectRatio: 640 / 360}}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          ></iframe>
      </div>
      <BehindRender/>
      <div className="relative font-text-primary !my-6 flex flex-col items-center gap-10 justify-center">
        <h1 className="text-3xl" >GALLERY</h1>
        <ImageGrid projectImg={project?.galleryItems} />
      </div>
    </>
  );
}
