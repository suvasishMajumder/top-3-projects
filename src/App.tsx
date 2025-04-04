// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import FeaturedProducts from './components/FeaturedProducts'
// import Veganfoodanddrinks from './components/Veganfoodanddrinks'
// import User from './components/User'
// import { RouterProvider } from 'react-router-dom'



// function App() {

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <><Navbar /><Home /></>
//     },
 
//     {
//       path: "/about",
//       element: <><Navbar /><About /></>
//     },
//     {
//       path: "/user/:username",
//       element: <><Navbar /><User /></>
//     },
//   ])


//   const [count, setCount] = useState(0)


//   const serverSideCode = async() =>{


//     alert('This is a function')

//   }

//   return (
//   <>



  
//   <Navbar />
//   <Hero />
//       <FeaturedProducts />
//       <Veganfoodanddrinks />
     
//       <RouterProvider router={router} />

  
//   </>
//   )
// }

// export default App



//New Code:


import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Veganfoodanddrinks from './components/Veganfoodanddrinks';
import About from './components/About';
import User from './components/User';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import VeganCosmetics from './components/VeganCosmetics';
import VeganPetFood from './components/VeganPetFood';
import Footer from './components/Footer';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import SignUp from './components/SignUp';
import { useAuthHook } from './Contexts/AuthContext';
import { ProductsProvider } from './Contexts/ProductsProvider';
import { WishListProvider } from './Contexts/wishListContext';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import WishListItem from './components/WishListItem';
import RegisteredMerchant from './ChildComponents/RegisteredMerchant';
import CustomerSupport from './ChildComponents/CustomerSupport';
import Blogs from './ChildComponents/Blogs';

import ChatAssistant from './ChildComponents/ChatAssistant';
import Error404 from './components/Error404';
import FaQ from './components/FaQ';



function App() {

  const {isSignedIn, setIsSignedIn} = useAuthHook();


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Hero />
          <FeaturedProducts />
          <Veganfoodanddrinks />
          <VeganCosmetics />
          <VeganPetFood />
          <Footer />
        </>
      ),
    },


    
    {
path:"/Login",
element:(

  <Login />

)


    },

    {

path:"/SignUp",
element:(

  <SignUp />

)

    },
  
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar />
          <Cart />
    
        </>
      ),
    },

    {
      path: "/wishlist",
      element: (
        <>
          <Navbar />
          <Wishlist />
   
        </>
      ),
    },

    
    {

path:'/product/:id' ,
element: (
<>

<Navbar />
<ProductDetails />



</>
)

    },


    {

      path:'/wishlistitem/:id' ,
      element: (
      <>
      
      <Navbar />
      <ProductDetails />
      
      </>
      )
      
          },

          {

path:'/cartitem/:id',
element:(
<>
<Navbar />
<ProductDetails />

</>

)

          },
      

    {
      path: "/AllProducts",
      element: (
        <>
          <Navbar />
          <AllProducts />
          <Footer />
      
        </>
      ),
    },
    
    {
      path: "/faq",
      element: (
        <>
          <Navbar />
          <FaQ />
          <Footer />
      
        </>
      ),
    },

    {
      path: "/user/:username",
      element: (
        <>
          <Navbar />
          <User />
        </>
      ),
    },


    {

path:'/more' ,

children:[

  {

    path:'ChatAssistant',
    element: (
      <><Navbar /><ChatAssistant /></>
    )

  },
  {

    path:'RegisteredMerchant',
    element: (
      <>
      <Navbar />
            <RegisteredMerchant />
      </>

    )

  },
  {

    path:'CustomerSupport',
    element: (

<>
<Navbar />
<CustomerSupport />
</>

   
    )

  },
  {

    path:'Blogs',
    element: (
<>
<Navbar />
<Blogs />
</>

    
    )

  }


]

    },


{

  //fallback route

  path:'*',
  element:(
<>
<Navbar />
   <Error404 />


</>

  )

}


  ]);

  return (
    <>
    <div className="bg-[#e0ffe8]">
<WishListProvider>
    <ProductsProvider >
     <RouterProvider router={router} />
    <Toaster />
    </ProductsProvider>
    </WishListProvider>
    </div>
    </>
   
  );
}

export default App;
