
// import React, { useEffect, useMemo, useState } from 'react';
// import {data, rawDataFoodandDrinks} from '../assets/rawData'
// import Product from './Product';
// import { collection, getDocs } from 'firebase/firestore';
// import { database } from '@/Firebase/Firebase';
// import { useProducts } from '@/Contexts/ProductsProvider';
// import {Filter} from './Filter';
// import { finalFilData } from './Filter';

// // import data from '@/assets/data';

// interface ProductType {
//   id: string; // keep this as a string to handle Firebase document IDs
//   img: string;
//   category: string;
//   price: number;
//   name: string;
//   gluten_free: boolean;
// }

// const Veganfoodanddrinks = () => {
// /*
//   const { rawDataFoodandDrinks, rawDatacosmetics, veganPetFood } = data;

//   const [productData, setProductData] = useState<ProductType[]>([]);
//   const [loading, setLoading] = useState(true);

//   const fetchProductData = async () => {
//     try {
//       const collectionRef = collection(database, 'shopKart');
//       const productsData = await getDocs(collectionRef);
// console.log('====================================');
// console.log(productsData); //Returns an entirely unstructured & messy data . It is a complex object
// console.log('====================================');
//       const productsDataArray = productsData.docs.map((doc) => {
//         const data = doc.data();
//         const imageData = rawDataFoodandDrinks.find((item) => item.id === doc.id);
//         console.log(imageData) // we are getting undefined as a result
//         return {
//           id: doc.id, // use string ID directly to avoid NaN
//           img: imageData ? imageData.img : 'image not available',
//           category: data.category || 'Unknown category',
//           gluten_free: data.gluten_free || false,
//           name: data.name || 'No Name available',
//           price: data.price || 0,
//         };
//       });


//       console.log(productsDataArray); // we are getting the entire array of arrays but the img property is showing as 'image not avialablew'
   
//       setProductData(productsDataArray);
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };

//   useEffect(() => {
//     const getProds = async () => {
//       await fetchProductData();
//       setLoading(false);
//     };
//     getProds();
//   }, []);

// */

// const {products, loading} = useProducts();


// const filteredFoodAndDrinks = useMemo(() => (

//   products.filter((item) => item.category.toLowerCase() === 'food')

// ),[products])
  

//   if (loading) {
//     return <div className="text-white text-xl">Loading.....</div>;
//   }

//   return (
//     <div className="container max-w-[90vw] px-4 flex flex-col items-center mx-auto my-20 bg-purple-200 overflow-hidden py-10">
//       <h2 className="text-black text-4xl my-5" style={{ alignSelf: 'start' }}>
//         Vegan Food and Drinks
//       </h2>

// <Filter data={filteredFoodAndDrinks}  />
//       <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-hidden">
//         {
        
 
        
//         // filteredFoodAndDrinks
//         finalFilData
//           .map((item,index) => (
//             <Product
//               key={item.id} // use string `id` to ensure uniqueness
//               id={item.id}
//               img={rawDataFoodandDrinks[index].img}
//               name={item.name}
//               price={item.price}
//               gluten_free={item.gluten_free}
//               category={item.category}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Veganfoodanddrinks;




//New Code


import React, { useEffect, useMemo, useState } from 'react';
import { rawDataFoodandDrinks } from '../assets/rawData';
import Product from './Product';
import { useProducts } from '@/Contexts/ProductsProvider';
import Filter from './Filter';
import { motion } from 'framer-motion';

const Veganfoodanddrinks = () => {
  const { products, loading } = useProducts();

  // Memoized list of food items
  const foodAndDrinks = useMemo(
    () => products.filter((item) => item.category.toLowerCase() === 'food'),
    [products]
  );

  // State to hold filtered data after filtering
  const [filteredData, setFilteredData] = useState(foodAndDrinks);

  useEffect(() => {
    setFilteredData(foodAndDrinks); // Initialize filtered data on load
  }, [foodAndDrinks]);

  if (loading) {
    return <div className="text-white text-xl">Loading.....</div>;
  }

  return (
    <motion.div className="container max-w-[90vw] px-4 flex flex-col items-center mx-auto my-20 bg-[#007025] overflow-hidden py-10"
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.3}}
    viewport={{once:true}}
    >
      <h2 className="text-gray-100 text-4xl my-5" style={{ alignSelf: 'start' }}>
        Vegan Food and Drinks
      </h2>

      {/* Directly set filtered data in child */}
      <Filter data={foodAndDrinks} setFilteredData={setFilteredData}  />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-hidden">
        {filteredData.map((item,index) => (
          <Product
            key={item.id}
            id={item.id}
            img={rawDataFoodandDrinks[index].img || 'default-image.jpg'}
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

export default Veganfoodanddrinks;
