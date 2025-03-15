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



function App() {
  // const [count, setCount] = useState(0)  

  return (
    <div className="h-full w-full">
    
      <AuroraBackground   >
        
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landings/>} />
          <Route path="/projects" element={<Projects/>} />

          <Route path="projects/:pid" element={<ProjectDetails/>} />

        </Routes>
        <Footer/>
      </AuroraBackground   >
      
      {/* <div className="h-full w-full z-10">

      </div> */}
    </div>

  
  )
}

export default App
