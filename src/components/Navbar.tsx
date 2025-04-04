// import React, { useState } from 'react';
// import veganImgLogo from '../assets/special_images/vegan_circle_green.jpg';
// import { Button } from './ui/button';
// import {
//     DropdownMenu,
//     DropdownMenuTrigger,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//   } from "../components/ui/dropdown-menu";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className=''>
//       <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900">
//         <div className="max-w-[100vw] min-w-[100vw] justify-center flex flex-wrap md:items-center md:justify-between p-4">
//           <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
//             <img src={veganImgLogo} className="h-12" alt="Vegan Bazar Logo" />
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vegan Bazar</span>
//           </a>
//           <button
//             onClick={toggleMenu}
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm
//              text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
//               focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
//                dark:focus:ring-gray-600"
//             aria-controls="navbar-default"
//             aria-expanded={isOpen}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
//             </svg>
//           </button>
//           <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto`} id="navbar-default">
//             <ul className="font-medium flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
//               </li>
//               <li>
//                 <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">WishList</a>
//               </li>
//               {/* <li>
//                 <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart</a>
//               </li> */}
//               <li>
//                 <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart</a>
//               </li>

//               <li>
//                 <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</a>
//               </li>

//               <li>
//           <DropdownMenu >
//   <DropdownMenuTrigger>More</DropdownMenuTrigger>
//   <DropdownMenuContent>
//     <DropdownMenuLabel>Support</DropdownMenuLabel>
//     <DropdownMenuSeparator />
//     <DropdownMenuItem>Vegan Bazar offline Store</DropdownMenuItem>
//     <DropdownMenuItem>Become a registered Merchant with us</DropdownMenuItem>
//     <DropdownMenuItem>Customer Support</DropdownMenuItem>
//     <DropdownMenuItem>Blogs </DropdownMenuItem>
//   </DropdownMenuContent>
// </DropdownMenu>
//        </li>       
            
//             </ul>
            
//           </div>


// <div className="buttons space-x-5">

// <Button>Sign Up</Button>
// <Button>Log In</Button>

// </div>
    

//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;



//New Code:


import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import veganImgLogo from '../assets/special_images/vegan_circle_green.jpg';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "../components/ui/dropdown-menu";


import { useAuthHook } from '@/Contexts/AuthContext';
import Logout from './Logout';





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const {isSignedIn , setIsSignedIn} = useAuthHook();

  const navigate = useNavigate();

  return (
    <header className=''>
    <div className='' role='header'>
      {/* <nav role='navigation' className="bg-[#EDF6E5]  border-gray-200 dark:bg-gray-900 color-[#228B22]"> */}
      <nav role='navigation' className="bg-[#FFE2D7]  border-gray-200 dark:bg-gray-900 color-[#228B22]">
        <div className="max-w-[100vw] min-w-[100vw] justify-center flex flex-col items-center sm:flex-row flex-wrap
        space-y-8 sm:space-y-0 sm:space-x-24 md:space-x-3 md:items-center md:justify-between p-4">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={veganImgLogo} className="h-12" alt="Vegan Bazar Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vegan Bazar</span>
          </NavLink>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm
            text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
            focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
            dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col text-center md:flex-row md:space-x-8 mt-4 md:mt-0 p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? "text-blue-700 md:text-blue-700 dark:text-blue-500" : "text-gray-900 dark:text-white"}
                >Home</NavLink>
              </li>

              <li>
                <NavLink
                  to="/AllProducts"
                  className={({ isActive }) => isActive ? "text-blue-700 md:text-blue-700 dark:text-blue-500" : "text-gray-900 dark:text-white"}
                >All Products</NavLink>
              </li>

              <li>
                <NavLink
                  to="/Wishlist"
                  className={({ isActive }) => isActive ? "text-blue-700 md:text-blue-700 dark:text-blue-500" : "text-gray-900 dark:text-white"}
                >WishList</NavLink>
              </li>
              <li>
                <NavLink
                  to="/Cart"
                  className={({ isActive }) => isActive ? "text-blue-700 md:text-blue-700 dark:text-blue-500" : "text-gray-900 dark:text-white"}
                >Cart</NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => isActive ? "text-blue-700 md:text-blue-700 dark:text-blue-500" : "text-gray-900 dark:text-white"}
                >About Us</NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className={({ isActive }) => isActive ? "text-blue-700 md:text-blue-700 dark:text-blue-500" : "text-gray-900 dark:text-white"}
                >FAQs</NavLink>
              </li>
              {/* <li>

<NavLink>

                <DropdownMenu aria-haspopup="menu">
                  <DropdownMenuTrigger>More</DropdownMenuTrigger>
                  <DropdownMenuContent>
                 
                    <DropdownMenuSeparator />
                    <DropdownMenuItem> <Link to={'/more/VegeanOffline'}>Vegan Bazar offline Store</Link> </DropdownMenuItem>
                    <DropdownMenuItem><Link to={'/more/RegisteredMerchant'}></Link>  Become a registered Merchant with us</DropdownMenuItem>
                    <DropdownMenuItem><Link to={'/more/CustomerSupport'}></Link> Customer Support</DropdownMenuItem>
                    <DropdownMenuItem><Link to={'/more/Blogs'}></Link> Blogs</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                </NavLink>
              </li> */}

<li>
  <DropdownMenu aria-haspopup="menu">
    <DropdownMenuTrigger>More</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Link to="/more/ChatAssistant">Talk to Our AI Chat Assitant</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link to="/more/RegisteredMerchant">Become a Registered Merchant</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link to="/more/CustomerSupport">Customer Support</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link to="/more/Blogs">Blogs</Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</li>


            </ul>
          </div>
          <div className="buttons space-x-5">

{

isSignedIn ? (

  <>
  <Logout />
  </>

) : (

<div className='container flex sm:flex-row space-y-9 sm:space-x-9 md:space-x-4 sm:space-y-0  flex-col '>
<Button onClick={() => navigate("/SignUp")}>Sign Up</Button>
  <Button onClick={() => navigate("/Login")}>Log In</Button>

</div>
  

)


}

          </div>
        </div>
      </nav>
    </div>
    </header>
  );
};

export default Navbar;
