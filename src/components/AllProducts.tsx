


import React, { useContext, useEffect, useMemo, useState , lazy, Suspense } from 'react'
const Product = lazy(()=> import('./Product'))
import { useProducts } from '@/Contexts/ProductsProvider';
const Filter = lazy(()=>import('./Filter'))
import { MdOutlineSettingsVoice } from "react-icons/md";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FaRegStopCircle } from "react-icons/fa";
import { RiResetLeftLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from '@/Contexts/ThemeContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';



const AllProducts = () => {

const {products, loading} = useProducts();
const {theme } = useContext(ThemeContext)

// console.log(products) //For debugging






const { transcript, browserSupportsSpeechRecognition , resetTranscript } = useSpeechRecognition();
const startListening = () => SpeechRecognition.startListening({ continuous: true , language:'en-In'});

const abortlisteneing = () => SpeechRecognition.abortListening();

const [category, setCategory] = useState<string>('');
const [filteredData,setFilteredData] = useState(products);
const [searchProduct, filterredSearchedProduct] = useState('');
const [voiceSearchedProduct, filteredvoiceSearchedProduct] = useState(transcript);
const [finalProductList, setFinalProductList] = useState(filteredData);
const [mainProductList, setMainProductList] = useState(finalProductList);


const newList = useMemo(()=>{

const result = category?.length === 0 ? finalProductList : 
finalProductList.filter((item) => item.category === category);

setMainProductList(result);

},[category,finalProductList])


//State variables for handling the toggling of search functions
 
const [isTextSearchVisible, setIsTextSearchVisible] = useState(true);
const [isVoiceSearchVisible, setIsVoiceSearchVisible] = useState(false);


const handleChange = (event) =>{

  let data = event.target.value;
  let newData = data.toLowerCase();

  // filterredSearchedProduct(event.target.value);

  filterredSearchedProduct(newData)
  
}


useEffect(()=>{

  setFinalProductList(filteredData.filter(item => item.name.toLowerCase().includes(searchProduct)));

},[searchProduct,filteredData, resetTranscript]);




const handleVoiceSearch = () => {
  // Perform the search using the current voiceSearchedProduct value

// console.log(typeof voiceSearchedProduct) // For debugging
  setFinalProductList(
    filteredData.filter((item) =>
      item.name.toLowerCase().includes(voiceSearchedProduct.toLowerCase())
    )
  );

  // console.log("Voice Search Input:", voiceSearchedProduct); // For debugging
  // console.log("Filtered Results:", finalProductList);  // For debugging

};

// Synchronize transcript with voiceSearchedProduct state
useEffect(() => {
  filteredvoiceSearchedProduct(transcript.toLowerCase());
}, [transcript]);


const clearFilter = () =>{

  setCategory('');

}


if(loading){

  return <div className="text-red-700 text-center text-3xl italic">

<div role="status">
    <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>

  </div>

}

  return (


    <>
    

<div className={`container ${theme === 'light' ? 'bg-[#007025]' : 'bg-gray-800'}  min-w-[100vw] pb-32 `}>

    {/* Text Product Search */}
<div className={` textSearch ${isTextSearchVisible ? 'block' : 'hidden'}  w-[100vw] overflow-x-hidden h-24 bg-sky-400  flex justify-center items-center `}>

<input type="text" className="w-4/6 sm:3/6 md:w-2/6 h-3/5 md:h-2/5 rounded-md p-3" placeholder='Enter Product Name...' 
value={searchProduct} onChange={handleChange} />

</div>



{/* Voice search Div */}
<div className={`voice-search w-[100vw] overflow-x-hidden h-48 sm:h-24 bg-green-200 ${isVoiceSearchVisible 
  ? 'block' : 'hidden'
}  flex sm:flex-row flex-col sm:justify-between md:justify-evenly items-center`}
>

<input type="text"  value={transcript} className='md:p-1 lg:p-3 h-2/5 w-5/6 sm:w-2/6 rounded-md shadow-xl'
 placeholder='Enter your Speech for Voice Search....'  />



<div className="container justify-center space-x-3 md:space-x-8 p-3 flex w-5/6 md:w-2/6">
<div className="start-recording flex justify-center text-center items-center flex-col space-y-2">
<MdOutlineSettingsVoice onClick={startListening} className='h-8 w-12 text-center text-teal-900 
active:text-orange-500 hover:text-lime-500 transition-all cursor-pointer' />
<h4 className="text-[0.65rem] md:text-xs text-wrap font-bold text-teal-900" >Start Voice Searching</h4>
</div>


<div className="start-recording flex justify-center text-center items-center flex-col space-y-2">
<FaRegStopCircle onClick={abortlisteneing} className='h-8 w-12 text-center text-red-700 
active:text-orange-500 hover:text-red-500 transition-all cursor-pointer' />
<h4 className="text-[0.65rem] md:text-xs font-bold text-red-700" >Stop Voice Searching</h4>
</div>


<div className="start-recording flex justify-center text-center items-center flex-col space-y-2">
<RiResetLeftLine onClick={resetTranscript} className='h-8 w-12 text-center text-red-700 
active:text-orange-500 hover:text-red-500 transition-all cursor-pointer' />
<h4 className="text-[0.65rem] md:text-xs font-bold text-red-700" >Clear | Reset</h4>
</div>


<div className="start-recording flex justify-center text-center items-center flex-col space-y-2">
<FaSearch onClick={handleVoiceSearch} className='h-8 w-12 text-center text-red-700 
active:text-orange-500 hover:text-red-500 transition-all cursor-pointer' />
<h4 className="text-[0.65rem] md:text-xs font-bold text-red-700" >Search Product</h4>
</div>
</div>

</div>

{/* <button type="button" onClick={resetTranscript}  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Erase Text</button> */}


<label className="inline-flex items-center cursor-pointer">
  <input 
    type="checkbox" 
    value="" 
    className="sr-only peer" 
    onClick={() => {
    
      setIsTextSearchVisible(prev => !prev);
      setIsVoiceSearchVisible(prev => !prev);

    }}
  />
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
   dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
   rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]
    after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
    after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className={`ms-3 text-sm font-medium ${theme==='light' ? 'text-gray-900' : 'text-white'} dark:text-gray-300`}>{isTextSearchVisible ?
   "Switch to Voice Search" : "Switch To Text Search"}</span>
</label><br /><br /><br /><br /><br />



<div className={`text-2xl text-center h-[10rem] ${theme === 'light' ? 'bg-gradient-to-bl text-black font-bold from-[#84cc16] via-[#16a34a] to-[#0f766e]'
   : 'bg-gradient-to-r text-white from-[#0f172a]  to-[#334155]'} `}>

<form action="" className="mb-10">

<label htmlFor="Select a Category" className='text-lg font-bold'>Select a Category</label>
<select name="category" className={`text-sm ml-10 p-2 text-black border-[2px] border-black font-semibold`}
value={category}
onChange={(e)=>setCategory(e.target.value)} id="category">
  <option value="" selected disabled hidden></option>
<option value="Food">Food</option>
<option value="petFood">Pet Food</option>
<option value="Cosmetics">Cosmetics</option>

</select>


</form>
{/* 
<button className='px-3 py-1.5 rounded-xl ml-10 bg-green-900
 text-white font-base' role='buttton' onClick={clearFilter}>Clear Filter</button> */}

<button type="button" onClick={clearFilter} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4
 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600
  dark:hover:bg-blue-700 dark:focus:ring-blue-800">Clear Filter</button>


</div>



<Suspense fallback={<div className='italic text-center font-bold text-lg'>Loading...</div>}>
    <Filter data={products} setFilteredData={setFilteredData}  />
    </Suspense>

    <div className='w-[100vw] hidden sm:grid md:grid-cols-2 xl:grid-cols-4 gap-5 px-5 '>


      
{

mainProductList.length === 0 ? (<div className="text-red-600 text-xl text-center w-[100vw]">No Products Found with such criteria....</div>) :

mainProductList.map((item,index) =>(

<Product key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} gluten_free={item.gluten_free} 
category={item.category} />

    ))
}



    </div>

    <Carousel className="w-full sm:hidden block mx-auto max-w-xs">
      <CarouselContent>
        {mainProductList.map((item,index) => {

return (

          <CarouselItem key={index}>
           
           <Product key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} gluten_free={item.gluten_free} 
category={item.category} />


          </CarouselItem>
       ) })}
      </CarouselContent>
      <CarouselPrevious className={`${mainProductList.length === 0 ? 'hidden' : ''}`} />
      <CarouselNext className={`${mainProductList.length === 0 ? 'hidden' : ''}`} />
    </Carousel>
    

    </div>
    </>
  )
}

export default AllProducts;
