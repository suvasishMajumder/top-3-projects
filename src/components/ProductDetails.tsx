

import { rawDatacosmetics } from '@/assets/rawData'
import { WishListContext } from '@/Contexts/WishListContext';
import { auth } from '@/Firebase/Firebase';
import { arrayUnion, doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { Divide } from 'lucide-react';
import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { useLocation } from 'react-router-dom';



const ProductDetails = () => {

 
const location = useLocation();

const product = location.state;

const {  id,  img, name, price, gluten_free, category } = product;



//


const {products,setProducts} = useContext(WishListContext)



const handleAddToCart = async () => {
  const user = auth.currentUser;

  if (!user) {
    // If the user is not authenticated, show an error or prompt to login
    alert("Please log in to add items to your cart.");
    return;
  }

  try {
    const userCartRef = doc(getFirestore(), 'cartProducts', user.uid); // Firestore document reference for user's cart
    const userCartSnap = await getDoc(userCartRef);

    // Prepare the product data to add to cart
    const productData = {
      id,
      img,
      name,
      price,
      gluten_free,
      category,
      quantity: 1, // Adding the product with an initial quantity of 1
    };


    

    if (userCartSnap.exists()) {
      // If cart exists for the user, update it with the new product
      await updateDoc(userCartRef, {
        products: arrayUnion(productData), // Add the product to the existing cart
      });
    } else {
      // If cart does not exist, create a new cart
      await setDoc(userCartRef, {
        products: [productData], // Add the product to a new cart
      });
    }

    alert('Product added to cart');
    toast.success('Product added to cart')
  } catch (error) {
    console.error("Error adding product to cart: ", error);
    alert('An error occurred while adding the product to your cart.');
  }
};


const checkAlreadyExistsInWishList = () => {

for(let i=0;i<products.length;i++){

  if(products[i].id === id){

    return true;

  }

}


return false;

}



const addToWishList = () =>{

if(checkAlreadyExistsInWishList()){

toast.error(`The item ${name} already exists in the Wishlist`);
return;
}


setProducts([...products,{
id,
img,
name,
price,
gluten_free,
category,
quantity: 1,
}])


toast.success(`The Item ${name} got added to Wishlist`);

}



//Code for the wishlist




  return (

<div className='container min-h-[100vh] space-y-4 md:space-y-0 min-w-[100vw] '>


    <div className='container flex flex-col md:flex-row mx-auto justify-center items-center min-h-[100vh] w-[100vw]'>

        <div className="container min-w-[100vw] h-[130vh] md:h-[100vh] md:min-h-[100vh] lg:min-h-[50vh] place-items-center 
         grid  md:grid-cols-2 gap-0 ">

<div className="left-box md:h-full md:w-2/3 lg:w-1/2">
{/* <img src={rawDatacosmetics[1].img} className='h-full w-full rounded-lg' alt="" /> */}
<img src={img} className='h-full w-full object-contain' alt="" />


</div>

<div className="right-box py-2 space-y-6  md:space-y-4 md:w-1/3 lg:w-1/2">

<h1 className="text-3xl md:text-2xl lg:text-3xl text-center lg:text-black md:text-gray-700 font-bold">{name}</h1>

<div className="details-box w-full md:w-2/3 h-full flex flex-row md:flex-col text-left justify-center items-center space-x-5">

<h3 className="md:text-base lg:text-lg"> <strong>Price:</strong>&nbsp;{price}</h3>


<h3 className="md:text-base lg:text-lg"><strong>Category:</strong>&nbsp;{category}</h3>


<h3 className="md:text-base lg:text-lg"><strong>Gluten Free:</strong>&nbsp;{gluten_free}</h3>

</div>

<p className="text-lg p-5 md:p-0 md:text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente, cupiditate vel aut architecto
     incidunt est obcaecati dolores quia nobis officiis nostrum aperiam! Aliquam nam consequatur est eligendi quibusdam rerum 
     reiciendis, nesciunt architecto, velit quis doloremque quaerat ut.
     Voluptas magnam voluptates perspiciatis nobis tenetur.</p>

     {/* It will be hidden under md: screen size ans visible above md: screen size*/}
<button
    onClick={addToWishList}
      type="button"
      className="text-white md:mx-auto hidden md:block bg-gradient-to-r from-[#FF7F50] to-[#f54627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#FFB6C1] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
    //add an an onclick
    >
      Add to Wishlist
    </button>

</div>

<div className="btn w-full flex justify-center">


{/* It will be hidden on and above md: screen size */}
<button
    onClick={addToWishList}
      type="button"
      className="text-white  md:hidden bg-gradient-to-r from-[#FF7F50] to-[#f54627] hover:bg-gradient-to-br 
      focus:ring-4 focus:outline-none focus:ring-[#FFB6C1] font-medium rounded-lg text-base px-14 py-5 text-center mb-2"
    //add an an onclick
    >
      Add to Wishlist
    </button>

</div>

        </div>




      
    </div>









  

    </div>
  )
}

export default ProductDetails;
