import React, { lazy, memo, useContext, useMemo, useState } from 'react';

// import Product from './Product';
const Product = lazy(()=>import('./Product'));
import FeaturedProductsData from '@/assets/data';
import { motion } from 'framer-motion';
import { ThemeContext } from '@/Contexts/ThemeContext';
import { useProducts } from '@/Contexts/ProductsProvider';
import { Carousel , CarouselContent , CarouselItem , CarouselNext , CarouselPrevious } from './ui/carousel';
import { CartContext } from '@/Contexts/CartContext';

interface ProductType {
  FT: boolean;
  id: string;
  img: string;
  category: string;
  price: number;
  name: string;
  gluten_free: boolean;

}

const FeaturedProducts = () => {


const {theme } = useContext(ThemeContext);

  const {products, loading} = useProducts();



const filteredArray = useMemo(()=>{

const result = products.filter((item) => item.FT === true);




return result;

},[products])

// console.log(filteredArray);

  return (
    <>
    <motion.div
    initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:1.3}}
viewport={{once:true}}
      className={`container max-w-[90vw] px-4 
      mx-auto my-20 ${theme === 'light' ? ' bg-[#8589A3]' : 'bg-gray-800'} overflow-hidden py-10`}
    >
      <h2 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-4xl my-5`} style={{alignSelf:"start"}}>Featured Products</h2>

      <div
        className="w-full hidden text-center sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4
       gap-6 overflow-hidden"
      >
        {filteredArray.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            gluten_free={item.gluten_free}
            category={item.category}

          />
        ))}
      </div>

      
    <Carousel className="w-full  mx-auto block sm:hidden max-w-xs">
      <CarouselContent>
        { filteredArray.map((item, index) => {

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
      </CarouselContent >
      <CarouselPrevious className={`${filteredArray.length === 0 ? 'hidden' : ''} `} />
      <CarouselNext className={`${filteredArray.length === 0 ? 'hidden' : ''} `} />
    </Carousel>

    </motion.div>
    </>
  );
};

export default memo(FeaturedProducts);
