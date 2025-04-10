// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from "react-router"
// import { motion } from "framer-motion"

import { AuroraBackground } from "./components/aurora-background"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Landings from "./pages/Landings"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"
import ThreeD from "./pages/3D"
import Services from "./pages/Services"
import Team from "./pages/Team"
import Contact from "./pages/Contact"



function App() {


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
        <Footer/>
      </AuroraBackground   >
      
      {/* <div className="h-full w-full z-10">

      </div> */}
    </div>

  
  )
}

export default App
