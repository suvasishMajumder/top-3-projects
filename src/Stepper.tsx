import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeContext } from './Contexts/ThemeContext';

const Stepper = () => {


    const location = useLocation()
    const path = location.pathname;
    console.log(path);


    const {theme } = useContext(ThemeContext)

  return (
   
<div className={`max-[100vw] flex justify-center px-12 items-center h-36 ${theme === 'light' ?
 'bg-white text-gray'
  : 'bg-gray-950 text-white '}
 text-white`}>
<ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
    <li className={`flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b
     ${path === '/checkpage2' || path === '/checkpage3' ? 'after:border-blue-700' : 'after:border-gray-400' }
      after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
             viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0
                 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
    </li>


    <li className={`flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1
     after:hidden  ${path === '/checkpage3' ? 'after:border-blue-700 ' : 'after:border-gray-400' }
      sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
       
       {
       
    //    style={{visibility: `${path === '/checkpage2' ? 'visible' : 'hidden'}`}} 

    path !== '/checkpage2' ? (


        path === '/checkpage1' ? 
       ( <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span className="me-2 ">2</span>
            Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
       ) :

       (

        
        <span 
        className="flex items-center after:content-['/'] text-blue-600 sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
             viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0
                 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
        
       )


    ) : (


        
        <span 
        className="flex items-center after:content-['/'] text-blue-600 sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
             viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0
                 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
    )
}
    </li>

{/* 
    <li className="flex items-center">
        <span className="me-2">3</span>
        Confirmation
    </li> */}



{
       
       //    style={{visibility: `${path === '/checkpage2' ? 'visible' : 'hidden'}`}} 
   
       path === '/checkpage3' ? (
        <span 
        className="flex items-center after:content-['/'] text-blue-600 sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
             viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0
                 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
         <span className="hidden sm:inline-flex sm:ms-2">Confirmation</span>
        </span>
        
       ) : (
          


<span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
<span className="me-2 ">3</span>
<span className="hidden sm:inline-flex sm:ms-2">Confirmation</span>
</span>


       )
   }

</ol>

</div>
  )
}

export default Stepper
