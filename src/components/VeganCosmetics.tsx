


import React, { lazy, memo, Suspense, useContext, useEffect, useMemo, useState } from 'react'
// import {rawDatacosmetics} from '../assets/rawData'
const Product = lazy(()=>import('./Product'))
import { useProducts } from '@/Contexts/ProductsProvider'
const Filter = lazy(()=>import( './Filter'))
import { motion } from 'framer-motion'
import { ThemeContext } from '@/Contexts/ThemeContext'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'


const VeganCosmetics = () => {

  const {theme} = useContext(ThemeContext);
  const {products, loading} = useProducts();


const filteredCosmeticsData = useMemo(()=>(

products.filter((item) => item.category.toLowerCase() === 'cosmetics')


),[products])


const [filteredData, setFilteredData] = useState(filteredCosmeticsData);

useEffect(()=>{
  setFilteredData(filteredCosmeticsData)
},
[filteredCosmeticsData])


  if (loading) {
    return <div className="text-white text-xl">Loading.....</div>;
  }

console.log(filteredData[1])
  
  return (
    <>
    <motion.div
    initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:1.3}}
viewport={{once:true}}
    className={`container max-w-[90vw] px-4 flex flex-col items-center 
    mx-auto my-20 ${theme === 'light' ? 'bg-[#007025]' : 'bg-gray-800'} overflow-hidden py-10`}
  >
    <h2 className="text-gray-100 text-4xl my-5" style={{alignSelf:"start"}}>Vegan & Cruelity Free Cosmetics Products</h2>

    <Suspense fallback={<div className='font-bold italic text-xl text-center'>Loading...</div>}>
<Filter data={filteredCosmeticsData} setFilteredData={setFilteredData} />
</Suspense>
    <div
      className="w-full hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4
      gap-6 overflow-hidden"
    >

      {filteredData.map((item,index)  => (
        <Product
          key={item.id}
          id={item.id}
          img={item.img}
          name={item.name}
          price={item.price}
          gluten_free={item.gluten_free}
          category={item.category}
          FT={item.FT}
        />
      ))}
    </div>
    
  


    <Carousel className="w-full block sm:hidden max-w-xs">
      <CarouselContent>
        { filteredData.map((item, index) => {

return (

          <CarouselItem key={index}>
          
          <Product
              key={item.id}
              id={item.id}
              // img={rawDataFoodandDrinks[index].img || 'default-image.jpg'}
              img={item.img}
              name={item.name}
              price={item.price}
              gluten_free={item.gluten_free}
              category={item.category} FT={false}          />
          
          </CarouselItem>
)})}
      </CarouselContent>
      <CarouselPrevious className={`${filteredData.length === 0 ? 'hidden' : ''} `} />
      <CarouselNext  className={`${filteredData.length === 0 ? 'hidden' : ''} `}  />
    </Carousel>

  </motion.div>
  </>
  )
}

export default memo(VeganCosmetics);
