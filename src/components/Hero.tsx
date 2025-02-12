import React from 'react'
import img1 from '../assets/special_images/hero_1.jpg'
import img2 from '../assets/special_images/hero_2.jpg' // ensure unique images for each
import img3 from '../assets/special_images/hero_3.jpg'
import img4 from '../assets/special_images/hero_4.jpg'
import img5 from '../assets/special_images/hero_5.jpg'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";

const Hero = () => {
  return (
    <Carousel className="relative mx-auto w-[90vw] h-[70vh] mt-10 overflow-hidden">
      {/* Carousel Controls */}
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />

      {/* Carousel Slides */}
      <CarouselContent className="flex h-[70vh]">
        <CarouselItem className="flex  justify-center items-center p-4">
          <img src={img1} alt="Slide 1" className="object-contain w-full h-auto rounded-lg" />
        </CarouselItem>

        <CarouselItem className="flex justify-center items-center p-4">
          <img src={img2} alt="Slide 2" className="object-contain w-full h-auto rounded-lg" />
        </CarouselItem>

        <CarouselItem className="flex justify-center items-center p-4">
          <img src={img3} alt="Slide 3" className="object-contain w-full h-auto rounded-lg" />
        </CarouselItem>

        <CarouselItem className="flex justify-center items-center p-4">
          <img src={img4} alt="Slide 4" className="object-contain w-full h-auto rounded-lg" />
        </CarouselItem>

        <CarouselItem className="flex justify-center items-center p-4">
          <img src={img5} alt="Slide 5" className="object-contain w-full h-auto rounded-lg" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}

export default Hero
