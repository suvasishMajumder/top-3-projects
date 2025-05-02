


/********************* New Component  *******************************/

import React, { memo, useContext, useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { doc, updateDoc, arrayRemove } from 'firebase/firestore';
import { auth, database } from '@/Firebase/Firebase';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { CartContext } from '@/Contexts/CartContext';

interface PropsType {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
  gluten_free: boolean;
  category: string;
}

const CartItem: React.FC<PropsType> = ({ id, img, name, price, gluten_free, quantity, category }) => {


  const {cartProducts, setCartProducts} = useContext(CartContext);

  const [isDeleted, setIsDeleted] = useState(false);

  // Handle Delete from Cart
  const handleDelFromCart = async () => {
    try {
      // Get the authenticated user's UID
      const userId = auth.currentUser?.uid;
      // console.log(auth.currentUser)
      if (!userId) {
        toast.error('User is not authenticated.');
        return;
      }

      // Construct the product object to remove
      const product = {
        id,
        img,
        name,
        price,
        quantity,
        gluten_free,
        category,
      };

      // Reference the user's cartProducts document
      const userCartDoc = doc(database, 'cartProducts', userId);

      // Use `arrayRemove` to remove the specific product
      await updateDoc(userCartDoc, {
        products: arrayRemove(product),
      });

      toast.success(`The item "${name}" has been removed from your cart.`);

const result = cartProducts.filter(item => item.id!== id);


setCartProducts(result);

      setIsDeleted(true); // Optionally hide the item from UI



    } catch (error) {
      // console.error('Error removing product from cart:', error);
      toast.error('Failed to remove the item from your cart.');
    }
  };

  // Hide the component if the item is deleted
  // if (isDeleted) return null;


  // console.log(cartProducts);

  return (
    <>
    <div className='w-full md:w-[90%] sm:w-full p-8 sm:p-4 border rounded-md shadow-md bg-gray-100'>
      <img src={img} alt={name} className='w-full h-32 object-contain mb-3' loading='lazy' />
      <h4 className='text-lg font-semibold'>{name}</h4>
      <p className='text-sm text-gray-800'>₹&nbsp;{price}</p>
      <div className="quantity-control flex justify-center items-center space-x-5">
        <FaPlus className='text-green-800' />
        <p className='text-sm text-gray-600'>Quantity: {quantity}</p>
        <FaMinus className='text-red-700' />
      </div>
      <p className='text-sm text-gray-600'>Gluten Free: {gluten_free ? 'Yes' : 'No'}</p>
      <p className='text-sm text-gray-600'>Category: {category}</p>
      <div className="mx-auto w-[95%] h-6 flex justify-center items-center space-x-1 mb-8">
        <p className='text-[0.9rem]'>Delete Product</p>
        <RiDeleteBin6Fill onClick={handleDelFromCart} className='text-red-500 cursor-pointer' />
      </div>


<Link
       to={`/cartitem/${id}`}
        
        state={{  id,  img, name, price, gluten_free , category,}}
     
        className="text-sm px-6 py-2 bg-[#2193C0] hover:bg-blue-500 hover:shadow-xl transition-shadow font-semibold
         text-white underline hover:no-underline rounded-md"
      >
        See Details
      </Link>

    </div>
    </>
  );
};

export default memo(CartItem);
