import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { NavLink } from "react-router";

type NavMenuItems = {
    route:string;
    img:string;
    title:string;
    description:string;
}

const navMenuItems:NavMenuItems[] =[
    {
        "route":"/projects",
        "img":"https://ik.imagekit.io/glyptikaweb/cdn/Graphics/nav-image1.webp?updatedAt=1744269331660",
        "title":"Animations",
        "description":"Dive into dynamic visuals and storytelling brought to life through stunning animations."

    },
    {
        "route":"/3d",
        "img":"https://ik.imagekit.io/glyptikaweb/cdn/Graphics/nav-image2.webp?updatedAt=1744269333298",
        "title":"3D Models",
        "description":"Explore lifelike 3D creations, from sleek designs to detailed environments, crafted to perfection."
    }
]

const NavMenu = ()=>{
    return(
        <HoverCard >
            <HoverCardTrigger className="hover:text-[#5EC2B5] hover:cursor-pointer " ><button>PORTFOLIO</button></HoverCardTrigger>
            <HoverCardContent className="bg-gradient-to-t from-[#04050c] from-0% via-[#040b13] via-80% to-[#24246bae] to-100% w-4xl border-0 flex justify-center items-center max-sm:flex-col rounded-md gap-3.5 max-sm:w-screen max-[850px]:w-[90vw] " >
                {navMenuItems.map((item,index)=>(
                    <NavLink key={index} to={item.route} className="animations hover:bg-[#5EC2B5] hover:cursor-pointer w-1/2 h-full  max-sm:h-1/2 max-sm:w-full flex justify-between items-center rounded-md gap-3 bg-[#000000b3] ">
                        <img src={item.img} alt="" className=" rounded-l-md h-36 w-1/2 max-sm:w-44  object-fill"  />
                        <div className="desc w-1/2  flex flex-col justify-between gap-5 items-start max-sm:w-full   ">
                            <h3 className="text-xl font-text-primary " >{item.title}</h3>
                            <p className="text-sm font-text-tertiary " >{item.description}</p>
                        </div>
                    </NavLink>

                ))}


            </HoverCardContent>
        </HoverCard>

    )
}

export default NavMenu
