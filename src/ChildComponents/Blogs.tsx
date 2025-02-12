
import React from 'react'
import veganData from '../assets/veganData'

const Blogs = () => {
  return (
    <div className='max-w-[100vw] bg-gray-100 min-h-screen'>
      
<div className="header w-full h-64 sm:h-44 mb-12 bg-sky-100 flex flex-col space-y-4 justify-center items-center" role='heading'>

<h1 className="text-black text-7xl  font-bold font-serif">News </h1>

<p className="text-lg font-normal text-center">Compassion for animals is intimately connected to compassion for humans.
   Choosing veganism  <br />  is a powerful statement for a kinder, more just world.
   
   
   
   </p>

</div>

<div className="container place-items-center h-full gap-10 max-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2">

{

veganData.map((elem,index) => (

    <div key={index} className='h-[45rem] bg-gray-200 w-96 sm:w-72 rounded-lg flex flex-col space-y-5 text-center shadow-xl'>
    
    <img src={elem.img} className='w-full h-1/2 object-contain' alt="" />
    <h1 className="text-2xl font-bold">{elem.heading}</h1>
    <p className="text-[0.9rem]">{elem.para}</p>

    <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
    <a href={elem.link} target="_blank" rel="noopener noreferrer">Read Full Article</a>

</button>


    </div>

))


}


</div>


    </div>
  )
}

export default Blogs;
