import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import imgpg1 from "@/assets/images/a.png"
import imgpg2 from "@/assets/images/cycles_render.png"
import { NavLink } from "react-router";

const NavMenu = ()=>{
    return(
        <HoverCard >
            <HoverCardTrigger className="hover:text-[#5EC2B5] hover:cursor-pointer " ><button>PORTFOLIO</button></HoverCardTrigger>
            <HoverCardContent className="bg-gradient-to-t from-[#04050c] from-0% via-[#040b13] via-80% to-[#24246bae] to-100% w-4xl border-0 flex justify-center items-center rounded-md gap-3.5 " >

                    <NavLink to="/projects" className="animations hover:bg-[#5EC2B5] hover:cursor-pointer w-1/2 h-full flex justify-between items-center rounded-md gap-3 bg-[#000000b3] ">
                        <img src={imgpg1} alt="" className=" rounded-l-md h-36 w-1/2 object-fill"  />
                        <div className="desc w-1/2  flex flex-col justify-between gap-5 items-start '  ">
                            <h3 className="text-xl" >Animations</h3>
                            <p className="text-sm" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, minus!</p>
                        </div>
                    </NavLink>
                    <NavLink to="/3d" className="models hover:bg-[#5EC2B5] hover:cursor-pointer rounded-l-md w-1/2 h-full flex justify-between items-center rounded-md gap-3 bg-[#000000b3] ">
                        <img src={imgpg2} alt="" className=" rounded-l-md h-36 w-1/2 object-fill"  />
                        <div className="desc w-1/2  flex flex-col justify-between gap-5 items-start '  ">
                            <h3 className="text-xl" >3D Models</h3>
                            <p className="text-sm" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, minus!</p>
                        </div>
                    </NavLink>

            </HoverCardContent>
        </HoverCard>

    )
}

export default NavMenu
