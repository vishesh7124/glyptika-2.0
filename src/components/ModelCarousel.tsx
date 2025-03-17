import { FunctionComponent } from "react";
import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface model {
    id: number;
    url: FunctionComponent;
    title: string;
    thumbnail: string;
}

interface Props{
    models: model[];
    handleModelSelect:(i:number)=>void;
    className?:string;
}

const ModelCarousel = ({models,handleModelSelect,className}:Props) => {
  return (
    <div className={cn("absolute bottom-0 right-30 z-30 font-text-primary text-[20rem] max-sm:text-[10rem] text-center ",className)} >
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
  )
}

export default ModelCarousel