import React, { useState , useEffect , useContext, memo } from 'react'
import { ThemeContext } from './Contexts/ThemeContext';

const Counter = () => {

    const [customerReached, setCustomerReached] = useState<number>(0);
    const [b2b, setB2b] = useState<number>(0);
    const [countries, setCountries] = useState<number>(0);
    const [animals, setAnimals] = useState<number>(0);



    useEffect(()=>{

const timer1 = setInterval(() => {
    

   setCustomerReached((prev) => {

    if(prev >= 150000){

        clearInterval(timer1);
        return prev;
    }

    return prev+1;

   })



}, 0.1);



const timer2 = setInterval(() => {


    setB2b((prev) => {

        if(prev>=120){

            clearInterval(timer2);
            return prev;
        }

        return prev+1;

    })

    
    }, 300);


    
const timer3 = setInterval(() => {

   setCountries((prev) => {

    if(prev>=80){

        clearInterval(timer3);
        return prev;
    }

    return prev+1;

   })
    
    }, 500);


    
const timer4 = setInterval(() => {

   setAnimals((prev) =>{

    if(prev>=12000){

clearInterval(timer4);
return prev;

    }

    return prev+1;

   })
    
    }, 10);




    },[])


    const {theme } = useContext(ThemeContext);

  return (
  <>
  
  <div className={`bg-gradient-to-r ${theme === 'light' ? 
  'text-black from-green-600 via-green-600 to-green-500' : 'text-white from-green-950 via-green-800 to-emerald-700'}
  
   max-w-[100vw] my-5 md:my-20 px-5 md:mx-20 mx-5 rounded-lg h-[60vh] sm:h-[35vh] md:h-[20rem] lg:h-[20rem] 
   lg:space-x-24 xl:h-[30rem] 2xl:h-72 
   text-center xl:space-x-32 2xl:space-x-40 flex flex-col space-y-12 sm:space-y-0 sm:flex-row 
    justify-center items-center`}>

<div className="">  
<h1 className="text-xl md:text-2xl font-bold">Total Customers Served</h1>
<h3 className='text-lg md:text-xl'>{customerReached}+</h3>
</div>




<div className="">  
<h1 className="text-xl md:text-2xl font-bold">Current B2B Partners</h1>
<h3 className='text-lg md:text-xl'>{b2b}+</h3>
</div>




<div className="">  
<h1 className="text-xl md:text-2xl font-bold">Countries Reached </h1>
<h3 className='text-lg md:text-xl'>{countries}+</h3>
</div>



<div className="">  
<h1 className="text-xl md:text-2xl font-bold">Animals Saved</h1>
<h3 className='text-lg md:text-xl'>{animals}+</h3>
</div>

    
  </div>

  </>
  )
}

export default memo(Counter);
