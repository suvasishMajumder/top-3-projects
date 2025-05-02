


import { CartContext } from '@/Contexts/CartContext';
import { ThemeContext } from '@/Contexts/ThemeContext';
import { WishListContext } from '@/Contexts/WishListContext';
import { auth } from '@/Firebase/Firebase';
import { arrayUnion, doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';

import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useLocation } from 'react-router-dom';

interface CartProductType {
  id: number;
  img: string;
  name: string;
  price: number;
  gluten_free: boolean;
  category: string;
  quantity: number;
}



const ProductDetails = () => {

  
const {cartProducts, setCartProducts} = useContext(CartContext);
 
const location = useLocation();

const product = location.state ;


const {  id ,  img, name, price, gluten_free, category } = product;


const {theme} = useContext(ThemeContext)

const {products , setProducts}  = useContext(WishListContext);

const checkAlreadyExistsInWishList = () => {
  // const products = []; // Define or fetch the products array here
  
  for(let i=0;i<products.length;i++){
  
    if(products[i].id === id){
  
      return true;
  
    }
  
  }
  
  
  return false;
  
  }


console.log(cartProducts)
  
  function checkAlreadyExistsInCart(): boolean {

    const result = cartProducts.find((item)=> item.id === id);
    console.log(result);

    
  
  if(result){
  
    toast.error(`The product named ${name} already exists in the Cart`);
  
    return false;
  
  }else{
  
  return true;
  
  }
  
  
      
      }
    

  

const [ExistsInWishList , setExistsInWishList] = useState<boolean>(()=> {


const result:boolean = checkAlreadyExistsInWishList();

 return result;

});






const handleAddToCart = async () => {


  const user = auth.currentUser;

  if (!user) {
    // If the user is not authenticated, show an error or prompt to login
    toast.error("Please log in to add items to your cart.");
    return;
  }

  try {
    const userCartRef = doc(getFirestore(), 'cartProducts', user.uid); // Firestore document reference for user's cart
    const userCartSnap = await getDoc(userCartRef);

    console.log(userCartSnap);

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


    if(!checkAlreadyExistsInCart()){

      toast.error(`The product named ${name} already exists in the Cart`);
      return;

    }
    

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

const result: CartProductType[] = [...cartProducts, productData];

setCartProducts(result);


    toast.success('Product added to cart');
   

  } catch (error) {
    toast.error("Error adding product to cart: ");
    toast.error('An error occurred while adding the product to your cart.');
  }
};






const addToWishList = () =>{

if(checkAlreadyExistsInWishList()){

toast.error(`The item ${name} already exists in the Wishlist`);
return;
}
else{

// setProducts([...products , {
// id,
// img,
// name,
// price,
// gluten_free,
// category,
// quantity: 1,
// }])



setProducts([...products , product])

setExistsInWishList(true);

toast.success(`The Item ${name} got added to Wishlist`);
}

}



//Code for the wishlist

const removeFromWishList = () =>{

  setProducts(products.filter((item) => item.id !== id));

  setExistsInWishList(false);

  toast.success(`Product named ${name} got deleted from the Wishlist Successfully`)

}


console.log(cartProducts);

const isInCart = cartProducts.find((item) => item.id === id);
console.log(isInCart);


  return (
<>
<div className='container min-h-[100vh] space-y-4 md:space-y-0 min-w-[100vw] '>


    <div className='container flex flex-col md:flex-row mx-auto justify-center items-center min-h-[100vh] w-[100vw]'>


        <div className="container  min-w-[100vw] h-[170vh] md:h-[220vh] lg:h-[150vh]  place-items-center 
         grid  md:grid-cols-1 lg:grid-cols-2 gap-0 ">

<div className="left-box md:h-full md:w-full md:mt-14 lg:mt-0 lg:w-1/2">
{/* <img src={rawDatacosmetics[1].img} className='h-full w-full rounded-lg' alt="" /> */}
<img src={img} className='md:w-2/3 md:h-2/3 mx-auto lg:h-full lg:w-full object-contain' alt="" loading='lazy' />


</div>

<div className="right-box py-2 space-y-6  md:space-y-4 md:w-full lg:w-1/2">

<h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-4xl lg:text-start text-center ${theme === 'light' ? 'text-black' : 'text-white' }
 font-bold`}>{name}</h1>

<div className={`details-box ${theme === 'light' ? 'text-black' : 'text-white'}
 w-full md:w-full h-full flex flex-col sm:flex-row md:flex-col lg:flex-row text-center
 lg:text-left justify-center lg:justify-start space-x-5`}>

<h3 className="md:text-xl lg:text-lg"><strong>Price:</strong>&nbsp;{price}</h3>

<h3 className="md:text-xl lg:text-lg"><strong>Category:</strong>&nbsp;{category}</h3>

<h3 className="md:text-xl lg:text-lg"><strong>Gluten Free:</strong>&nbsp;{gluten_free ? 'Yes' : 'No'}</h3>

</div>

<p className={`text-xl text-center lg:text-left ${theme === 'light' ? 'text-black' : 'text-white'} p-12 lg:p-3  md:text-lg`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente, cupiditate vel aut architecto
     incidunt est obcaecati dolores quia nobis officiis nostrum aperiam! Aliquam nam consequatur est eligendi quibusdam rerum 
     reiciendis, nesciunt architecto, velit quis doloremque quaerat ut.
     Voluptas magnam voluptates perspiciatis nobis tenetur.</p>

     {/* It will be hidden under md: screen size ans visible above md: screen size*/}


<div className="btn w-full flex justify-center">


{/* It will be hidden on and above md: screen size */}

{!ExistsInWishList ? (
  <div className='flex flex-col items-center space-y-10 xl:space-y-0 xl:flex-row xl:space-x-2'>
  <button
    onClick={addToWishList}
      type="button"
      className="text-white  lg:hidden bg-gradient-to-r from-[#FF7F50] to-[#f54627] hover:bg-gradient-to-br 
      focus:ring-4 focus:outline-none focus:ring-[#FFB6C1] font-medium rounded-lg text-base px-14 py-5 text-center mb-2"
    //add an an onclick
    >
      Add to Wishlist
    </button>
    

    <button
    onClick={addToWishList}
      type="button"
      className="text-white md:mx-auto hidden lg:block bg-gradient-to-r
       from-[#FF7F50] to-[#f54627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none
        focus:ring-[#FFB6C1] font-medium rounded-lg text-sm h-16 w-48 text-center mb-2"
    //add an an onclick
    >
      Add to Wishlist
    </button>

    <button
      onClick={handleAddToCart}
      type="button"
      className="text-white block  bg-gradient-to-r from-[#76fe7f] to-[#3bcb10] hover:bg-gradient-to-br 
  focus:ring-4 focus:outline-none focus:ring-[#fef3ca] font-medium rounded-lg text-sm   h-16 w-48 text-center mb-2"
    >
      Add to Cart 
    </button>

  </div>
  ) : (

    <div className='flex flex-col space-y-10 xl:space-y-0 xl:flex-row xl:space-x-2'>
      <button
  onClick={removeFromWishList}
  type="button"
  className="text-white  bg-gradient-to-r from-[#f43f5e] to-[#be123c] hover:bg-gradient-to-br 
  focus:ring-4 focus:outline-none focus:ring-[#fecaca] font-medium rounded-lg text-sm h-16 w-48 text-center mb-2"
>
  Remove from Wishlist
</button>




<button
onClick={handleAddToCart}
type="button"
className="text-white block bg-gradient-to-r from-[#76fe7f] to-[#3bcb10] hover:bg-gradient-to-br 
focus:ring-4 focus:outline-none focus:ring-[#fef3ca] font-medium rounded-lg text-base h-16 w-48 text-center mb-2"
>
Add to Cart 
</button>


</div>

    ) }





</div>




        </div>




      
    </div>









  

    </div>




    </div>
    </>

  )
}

export default ProductDetails;
function setProducts(arg0: any[]) {
  throw new Error('Function not implemented.');
}

