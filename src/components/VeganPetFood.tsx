


import React, { useEffect, useMemo, useState } from 'react'
import {veganPetFood} from '../assets/rawData'
import Product from './Product'
import { useProducts } from '@/Contexts/ProductsProvider'
import Filter from './Filter'
import { motion } from 'framer-motion'

const VeganPetFood = () => {


  const {products,loading} = useProducts();

  const filteredPetFood = useMemo(() => (

    products.filter((item) => item.category.toLowerCase() === 'petfood')


  ),[products])


// console.log(products); // #For debugging

const [filteredData, setFilteredData] = useState(filteredPetFood);


useEffect(() =>{

  setFilteredData(filteredPetFood);
  

},[filteredPetFood])

if (loading) {
  return <div className="text-red-800 text-xl">Loading.....</div>;
}


  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.3}}
    viewport={{once:true}}
    className="container max-w-[90vw] px-4 flex flex-col items-center 
    mx-auto my-20 bg-[#007025] overflow-hidden py-10"
  >
    <h2 className=" text-gray-100 text-4xl my-5" style={{alignSelf:"start"}}>Vegan Foods and Supplements for your lovely Pet</h2>

<Filter data={filteredPetFood} setFilteredData={setFilteredData} />

    <div
      className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
      gap-6 overflow-hidden"
    >
      
      {filteredData.map((item,index)  => (
        <Product
          key={item.id}
          id={item.id}
          img={veganPetFood[index].img}
          name={item.name}
          price={item.price}
          gluten_free={item.gluten_free}
          category={item.category}
        />
      ))}
    </div>
  </motion.div>
  )
}

export default VeganPetFood ;
