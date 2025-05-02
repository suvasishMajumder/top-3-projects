import React, { memo, useMemo } from "react";
import img1 from "../assets/special_images/hero_1.webp";
import img2 from "../assets/special_images/hero_2.webp"; // ensure unique images for each
import img3 from "../assets/special_images/hero_3.webp";
import img4 from "../assets/special_images/hero_4.webp";
import img5 from "../assets/special_images/hero_5.webp";


//new code starts


import Autoplay from "embla-carousel-autoplay"

// import { Card, CardContent } from "../components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
}


//new code ends

 

// hero 1: 1280 x 853 

// hero 2: 1280 x 853 

// hero 3: 5184 x 3456

// hero 4: 6000 x 4000

// hero 5: 8192 x 4608

const Hero = () => {

  const carouselItemArray = useMemo(() => 
    [
      {
        img: img1,
        height:1280,
        width:853
      },
      {
        img: img2,
        height:1280,
        width:853
      },
      {
        img: img3,
        height:5184,
        width:3456
      },
      {
        img: img4,
        height:6000,
        width:4000
      },
      {
        img: img5,
        height:8192,
        width:4608
      },
    ]
  , []);


  return (
   
<>
        <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="relative mx-auto w-[90vw] h-[70vh] mt-10 overflow-hidden" >
          <CarouselContent className="flex h-[70vh]">


{

carouselItemArray.map((item,index) =>{
return (

    <CarouselItem key={index} className="flex justify-center object-cover items-center p-4">
         <img
            src={item.img}
            width={item.width}
            height={item.height}
          alt="Slide 1"
           className="object-contain w-full min-h-96 h-auto rounded-lg"
         />
      </CarouselItem>

)})
}

          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </>
      )
    }


export default memo(Hero);
