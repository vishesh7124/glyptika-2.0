// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Landings from './pages/Landings'
import { AuroraBackground } from "./components/ui/aurora-background"
import Landings from "./pages/Landings"
// import { motion } from "framer-motion"


function App() {
  // const [count, setCount] = useState(0)  

  return (
    <div className="h-full w-full">
    
      <AuroraBackground   >
        <Landings/>

      </AuroraBackground   >
      
      {/* <div className="h-full w-full z-10">

      </div> */}
    </div>

  
  )
}

export default App
