import { Button } from "./ui/button"
import NavMenu from "./NavMenu"
import { IconMenu } from "@tabler/icons-react"
import { useState } from "react"
import {X} from 'lucide-react'
import { NavLink } from "react-router"

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState<Boolean>(false)


  return (
    <nav className= {` flex justify-between sm:flex sm:justify-between rounded-b-3xl items-center p-[0.8rem] bg-[#000000b3] max-sm:${menuOpen?'flex w-full flex-col gap-6 justify-center items-center':''} `}  >
        {(!menuOpen)?
          <>
            <h1 className="font-text-primary text-2xl ">GLYPTIKA</h1>
            <div className="links flex justify-between max-sm:hidden font-text-secondary  gap-8">
                <NavLink to="/" className="hover:text-[#5EC2B5]" >HOME</NavLink>
                <NavMenu/>
                <NavLink to="/services" className="hover:text-[#5EC2B5]">SERVICES</NavLink>
            </div>
            <Button className="bg-[#5EC2B5] p-4 rounded-3xl max-sm:hidden " ><NavLink to="/contact">Contact Us</NavLink></Button>
            <div className="hamburger-menu sm:hidden" onClick={()=>setMenuOpen(!menuOpen)} >
                {menuOpen ? <X className="h-4 w-4" /> :
                <IconMenu className="h-4 w-4" /> }
            </div>
          
          </>:
          <>
            <div className="flex w-full justify-between items-center ">

              <h1>GLYPTIKA</h1>
              <div className="hamburger-menu sm:hidden" onClick={()=>setMenuOpen(!menuOpen)} >
                  {menuOpen ? <X className="h-4 w-4" /> :
                  <IconMenu className="h-4 w-4" /> }
              </div>
            </div>
            <div className="separator w-full h-[0.050rem] bg-white "></div>
            <div className="links flex flex-col justify-center items-center gap-3 ">
                <NavLink to="/" className="hover:text-[#5EC2B5]" >HOME</NavLink>
                <NavMenu/>
                <NavLink to="/services" className="hover:text-[#5EC2B5]" >SERVICES</NavLink>
            </div>
            <Button className="bg-[#5EC2B5] p-4 rounded-3xl  " ><NavLink to="/contact">Contact Us</NavLink></Button>
            
          </>
      }
    </nav>
  )
}

export default Navbar