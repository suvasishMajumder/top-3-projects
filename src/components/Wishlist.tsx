

import { WishListContext } from '@/Contexts/wishListContext'

import React, { useContext } from 'react'
import WishListItem from './WishListItem';
import { useNavigate } from 'react-router-dom';


const Wishlist = () => {


  const {products,setProducts} = useContext(WishListContext);

  // console.log(products)


  const navigate = useNavigate()

// const hanldeCheckoutNext = () =>{


//   navigate('/checkpage1');


// }





  if (products.length === 0) {
  return <h4 className='text-center text-semibold text-red-700'>The Wishlist Is Currently Empty</h4>
  }


  return (

<>


    <div className='mx-auto min-h-[100vh] w-[100vw] flex-col py-10 flex justify-center items-center flex-wrap gap-14 sm:gap-8 md:gap-5'>
     
{

products.map((elem,index) =>(

 <WishListItem key={index} id={elem.id} img={elem.img} name={elem.name} price={elem.price} 
 gluten_free={elem.gluten_free} category={elem.category}  />

))

}


{/* <button
    onClick={hanldeCheckoutNext}
      type="button"
      className="mb-16 text-white bg-gradient-to-r from-[#228B22] to-[#32CD32]
       hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#90EE90] font-medium rounded-lg text-lg w-60 mx-auto
       py-3.5 text-center"
    >
     Proceed To Checkout
    </button> */}


    </div>


    </>
  )
}

export default  Wishlist;
