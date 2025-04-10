// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from "react-router"
import { Button } from "./components/ui/button"
import { Link } from "react-router"
import { useState } from "react"
import { useScroll, useMotionValueEvent } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import {motion} from "motion/react"
// import { motion } from "framer-motion"

import { AuroraBackground } from "./components/aurora-background"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Toaster } from "./components/ui/sonner"

import Landings from "./pages/Landings"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"
import ThreeD from "./pages/3D"
import Services from "./pages/Services"
import Team from "./pages/Team"
import Contact from "./pages/Contact"



function App() {
  const {scrollYProgress} = useScroll()
  const [scrollPosition, setScrollPosition] = useState(0)

  // Update state when scroll changes
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollPosition(latest)
  })

  return (
    <div className="h-full w-full">
    
      <AuroraBackground   >
        
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landings/>} />
          <Route path="/projects" element={<Projects/>} />

          <Route path="projects/:pid" element={<ProjectDetails/>} />

          <Route path="/3d" element={<ThreeD/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        {scrollPosition >= 0.05 && scrollPosition <= 0.9 && (<AnimatePresence>

          <motion.div initial={{x:20}} animate={{x:0, transition: {type:"spring", duration: 1, bounce:0.1 }}} exit={{x:0,transition: {type:"spring", duration: 0.5, bounce:0.1 }}} className={`fixed bottom-10 right-7 z-20 `}>
              <Button className="bg-[#5EC2B5] p-4 rounded-3xl  " ><Link to="https://docs.google.com/forms/d/1obUz0QFdiewjhNvsdQd9NvdFcTKiHwtjpcbl0s34XSI/edit?ts=67f7db64" target="_blank"  >Join Us</Link></Button>
          </motion.div>
        
        </AnimatePresence>)}
        <Footer/>
        <Toaster />

      </AuroraBackground   >
      
      {/* <div className="h-full w-full z-10">

      </div> */}
    </div>

  
  )
}

export default App
