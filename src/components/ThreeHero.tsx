import { useState, useRef,useEffect, forwardRef, FunctionComponent, ComponentType, ForwardedRef } from "react";
import { Suspense } from "react";
import { OrbitControls, Center, Resize } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import { Ship } from "./models/Ship";
// import { Model } from "./models/Iphone";
import { Model }  from "./models/Iphone_12_pro";
import { Car } from "./models/Car";
// import { Model } from "./models/Free_1972";
import { Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Object3D } from "three";
import { Html, useProgress } from '@react-three/drei'
import {motion} from "motion/react"
import { AnimatePresence } from "motion/react";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Loader() {
  const { progress } = useProgress()
  useEffect(() => {
    if(progress===100){
      console.log("loaded")
    }
  }, [progress])
  
  return <Html center>{progress} % loaded</Html>
}

interface model {
  id:number;
  url:FunctionComponent;
  title:string;
  thumbnail:string;
}

function createForwardRefModel<T>(Component: ComponentType<T & { ref?: ForwardedRef<unknown> }>) {
  return forwardRef<unknown, T>((props, ref) => <Component {...(props as T)} ref={ref} />);
}

const models: model[] = [
  {
    id: 1,
    url: Model,
    title: 'I phone',
    thumbnail: 'https://res.cloudinary.com/duifdyecp/image/upload/a_jvvqci.png'
  },
  {
    id: 2,
    url: Car,
    title: 'Car',
    thumbnail: 'https://res.cloudinary.com/duifdyecp/image/upload/forest_usuleo.png'
  },
  {
    id: 3,
    url: Ship,
    title: 'Ship',
    thumbnail: 'https://res.cloudinary.com/duifdyecp/image/upload/a_jvvqci.png'
  },
  {
    id: 4,
    url: Model,
    title: 'I phone 2',
    thumbnail: 'https://res.cloudinary.com/duifdyecp/image/upload/a_jvvqci.png'
  },
  {
    id: 5,
    url: Car,
    title: 'Car 2', 
    thumbnail: 'https://res.cloudinary.com/duifdyecp/image/upload/a_jvvqci.png'
  },
]





function Box({model}:{model:FunctionComponent}) {
  const meshRef = useRef<Object3D>(null)
  const {loaded} = useProgress()

  useFrame((_, delta) => meshRef.current && (meshRef.current.rotation.y += delta/2))
  

  const ModelWithRef = createForwardRefModel(model);


  return (
    <>
      {!loaded && <Html center>loaded</Html>}
      <Center>
        <Resize scale={6} >
            <ModelWithRef ref={meshRef}    />
          {/* <Suspense fallback={<Loader/  >}>
          </Suspense> */}

        </Resize>
      </Center>
    </>


)
}



const ThreeHero = () => {
  const [selectedModel, setSelectedModel] = useState<model>(models[0])
  const handleModelSelect = (i:number)=>{
    const model = models[i]
    setSelectedModel(model)
    console.log(`Selected model: ${selectedModel.url}`)
  }



  
  return (
    <div className="relative h-[89vh] w-[95vw] max-[960px]:h-[60vh] rounded-md  !m-auto max-sm:h-[30vh] ">
      <div className="w-full h-full rounded-md overflow-hidden z-10 bg-[#000000b3]">
        <Canvas  className="z-20"   >
          <Environment preset="sunset" />
          <ambientLight intensity={Math.PI / 2} />
            <Box key={selectedModel.title} model={selectedModel.url} />
          
          <OrbitControls  enableZoom={false} />
        </Canvas>
        
      </div>
      <AnimatePresence mode="wait" >
        <motion.div 
          key={selectedModel.title}
          initial={{x:-1000 }}
          animate={{x:0, transition: {type:"spring", duration: 1, bounce:0.1 }}}
          exit={{ scale: 0, transition: {type:"spring", duration: 0.5, bounce:0.1 } }}
          viewport={{once:false}}
          className="absolute top-0 left-0 z-0 font-text-primary lg:text-[18rem] text-[5rem] md:text-[11rem] text-center w-full h-full flex justify-center items-center"
        >
          <h1>{selectedModel.title.toUpperCase()}</h1>
        </motion.div>
      </AnimatePresence>      
      <div className="absolute bottom-0 right-30 z-30 font-text-primary text-[20rem] max-sm:text-[10rem] text-center " >
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm "
    >
      <CarouselContent>
        {models.map((model, index) => (
          <CarouselItem onClick={()=>handleModelSelect(index)} key={index} className="p-0 md:basis-1/2 lg:basis-1/3">
            <div className="p-2 hover:border-[#5EC2B5] hover:border-1 rounded-md hover:cursor-pointer ">
              <Card className="h-full w-full p-0 border-0 ">
                <CardContent className="flex w-full h-full aspect-square p-0  items-center justify-center ">
                  <img src={model.thumbnail} className="w-full h-full object-fill rounded-md " alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>
    </div>
  );
};

export default ThreeHero;
