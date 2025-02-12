import React from 'react';

import Product from './Product';
import { start } from 'repl';
import FeaturedProductsData from '@/assets/data';
import { motion } from 'framer-motion';

const FeaturedProducts = () => {
  return (
    <motion.div
    initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:1.3}}
viewport={{once:true}}
      className="container max-w-[90vw]  px-4 flex flex-col items-center 
      mx-auto my-20 bg-[#8589A3] overflow-hidden py-10"
    >
      <h2 className="text-black text-4xl my-5" style={{alignSelf:"start"}}>Featured Products</h2>

      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-6 overflow-hidden"
      >
        {FeaturedProductsData.map((item) => (
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
    </motion.div>
  );
};

export default FeaturedProducts;
