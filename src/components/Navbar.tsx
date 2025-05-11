



//New Code:


import React, { lazy, memo, Suspense, useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import veganImgLogo from '../assets/special_images/vegan_circle_green.webp';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
  
    DropdownMenuSeparator,
} from "../components/ui/dropdown-menu";


import { useAuthHook } from '@/Contexts/AuthContext';
import Logout from './Logout';

// const ThemeToggler = lazy(()=> import('@/resusable_components/ThemeToggler'))
import { ThemeContext } from '@/Contexts/ThemeContext';
import { FaChevronUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown,setShowDropDown] = useState<boolean>(false);


  const handleDropDown = () => {



    setShowDropDown(prev => !prev);

  }



// console.log('Navbar component re-redndered');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const {theme} = useContext(ThemeContext);

  // const {isSignedIn , setIsSignedIn} = useAuthHook();
      const {isSignedIn } = useAuthHook();

 
  const navigate = useNavigate();

  return (
    <>
    <header className={`${theme === 'light' ? 'bg-[#FFE2D7] ' : 'bg-gray-900'}`}>
    <div className='header' role='banner'>
      {/* <nav role='navigation' className="bg-[#EDF6E5]  border-gray-200 dark:bg-gray-900 color-[#228B22]"> */}
      <nav role='navigation' className=" border-gray-200  color-[#228B22]">
        <div className="max-w-[100vw] min-w-[100vw] justify-center flex flex-col items-center sm:flex-row flex-wrap
        space-y-8 sm:space-y-0 sm:space-x-24 md:space-x-3 md:items-center md:justify-between p-4">
          <NavLink to="/" className="flex items-center  md:justify-center lg:justify-start w-[20rem] lg:w-[20rem] 
          md:w-full text-center
            space-x-2 rtl:space-x-reverse">
            <img src={veganImgLogo} className="h-12 " alt="Vegan Bazar Logo" loading='lazy' />
            <span className={`${theme === 'light' ? 'text-black' : 'text-white'} self-center text-2xl
             font-semibold whitespace-nowrap`}>Vegan Bazar</span>
          </NavLink>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm
            text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
            focus:ring-gray-200 
            "
            aria-controls="navbar-default"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isOpen ? 'block' : 'hidden'} text-center w-full md:flex justify-center md:items-center md:w-auto`}
           id="navbar-default">
            <ul className={`font-medium flex text-base flex-col text-center
             md:flex-row md:space-x-4 mt-4 md:mt-0 p-4 md:p-0 border
              rounded-lg mx-auto  md:border-0 bg-zinc-100
               md:bg-white }
                 `}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? "text-blue-700 md:text-blue-700 dark:text-blue-500" : 
                   `text-gray-950`}
                 >Home</NavLink>
              </li>

              <li>
                <NavLink
                  to="/AllProducts"
                  className={({ isActive }) => isActive ? "text-blue-700 md:text-blue-700 dark:text-blue-500" : 
                  'text-gray-950'}
                 >All Products</NavLink>
              </li>

              <li>
                <NavLink
                  to="/Wishlist"
                  className={({ isActive }) => isActive ? "text-blue-700 md:text-blue-700 dark:text-blue-500" :
                 'text-gray-950'}
                 >WishList</NavLink>
              </li>
              <li>
                <NavLink
                  to="/Cart"
                  className={({ isActive }) => isActive ? "text-blue-700 md:text-blue-700 dark:text-blue-500" : 
                  'text-gray-950'}
                 >Cart</NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => isActive ? "text-blue-700 md:text-blue-700 dark:text-blue-500" : 
                'text-gray-950'}
                 >About Us</NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className = { ({ isActive }) => isActive ? "text-blue-700 md:text-blue-700 dark:text-blue-500" : 
            'text-gray-950'}
                 >FAQs</NavLink>
              </li>
            

<li className='text-gray-950'>
  <DropdownMenu aria-haspopup="menu" >
    <DropdownMenuTrigger ><span>More</span></DropdownMenuTrigger>
    <DropdownMenuContent className='hidden md:block'>
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

<div className="sub-nav block w-full text-center md:hidden">
{/* <FaAngleDown className='mx-auto' onClick={handleDropDown} />  */}
{dropdown ? <FaChevronUp className='mx-auto' size={'26'} onClick={handleDropDown} />  :
 <FaAngleDown className='mx-auto' size={'26'}  onClick={handleDropDown} />  }
<ul className={`${dropdown ? 'visible' : 'hidden'} flex flex-col space-y-5`}>

<li ><Link to="/more/ChatAssistant">Talk to Our AI Chat Assitant</Link></li>
<li><Link to="/more/RegisteredMerchant">Become a Registered Merchant</Link></li>
<li><Link to="/more/CustomerSupport">Customer Support</Link></li>
<li><Link to="/more/Blogs">Blogs</Link></li>

</ul>

</div>

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

<Button className={`${theme === 'light' ? 'bg-black text-white' : 'bg-gray-300 text-black hover:bg-gray-400'}`} onClick={() => navigate("/SignUp")}>Sign Up</Button>
  <Button className={`${theme === 'light' ? 'bg-black text-white' : 'bg-gray-300 text-black hover:bg-gray-400'}`} 
   onClick={() => navigate("/Login")}>Log In</Button>

</div>
  

)


}
          </div>
        </div>
      </nav>
    </div>
    </header>
    </>
  );
};

export default memo(Navbar);
