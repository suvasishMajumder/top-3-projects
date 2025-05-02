
import React, { useContext } from 'react'
import veganData from '../assets/veganData'
import { ThemeContext } from '@/Contexts/ThemeContext'

const Blogs = () => {

  const {theme } = useContext(ThemeContext);

  return (
    <>
    <div className={`max-w-[100vw] ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-950'}  min-h-screen`}>
      
<div className={`header w-full h-64 sm:h-44 mb-12 ${theme === 'light' ? ' bg-sky-100' : 'bg-gray-700'} 
flex flex-col space-y-4 justify-center items-center`} role='heading' aria-level={1}>

<h1  className={`${theme === 'light' ? 'text-black' : 'text-white'} text-7xl  font-bold font-serif`}>News </h1>

<p className={`text-lg ${theme === 'light' ?  'text-black' : 'text-white' } font-normal text-center`}>Compassion for animals is intimately connected to compassion for humans.
   Choosing veganism  <br />  is a powerful statement for a kinder, more just world.
   
   
   
   </p>

</div>

<div className="container place-items-center h-full gap-10 max-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2">

{

veganData.map((elem,index) => (

    <div key={index} className={`h-[45rem] ${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'} 
     w-72 sm:w-72 rounded-lg flex flex-col space-y-5 text-center shadow-xl`}>
    
    <img src={elem.img} className='w-full h-1/2 object-contain' alt={elem.heading} loading='lazy' />
    <h1 className="text-2xl font-bold">{elem.heading}</h1>
    <p className="text-[0.9rem] px-2">{elem.para}</p>


    <a className='shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]
     hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 mx-4 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear"' 
    href={elem.link} target="_blank" rel="noopener noreferrer">Read Full Article</a>




    </div>

))


}


</div>






    </div>
  
    </>)
}

export default Blogs;
