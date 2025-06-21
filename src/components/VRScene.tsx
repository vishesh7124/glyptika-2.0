import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll } from "@react-three/drei";
import * as THREE from "three";
import MetaQuest3 from "@/components/models/MetaQuest3";
import "./Style/VRScene.css";
import UserJourney from "./Explor/UserJourney";
import XplorFor from "./Explor/XplorFor";
import XplorIntroSection from "./Explor/XplorIntroSection";
import XploreBG from "@/assets/images/Xplore/XploreBG.jpg"


// Interactive 3D Model component
function ScrollableModel({ setBgOpacity }: { setBgOpacity: (val: number) => void }) {
  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();

  const [isDragging, setIsDragging] = useState(false);
  const [currentRotation, setCurrentRotation] = useState({ x: 0, y: 0 });

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (event: MouseEvent) => {
    if (isDragging) {
      setCurrentRotation((prev) => ({
        x: prev.x + event.movementY * 0.01,
        y: prev.y + event.movementX * 0.01,
      }));
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isDragging]);

  useFrame((_, delta) => {
    const offset = scroll.offset;

    // Update background opacity based on scroll
    const fadeStart = 0.9;
    const fadeEnd = 1;
    const opacity = Math.min(Math.max((offset - fadeStart) / (fadeEnd - fadeStart), 0), 1);
    setBgOpacity(opacity);

    if (ref.current) {
      if (!isDragging) {
        setCurrentRotation((prev) => ({
          x: prev.x * Math.max(0.95, 1 - delta * 5),
          y: prev.y * Math.max(0.95, 1 - delta * 5),
        }));
      }

      ref.current.position.z = -5 + offset * 10;
      ref.current.rotation.x = currentRotation.x;
      ref.current.rotation.y = currentRotation.y + offset * Math.PI * 2;

      const fadeOpacity = 1 - Math.min(offset * 1, 1);
      ref.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          const materials = Array.isArray(child.material)
            ? child.material
            : [child.material];
          materials.forEach((mat) => {
            mat.transparent = true;
            mat.opacity = fadeOpacity;
          });
        }
      });
    }
  });

  return (
    <group
      ref={ref}
      position={[0, 0.8, 0]}
      scale={[10, 10, -10]}
      rotation={[0, 0, 0]}
    >
      <MetaQuest3 />
    </group>
  );
}

// Canvas wrapper
function VRCanvas({ setBgOpacity }: { setBgOpacity: (val: number) => void }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="h-screen w-full z-10">
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <ScrollControls pages={1}>
        <ScrollableModel setBgOpacity={setBgOpacity} />
      </ScrollControls>
    </Canvas>
  );
}

// Page Component
export default function VRScene() {
  const [bgOpacity, setBgOpacity] = useState(0);

  return (
    <div
      className="bg-black text-gray-50 font-sans w-full -mt-1.5 overflow-y-scroll custom-scroll-hide"
      style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
    >
      <style>
        {`
          .custom-scroll-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      {/* Fading background image behind 3D model */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-center bg-cover z-0 pointer-events-none transition-opacity duration-300"
        style={{
          backgroundImage: `url(${XploreBG})`, // <-- Change image path here
          opacity: bgOpacity,
        }}
      />

      {/* Canvas Section (3D Model) */}
      <div className="relative h-screen z-10">
        <VRCanvas setBgOpacity={setBgOpacity} />
      </div>

      {/* Static Background + Content Section */}
      <section
        className="relative min-h-screen px-6 md:px-12 lg:px-24 py-32 space-y-32 text-white bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${XploreBG})` // <-- Same image for smooth transition
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10">
          <XplorIntroSection />
          <UserJourney />
          <XplorFor />
        </div>
      </section>
    </div>
  );
}
