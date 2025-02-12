// /* eslint-disable react-refresh/only-export-components */
// import { data } from "@/assets/rawData";
// import React, { useState } from "react";

// let finalFilData = null;

// const Filter = ({ data }) => {


//     const [val, setVal] = useState(0);
//     const [filData,setFilData] = useState(data);

// const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) =>{

//     setVal(Number(e.target.value));
    
//    setFilData([...data].filter(item => item.price >= val));

//    finalFilData = filData;

// }




//   return (
//     <>
//       <label htmlFor="MaxPrice">Max Price:</label>
//    &nbsp;
//       <input
//       onChange={(e) =>handleFilterChange(e)}
//       className="text-blue-700"
//         type="range"
//         name="filterdata"
//         id="MaxPrice"
//         min={0}
//         max={1000}
//         step={1}
//         value={val}
//       />
//     </>
//   );
// };



// export  {

//     Filter,
// finalFilData
// }



//New Code 

import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { PiCurrencyInrDuotone } from "react-icons/pi";



const Filter = ({ data, setFilteredData }) => {
  const [val, setVal] = useState(1000);

  useEffect(() => {
    // Update filtered data whenever the slider changes
    setFilteredData(data.filter((item) => item.price <= val));
  }, [val, data, setFilteredData]);

  return (
    <>
    <div className="h-16 w-4/5 md:w-2/5 lg:w-1/4 sm:w-2/5 bg-transparent self-start flex flex-col mb-4 text-gray-100 ">
      <label htmlFor="MaxPrice" className="font-bold text-xl">Max Price: &nbsp;<span className="font-normal"><PiCurrencyInrDuotone 
      className="inline" />
      {val}</span></label>
      &nbsp;
      <input
        onChange={(e) => setVal(Number(e.target.value))}
        className="text-[#F5F5F5] cursor-pointer"
        type="range"
        name="filterdata"
        id="MaxPrice"
        min={0}
        max={1000}
        step={1}
        value={val}
      />
      </div>
    </>
  );
};

export default Filter;



/*

Including setFilteredData as a dependency in useEffect is a good practice because React ensures all variables and functions 
used inside the effect are accurately tracked. While setFilteredData typically remains stable, explicitly listing it avoids
 future bugs if its implementation changes or if it's replaced with a dynamic function. This aligns with React’s guidelines, ensuring clear,
 predictable behavior and making your code easier to maintain and debug as the app evolves.
*/