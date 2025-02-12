

import { WishListContext } from '@/Contexts/wishListContext'
import { log } from 'console';
import React, { useContext } from 'react'
import WishListItem from './WishListItem';


const Wishlist = () => {


  const {products,setProducts} = useContext(WishListContext);

  console.log(products)


  if (products.length === 0) {
  return <h4 className='text-center text-semibold text-red-700'>The Wishlist Is Currently Empty</h4>
  }


  return (

<>




    <div className='mx-auto min-h-[100vh] w-[100vw] my-20 flex justify-center items-center flex-wrap gap-14 sm:gap-8 md:gap-5'>
     
{

products.map((elem,index) =>(

 <WishListItem key={index} id={elem.id} img={elem.img} name={elem.name} price={elem.price} 
 gluten_free={elem.gluten_free} category={elem.category}  />

))

}



    </div>
    </>
  )
}

export default Wishlist
