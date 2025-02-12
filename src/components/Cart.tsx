import React, { useState, useEffect, useMemo } from 'react';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';
import { auth } from '../Firebase/Firebase'; // Adjust the import based on your Firebase setup
import CartItem from './CartItem';
import { useAuthHook } from '@/Contexts/AuthContext';
import toast from 'react-hot-toast';
import { onAuthStateChanged } from 'firebase/auth';
import {loadStripe} from '@stripe/stripe-js';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

interface ProductType {
  id: number;
  img: string;
  name: string;
  price: number;
  gluten_free: boolean;
  category: string;
  quantity: number;
  cart:ProductType[];
}

const Cart: React.FC = () => {
  const [cartInfo, setCartInfo] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
 const [counter, setCounter] = useState<number>(0);
 const [isAuthStateLoading, setIsAuthStateLoading] = useState<boolean>(true);
  // const [sum, setSum] = useState<number>(0); // State to store the total price

  const { isSignedIn } = useAuthHook();


  const hanldeCheckoutNext = () =>{

    alert('Move to CheckOut page');

    

  }

const navigate = useNavigate();


  // Function to fetch cart data
  const fetchCartData = () => {
    if (!isSignedIn) {
      // toast.error('Sign In or Sign Up first to see the cart or to add products to cart'); //for debugging
      setLoading(false); // Make sure loading state is updated
      return;
    }

    const user = auth.currentUser;

    if (!user) {
      console.error('User is not authenticated');
      setLoading(false);
      return;
    }

    const userCartRef = doc(getFirestore(), 'cartProducts', user.uid);

    // Real-time listener for cart updates
    const unsubscribe = onSnapshot(userCartRef, (docSnap) => {
      if (docSnap.exists()) {
        const cartData = docSnap.data(); //Retrieves all fields in the document as an Object.


        // Ensure the cartData has a 'products' field and it's an array
        if (cartData?.products && Array.isArray(cartData.products)) {
          setCartInfo(cartData.products);
        } else {
          setCartInfo([]); // Empty cart if no products field or invalid data
        }
      } else {
        setCartInfo([]); // No cart document for the user
      }
      setLoading(false); // Set loading to false once data is fetched
    });

    return () => unsubscribe; // Cleanup listener on component unmount //changes return unsubscribe
  };

  useEffect(() => {
    fetchCartData();
  }, [isSignedIn]); // Re-fetch if 'isSignedIn' changes



  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth,(user)=>{

      if(user){

fetchCartData();


      }else{


setCartInfo([]);
setLoading(false)

      }


      setIsAuthStateLoading(false);


    })


    return () => unsubscribe;

  },[])



  //Option #1
  // Calculate the total price
  // useEffect(() => {
  //   const total = cartInfo.reduce((acc, item) => acc + item.price * item.quantity, 0);
  //   setSum(total);
  // }, [cartInfo]); // Recalculate total whenever cartInfo changes



  //Option #2 (Optimized Way)

  const total = useMemo(()=>{

    return cartInfo.reduce((acc,item) => acc + item.price * item.quantity,0)
    
    },[cartInfo])
    
    

  // Render loading state
  if (loading) {
    return <div className="text-center text-semibold text-blue-700">Loading cart data...</div>;
  }


  if(isAuthStateLoading){
    return <div className="text-center text-semibold text-blue-700">Loading cart data...</div>;


  }

  if(!isSignedIn){

    return <>
    

    <div className="flex flex-col justify-center items-center space-y-6">

    <div className="register font-bold">
<h1 className="text-center">New to Our Online Store ? </h1>
<button onClick={() => navigate('/SignUp')} type="button" className="text-white bg-blue-700 hover:bg-blue-800 
focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register / Signup With Us:</button>
</div>




<div className="login text-center font-bold">
<h1 className="">Existing User ? <h4 className="font-bold" 
></h4> </h1>

<button type="button" onClick={() => navigate('/Login')} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800
  dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Click to Log In</button>

</div>

</div>
    </> 


  }

  // Render empty cart message
  if ( cartInfo.length === 0) {
    return <div className="text-center text-semibold text-red-700">Your cart is empty</div>;
  }

  return (
    <div className="h-auto  text-center flex flex-col justify-between items-center space-y-5 ">
      <h2 className="text-xl font-bold text-green-700 ">Your Cart</h2>

      {/* For debugging */}
      {/* <button type="button" onClick={() => setCounter(counter+1)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-64">Default</button>
<p className="">{counter}</p> */} 



      <div className="flex flex-col items-center space-y-4">
        {cartInfo.map((item, index) => (
          <CartItem
            key={index}
            id={item.id}
            img={item.img}
            gluten_free={item.gluten_free}
            category={item.category}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            cart={cartInfo}
          />
        ))}
      </div>

      {/* Display the total price */}
      <div className="font-bold text-lg ">
        <span className="text-xl">Total: </span>
        <span className="text-green-700">${total.toFixed(2)}</span>
      </div>

      <button
    onClick={hanldeCheckoutNext}
      type="button"
     
      className="mb-16 text-white bg-gradient-to-r from-[#228B22] to-[#32CD32]
       hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#90EE90] font-medium rounded-lg text-lg w-60 mx-auto
       py-3.5 text-center"
    >
     Proceed To Checkout
    </button>

    </div>



  );
};

export default Cart;



/*

1. In the context of the above Cart.tsx component explain --- How docSnapShot() works. 
Does it work in this way
 like if any changes occur in the document , then and event will be listened and handled thereby 

In this component, onSnapshot works as a real-time listener for changes to the user’s cart document.
 Here’s how it functions:

a. Real-Time Listener Setup: The onSnapshot method sets up a listener on the specified document 
(userCartRef), which is the user's cart in Firestore.

b. Automatic Handling of Changes: When any change occurs to the document (such as adding, updating,
 or removing items), onSnapshot automatically triggers, providing an updated docSnap (document snapshot).

c. Updating Component State: If docSnap.exists() is true, it retrieves the latest products data from
 cartData and updates cartInfo using setCartInfo. This causes the component to re-render with the
  latest cart state.

d. Cleaning Up: unsubscribe removes the listener when the component unmounts, preventing memory leaks.
This ensures the cart data in the component stays synchronized with the database in real-time.




2.   useEffect(() => {
    fetchCartData();
  }, [isSignedIn]); 


  Here, the dependency has been kept as isSignedIn because , whenever there is any change in isSignedIn,
  then the  fetchCartData() function will be called. 
  
  
  Let's consider 2 different scenarios. 

  a) If the user sign in (state change from 'not sign in' to 'sign in') , then the data will be fetched
  from the server side.
  
  
  b) If the user signs out , then no data will be shown. If the user signes out , then the fetchCartData()
  will be called the the function will be leaked by the following logic:


    if (!user) {
      console.error('User is not authenticated');
      setLoading(false);
      return;
    }





3. Reduce():



The reduce() method executes a reducer function on each element of the array and returns a single
 output value.

The reduce() method in JavaScript is used to iterate over an array and accumulate a single result
 based on a provided callback function. Here’s how it works in this context:



Breakdown of reduce():

const total = cartInfo.reduce((acc, item) => acc + item.price * item.quantity, 0);


Syntax: reduce(callback, initialValue)
--callback: A function that runs on each item in the array, performing the accumulation.
--initialValue: The starting value for the accumulator (acc), which is 0 here.



How reduce() Works in This Code:
a. Starting with acc = 0: The initialValue is 0, so acc (short for "accumulator") starts at 0.

b. Looping Through cartInfo: For each item in the cartInfo array:
item.price * item.quantity calculates the total price for that item based on its price and quantity.
This product is added to acc, the cumulative total.

c. Result: After going through all items, reduce() returns the final accumulated value, 
which is the total price of all items in the cart.

*/