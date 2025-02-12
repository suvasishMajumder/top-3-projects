


import { WishListContext } from '@/Contexts/wishListContext'
import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const WishListItem = ({  id , img, name , price ,gluten_free , category}) => {

const {products, setProducts } = useContext(WishListContext);

const handleDelete = () =>{


    setProducts(products.filter(item => item.id !==id));
    toast.success(`Item ${name} got deleted from the Wishlist successfully`)

}


  return (
    <div className='h-[29rem] rounded-xl shadow-lg cursor-pointer bg-[#007025]   w-60 sm:w-80 flex
    hover:shadow-2xl transition-all justify-center flex-col space-y-3 p-2'>
    <img
      src={img}
      alt={name}
      className="h-[50%] mt-0 rounded-lg shadow-lg object-contain bg-white"
    />
    <h4 className="text-lg text-[#e0ffe8] font-semibold">{name}</h4>
  
    <div className="w-full space-x-10 p-3 flex justify-between items-center">
      <p className="text-sm text-[#e0ffe8]">₹&nbsp;{price}</p>
      {/* <a
        href=""
        onClick={(e) => e.preventDefault()}
        className="text-sm px-6 py-2 bg-[#54b9e0] hover:bg-blue-500 font-semibold text-white underline rounded-md"
      >
        See Details
      </a> */}


{/* Link */}


<Link
        to={`/wishlistitem/${id}`}

        state={{id , img, name , price ,gluten_free , category}}
        className="text-sm px-6 py-2 bg-[#54b9e0] hover:bg-blue-500 font-semibold text-white underline rounded-md"
      >
        See Details
      </Link>

    </div>
  
    <p className="text-sm text-[#e0ffe8]">
      {category.toLocaleLowerCase() === "food" && (
        <span>Gluten Free&nbsp;?&nbsp;:&nbsp;{gluten_free ? "Yes" : "No"}</span>
      )}
    </p>
    <p className="text-sm text-[#e0ffe8]">Product Category:&nbsp;{category}</p>
  
 

<button
    onClick={handleDelete}
      type="button"
      className="text-white bg-gradient-to-r from-[#FF7F50] to-[#f54627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#FFB6C1] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
    //add an an onclick
    >
    Delete From WishList
    </button>

 
  </div>
  )
}

export default WishListItem
