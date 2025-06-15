import React, { useEffect, useState } from 'react'
import { FcGenericSortingAsc } from "react-icons/fc";
import { FcGenericSortingDesc } from "react-icons/fc";

const Sort = ({data,setMainProductListFinal}) => {

  const [isDescending, setIsDescending] = useState(true);
  // console.log(data);
  // setMainProductListFinal(data)

  useEffect(()=>{

    const handleSorting = () =>{


      let copy = [...data];// creating a shallow copy of the data

      if(isDescending){

setMainProductListFinal(copy.sort((a,b)=>b.price-a.price));

      }else{

setMainProductListFinal(copy.sort((a,b)=>a.price - b.price));

      }


    }

    handleSorting()


  },[data, setMainProductListFinal,isDescending])

  return (
    <div className='my-8 select-none'>

<span className=' text-gray-100 text-xl '><b>Sort By Price</b>&nbsp;(₹)</span>
<span>
      {

isDescending ? <FcGenericSortingDesc className='text-2xl cursor-pointer' onClick={()=>setIsDescending(false)}/>
: <FcGenericSortingAsc className='text-2xl cursor-pointer' onClick={()=>setIsDescending(true)}/>

      }
      </span>

    </div>
  )
}

export default Sort;
