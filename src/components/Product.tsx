// import React from 'react';

// interface PropsType {
//   id: number;
//   img: string;
//   name: string;
//   price: number;
//   gluten_free: boolean;
//   category: string;
// }

// const Product: React.FC<PropsType> = ({ id, img, name, price, gluten_free, category }) => {
//   return (
//     <div className="w-[90%]  mx-auto sm:w-full h-auto rounded-md flex flex-col space-y-3 p-4 bg-lime-200">
//       <img src={img} alt={name} className="w-full h-40 rounded-lg shadow-lg object-contain" />
//       <h4 className="text-lg text-black font-semibold">{name}</h4>


//       <div className="w-full space-x-10 p-3 flex justify-between items-center">
//       <p className="text-sm text-gray-800">₹&nbsp;{price}</p>
//       <a href="" onClick={(e) => e.preventDefault()} className="text-sm px-6 py-2 
//        bg-blue-600 hover:bg-blue-700
//        font-semibold text-white underline">See Details</a>
//       </div>
    
//       <p className="text-sm text-gray-600">
//         {category.toLocaleLowerCase() === "food" && <span>Gluten Free&nbsp;?&nbsp;:&nbsp;{gluten_free ? "Yes" : "No"}</span>}
//       </p>
//       <p className="text-sm text-gray-600">Product Category:&nbsp;{category}</p>

//       <button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
//         Add to Wishlist
//       </button>

//       <button type="button" className="mt-3 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default Product;



//New Code


import React, { useContext } from 'react';
import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { auth } from '../Firebase/Firebase'; // Adjust the import based on your Firebase setup
import toast from 'react-hot-toast';
import { WishListContext } from '@/Contexts/wishListContext';
import { Link } from 'react-router-dom';
import { json } from 'stream/consumers';
import { log } from 'console';
import { isArray } from 'util';



interface PropsType {
  id: number;
  img: string;
  name: string;
  price: number;
  gluten_free: boolean; //cartProducts
  category: string;
}

const Product: React.FC<PropsType> = ({ id, img, name, price, gluten_free, category }) => {


  const {products,setProducts} = useContext(WishListContext)


  function checkAlreadyExistsInCart(temp:any,productData:any): boolean {

    const ID = productData.id;

    for(let i = 0;i<temp.length;i++){
    
      if(temp[i].id===ID){
    
        toast.error(`Product already exists in the cart. No need to add it again`);
        return true;
    
      }
    
      
    }
    
    alert(`Inside the checkAlreadyExistINcart function`)
    return false;
    
    }
  
  



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

//Experiment
      
// const temp = async () => await userCartSnap.data();

// console.log(temp);
// console.log(productData);



// for(let i=0;i<temp.length;i++){

//   if(temp[i].id.toString() === productData.id.toString()){

//     toast.error(`The product alreadt exists in the cart`);

//     return ;

//   }

// }







// if(checkAlreadyExistsInCart(temp,productData)){

//   console.warn(`Product already exists in the cart. No need to add it again`)
//   toast.error(`Product already exists in the cart. No need to add it again`);
// return;
// }



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

      // alert('Product added to cart');
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

  return (
    <div className="w-[90%] mx-auto sm:w-full h-auto rounded-md flex flex-col space-y-3 p-4 bg-[#EDF6E5]">
    <img
      src={img}
      alt={name}
      className="w-full h-40 rounded-lg shadow-lg object-contain bg-white"
    />
    <h4 className="text-2xl text-[#175E17] font-semibold">{name}</h4>
  
    <div className="w-full space-x-10 p-3 flex justify-between items-center">
      <p className="text-sm text-[#6C350F]"><b>₹</b>&nbsp;{price}</p>
      {/* <a
        href=""
        onClick={(e) => e.preventDefault()}
        className="text-sm px-6 py-2 bg-[#87CEEB] hover:bg-blue-500 font-semibold text-white underline rounded-md"
      >
        See Details
      </a> */}

{/* Link */}

<Link
       to={`/wishlistitem/${id}`}
        
        state={{  id,  img, name, price, gluten_free , category,}}
     
        className="text-sm px-6 py-2 bg-[#2193C0] hover:bg-blue-500 hover:shadow-xl transition-shadow font-semibold text-white underline hover:no-underline rounded-md"
      >
        See Details
      </Link>

        {/* here ,  When I will click on the See Details link, only then the state will be passed to the ProductDetails component. */}
    </div>
  
    <p className="text-sm text-[#8B4513]">
      {category.toLocaleLowerCase() === "food" && (
        <span className=''><b>Gluten Free</b>&nbsp;?&nbsp;:&nbsp;{gluten_free ? "Yes" : "No"}</span>
      )}
    </p>
    <p className="text-sm text-[#8B4513]"><b>Product Category:</b>&nbsp;{category}</p>
  
    <button
    onClick={addToWishList}
      type="button"
      className="text-white bg-gradient-to-r from-[#FF7F50] to-[#f54627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#FFB6C1] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
    //add an an onclick
    >
      Add to Wishlist
    </button>
  
    <button
      onClick={handleAddToCart}
      type="button"
      className="mt-3 text-white bg-gradient-to-r from-[#228B22] to-[#32CD32] hover:bg-gradient-to-br
      focus:ring-4 focus:outline-none focus:ring-[#90EE90] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
    >
      Add to Cart 
    </button>




  </div>
  
  );
};

export default Product;

/*
1. Description of React:FC<PropTypes> :


React.FC: This stands for React.FunctionComponent. It’s a type definition that helps ensure that the component:

Takes props as an argument.
Will return JSX (or null).

React.FC<PropsType> specifies that Product is a functional component with props of type PropsType.
 React.FC (FunctionComponent) ensures that the component receives props and returns 
 JSX, while <PropsType> provides the type definition for the expected props (id, img, name, price,
  gluten_free, and category). This enforces type safety, ensuring all required props are 
passed with correct data types, and improves code readability and autocompletion support in IDEs.



2. const userCartRef = doc(getFirestore(), 'cartProducts', user.uid); 
// Firestore document reference for user's cart

why this ? why not auth instead of getFirestire(). 


getFirestore() is used here because it specifically provides access to the Firestore database instance,
 which is necessary for interacting with Firestore
 documents (like cartProducts).

auth refers to the Firebase Authentication instance, which manages user authentication and 
related data (e.g., user.uid). It doesn’t handle Firestore-related operations, so you can’t use 
it to access or modify documents.

By calling getFirestore(), you ensure that your doc function targets the Firestore instance, 
enabling access to the database collections and documents where cart data is stored.




3. userCartSnap.exists()


when a user adds a product for the first time only then a new document for his cart is being created
When a user adds a product for the first time, the code checks if a cart document already exists
 for that user by calling userCartSnap.exists():


The userCartSnap.exists() method checks if a document exists in Firestore. Here's how it works
 in the code:

userCartSnap is a snapshot of a Firestore document retrieved by calling await getDoc(userCartRef).

exists() is a method on the snapshot object (userCartSnap) that returns true if the document exists 
in the Firestore collection (e.g., cartProducts).

If the document exists, userCartSnap.exists() returns true, allowing you to update the existing document.
 If it doesn’t, it returns false, so you can create a new document instead.


*/