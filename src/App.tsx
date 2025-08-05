import { Routes, Route, useLocation } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { AuroraBackground } from "./components/aurora-background";

import Landings from "./pages/Landings";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import ThreeD from "./pages/3D";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Explor from "./pages/Explor";
import Index from "./components/workshop/Index";


import BonusResources from "./components/workshop/BonusResources";
import NotFound from "./components/workshop/NotFound";
import { MainSelection } from "./components/workshop/MainSelection";

function App() {
  const { scrollYProgress } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  const hideEverything = [
    "/workshop",
    "/day1",
    "/day2",
    "/day3",
    "/day4",
    "/day5",
    "/bonus",
    "*",
  ];

  const onlyNavbarRoutes = ["/landing"];

  const isHideEverything = hideEverything.includes(location.pathname);
  const isOnlyNavbar = onlyNavbarRoutes.includes(location.pathname);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollPosition(latest);
  });

  const routes = (
    <Routes>
      <Route path="/" element={<Landings />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="projects/:pid" element={<ProjectDetails />} />
      <Route path="/3d" element={<ThreeD />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/xplor" element={<Explor />} />
      <Route path="/landing" element={<MainSelection />} />
      <Route path="/workshop" element={<Index />} />
      {/* <Route path="/day1" element={<Day1Resources />} />
      <Route path="/day2" element={<Day2Resources />} />
      <Route path="/day3" element={<Day3Resources />} /> */}
      <Route path="/bonus" element={<BonusResources />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  if (isHideEverything) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        {routes}
        <Toaster />
      </div>
    );
  }

  if (isOnlyNavbar) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        {routes}
        <Toaster />
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <AuroraBackground>
        <Navbar />

        {routes}

        {scrollPosition >= 0.05 && scrollPosition <= 0.9 && (
          <AnimatePresence>
            <motion.div
              initial={{ x: 20 }}
              animate={{
                x: 0,
                transition: { type: "spring", duration: 1, bounce: 0.1 },
              }}
              exit={{
                x: 0,
                transition: { type: "spring", duration: 0.5, bounce: 0.1 },
              }}
              className="fixed bottom-10 right-7 z-20"
            >
              <Button className="bg-[#5EC2B5] p-4 rounded-3xl">
                <Link
                  to="https://docs.google.com/forms/d/1obUz0QFdiewjhNvsdQd9NvdFcTKiHwtjpcbl0s34XSI/edit?ts=67f7db64"
                  target="_blank"
                >
                  Join Us
                </Link>
              </Button>
            </motion.div>
          </AnimatePresence>
        )}

        <Footer />
        <Toaster />
      </AuroraBackground>
    </div>
  );
}


export default App;
