

import { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const Navbar = lazy(()=>import('./components/Navbar'))
const Hero = lazy(()=>import('./components/Hero'));
const FeaturedProducts = lazy(()=>import('./components/FeaturedProducts')) 
const Veganfoodanddrinks = lazy(()=> import('./components/Veganfoodanddrinks'))
const About = lazy(()=>import('./components/About'))
const User = lazy(()=>import('./components/User'))
const Cart = lazy(()=>import('./components/Cart'))
const Wishlist = lazy(()=>import('./components/Wishlist'))
const VeganCosmetics = lazy(()=>import('./components/VeganCosmetics'));
const VeganPetFood = lazy(()=>import('./components/VeganPetFood'));
const Footer = lazy(()=>import('./components/Footer'))
const Login = lazy(()=>import('./components/Login'))
import { Toaster } from 'react-hot-toast';
const SignUp = lazy(()=>import( './components/SignUp'))
import { useAuthHook } from './Contexts/AuthContext';
import { ProductsProvider } from './Contexts/ProductsProvider';
import { WishListProvider } from './Contexts/wishListContext';
const AllProducts = lazy(()=> import('./components/AllProducts'))
const ProductDetails = lazy(()=>import('./components/ProductDetails'))
const WishListItem = lazy(()=>import('./components/WishListItem'))
const RegisteredMerchant = lazy(()=>import('./ChildComponents/RegisteredMerchant'));
const CustomerSupport = lazy(()=>import('./ChildComponents/CustomerSupport'))
const Blogs = lazy(()=>import('./ChildComponents/Blogs'))
import propTypes from 'prop-types'
const ChatAssistant = lazy(()=>import('./ChildComponents/ChatAssistant'))
const Error404 = lazy(()=>import('./components/Error404'))
const FaQ = lazy(()=>import( './components/FaQ'));
import { ThemeContext } from './Contexts/ThemeContext';
import { SyncLoader } from 'react-spinners';
import ThemeToggleBar from './resusable_components/ThemeToggleBar';
import CheckPage1 from './checkoutPages/CheckPage1';
import CheckPage2 from './checkoutPages/CheckPage2';
import CheckPage3 from './checkoutPages/CheckPage3';
const Counter = lazy(()=>import('./Counter'))


const ErrorBoundary = ({children}) =>{

  const [error , setError] = useState(false);


  useEffect(()=>{


    const handleError = () =>{

setError(true);

    }

window.addEventListener('error',handleError);



return () =>{

  window.removeEventListener('error',handleError)
}


  },[])


return error ? <div className="text-red-600 text-xl text-center">Error{error}</div> : children;


}


ErrorBoundary.propTypes = {

 children:propTypes.node.isRequired,

}


function App() {


  const { theme } = useContext(ThemeContext)

  const {isSignedIn, setIsSignedIn} = useAuthHook();



  const router = createBrowserRouter([
    {
      path: "/",
      element: (
  <ErrorBoundary>
        <Suspense fallback={<div className={`font-normal flex justify-center pt-6 gap-6 ${theme === 'light' ? 'text-black' : 'text-white'}
         text-2xl text-center italic`}>
Loading...
<SyncLoader 
size={15}
color={`${theme === 'light' ? 'black' : 'white'}`}
/>

        </div>}>
           <>
          <Navbar />
          <ThemeToggleBar />
          <Hero />
          <Counter />
          <FeaturedProducts />
          <Veganfoodanddrinks />
          <VeganCosmetics />
          <VeganPetFood />
          <Footer />
         </>
          </Suspense>
          </ErrorBoundary>
      ),
    },


    
    {
path:"/Login",
element:(
<ErrorBoundary>
  <Suspense fallback={<div className='font-bold text-lg text-center italic'>  
    <SyncLoader 
size={15}
color={`${theme === 'light' ? 'black' : 'white'}`}
/>

     </div>}>
  <Login />
  </Suspense>
  </ErrorBoundary>
)


    },

    {

path:"/SignUp",
element:(
<ErrorBoundary>
<Suspense fallback={<div className='font-bold text-lg text-center italic'>

  <SyncLoader 
size={15}
className='pt-6'
color={`${theme === 'light' ? 'black' : 'white'}`}
/>
</div>}>
<>
  <SignUp />
  </>
</Suspense>
</ErrorBoundary>
)

    },
  
    {
      path: "/about",
      element: (
        <ErrorBoundary>
<Suspense fallback={<div className='font-bold text-lg text-center italic'>
  <SyncLoader 
size={15}
className='pt-6'
color={`${theme === 'light' ? 'black' : 'white'}`}
/>

</div>}>
 <>
          <Navbar />
          <ThemeToggleBar />
          <About />
          <Footer />
          </>
        </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: "/cart",
      element: (
        <ErrorBoundary>
<Suspense fallback={<div className='font-bold text-lg text-center italic'>
  <SyncLoader 
size={15}
className='pt-6'
color={`${theme === 'light' ? 'black' : 'white'}`}
/>
</div>}>
   
          <>
          <Navbar />
          <ThemeToggleBar />
          <Cart />
    
        </>
        </Suspense>
        </ErrorBoundary>
      ),
    },

    {
      path: "/wishlist",
      element: (
        <ErrorBoundary>
<Suspense fallback={<div className='font-bold text-lg text-center italic'>
  <SyncLoader 
size={15}
className='pt-6'
color={`${theme === 'light' ? 'black' : 'white'}`}
/>

</div>}>
<>
          <Navbar />
          <ThemeToggleBar />
          <Wishlist />
   
        </>
        </Suspense>
        </ErrorBoundary>
      ),
    },

    
    {

path:'/product/:id' ,
element: (
  <ErrorBoundary>
<Suspense fallback={<div className='font-bold text-lg text-center italic'>
  <SyncLoader 
size={15}
className='pt-6'
color={`${theme === 'light' ? 'black' : 'white'}`}
/>

</div>}>
<>
<Navbar />
<ThemeToggleBar />
<ProductDetails />
</>
</Suspense>
</ErrorBoundary>
)

    },


    {

      path:'/wishlistitem/:id' ,
      element: (
        <ErrorBoundary>
<Suspense fallback={<div className='font-bold text-lg text-center italic'>
  <SyncLoader 
size={15}
className='pt-6'
color={`${theme === 'light' ? 'black' : 'white'}`}
/>

</div>}>

      <>
      <Navbar />
      <ThemeToggleBar />
      <ProductDetails />
      
      </>
      </Suspense>
      </ErrorBoundary>
      )
      
          },

          {

path:'/cartitem/:id',
element:(
  <ErrorBoundary>
<Suspense fallback={<div className='font-bold text-lg text-center italic'>
  <SyncLoader 
size={15}
className='pt-6'
color={`${theme === 'light' ? 'black' : 'white'}`}
/>

</div>}>
<>
<Navbar />
<ThemeToggleBar />
<ProductDetails />

</>
</Suspense>
</ErrorBoundary>

)

          },
      

    {
      path: "/AllProducts",
      element: (
        <ErrorBoundary>
<Suspense fallback={<div className='font-bold text-lg text-center italic'>

  <SyncLoader 
size={15}
className='pt-6'
color={`${theme === 'light' ? 'black' : 'white'}`}
/>

</div>}>
      <>
          <Navbar />
          <ThemeToggleBar />
          <AllProducts />
          <Footer />
      
        </>
        </Suspense>
        </ErrorBoundary>
      ),
    },
    
    {
      path: "/faq",
      element: (
        <ErrorBoundary>
<Suspense fallback={<div className='font-bold text-lg text-center italic'>

  <SyncLoader 
size={15}
className='pt-6'
color={`${theme === 'light' ? 'black' : 'white'}`}
/>

</div>}>
     <>
          <Navbar />
          <ThemeToggleBar />
          <FaQ />
          <Footer />
        </>
        </Suspense>
        </ErrorBoundary>
      ),
    },

    {
      path: "/user/:username",
      element: (
        <ErrorBoundary>
<Suspense fallback={<div className='font-bold text-lg text-center italic'>

  <SyncLoader 
size={15}
className='pt-6'
color={`${theme === 'light' ? 'black' : 'white'}`}
/>

</div>}>
  <>
          <Navbar />
          <ThemeToggleBar />
          <User />
        </>
        </Suspense>
        </ErrorBoundary>
      ),
    },

    {

      path:'/checkpage1',
      element: (
        <ErrorBoundary>
    <Suspense fallback={<div className='font-bold text-lg text-center italic'>
      <SyncLoader 
    size={15}
    className='pt-6'
    color={`${theme === 'light' ? 'black' : 'white'}`}
    />
    
    </div>}>
    <>
    <Navbar />
    <ThemeToggleBar />
    <CheckPage1 />
    </>
    </Suspense>
    </ErrorBoundary>
      
      )
    
    },

    {

      path:'/checkpage2',
      element: (
        <ErrorBoundary>
    <Suspense fallback={<div className='font-bold text-lg text-center italic'>
      <SyncLoader 
    size={15}
    className='pt-6'
    color={`${theme === 'light' ? 'black' : 'white'}`}
    />
    
    </div>}>
    <>
    <Navbar />
    <ThemeToggleBar />
    <CheckPage2 />
    </>
    </Suspense>
    </ErrorBoundary>
      
      )
    
    },

    {

      path:'/checkpage3',
      element: (
        <ErrorBoundary>
    <Suspense fallback={<div className='font-bold text-lg text-center italic'>
      <SyncLoader 
    size={15}
    className='pt-6'
    color={`${theme === 'light' ? 'black' : 'white'}`}
    />
    
    </div>}>
    <>
    <Navbar />
    <ThemeToggleBar />
    <CheckPage3 />
    </>
    </Suspense>
    </ErrorBoundary>
      
      )
    
    },


    {

path:'/more' ,

children:[

  {

    path:'ChatAssistant',
    element: (
      <ErrorBoundary>
<Suspense fallback={<div className='font-bold text-lg text-center italic'>

  <SyncLoader 
size={15}
className='pt-6'
color={`${theme === 'light' ? 'black' : 'white'}`}
/>

</div>}>
      <><Navbar /> <ThemeToggleBar /><ChatAssistant /></>
      </Suspense>
      </ErrorBoundary>
    )

  },
  {

    path:'RegisteredMerchant',
    element: (
      <ErrorBoundary>
<Suspense fallback={<div className='font-bold text-lg text-center italic'>
  <SyncLoader 
size={15}
className='pt-6'
color={`${theme === 'light' ? 'black' : 'white'}`}
/>

</div>}>
<>
      <Navbar /> <ThemeToggleBar />
            <RegisteredMerchant />
      </>
</Suspense>
</ErrorBoundary>
    )

  },
  {

    path:'CustomerSupport',
    element: (
<ErrorBoundary>
  <Suspense fallback={<div className='font-bold text-lg text-center italic'>
    <SyncLoader 
size={15}
className='pt-6'
color={`${theme === 'light' ? 'black' : 'white'}`}
/>

  </div>}>
<>
<Navbar />
<ThemeToggleBar />
<CustomerSupport />
</>
</Suspense>
</ErrorBoundary>

   
    )

  },
  {

    path:'Blogs',
    element: (
      <ErrorBoundary>
  <Suspense fallback={<div className='font-bold text-lg text-center italic'>
    <SyncLoader 
size={15}
className='pt-6'
color={`${theme === 'light' ? 'black' : 'white'}`}
/>

  </div>}>
<>
<Navbar />
<ThemeToggleBar />
<Blogs />
</>
</Suspense>
</ErrorBoundary>
    
    )

  }
,





]

    },


{

  //fallback route

  path:'*',
  element:(
    <ErrorBoundary>
  <Suspense fallback={<div className={`font-bold text-lg ${theme === 'light' ? 'text-black' : 'text-white'} text-center italic`}>Loading....</div>}>

  <>
<Navbar />
<ThemeToggleBar />
   <Error404 />
   </>
</Suspense>
</ErrorBoundary>



  )

}


  ]);


  return (
    <>
    <div 
    className={`min-h-[20vh] ${theme === 'light' ? 'bg-[#e0ffe8]' : 'bg-gray-950'}`}
    >
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
