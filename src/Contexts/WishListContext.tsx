


import { createContext, useState, useEffect, ReactNode } from "react";
import { auth } from "../Firebase/Firebase"; // Adjust the import based on your project structure




// Define the Product interface
interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
  gluten_free: boolean;
  category: string;
}


interface wishlistcontextType{

products:Product[],
setProducts:React.Dispatch<React.SetStateAction<Product[]>>

}



export const WishListContext = createContext<wishlistcontextType>({

products:[],
setProducts:() =>{},


})


export const WishListProvider:React.FC<{ children: ReactNode }> = ({children}) =>{
    

const [products,setProducts] = useState<Product[]>(() =>{


    //Note:

/*
the callback function inside useState will only run once when the component first mounts. It initializes 
the state by checking localStorage for any existing data and parsing it, or using an empty array if no data is found. 
This function is only executed during the initial render to set the initial state value.
*/


    const storedlist = localStorage.getItem("wishlist"); //from let to const. I will revert if any issue arises from here.
    
    return storedlist ? JSON.parse(storedlist) : [];

}



                                                                      
);


useEffect(()=>{


    localStorage.setItem('wishlist',JSON.stringify(products));


},[products])

return (

    <WishListContext.Provider value={{products,setProducts}}>
    {children}
  </WishListContext.Provider>


)


}







/*



1. Initializing products State with localStorage

const [products, setProducts] = useState<Product[]>(() => {
  const storedWishlist = localStorage.getItem("wishlist");
  return storedWishlist ? JSON.parse(storedWishlist) : [];
});


Purpose:
This code ensures that the initial state of products is populated with data from localStorage. If no data exists in localStorage, it initializes products with an empty array.


How It Works:
   a) Lazy Initialization:

The function inside useState runs only once during the component's initial render.
It checks if localStorage contains a key named "wishlist".
If found, it parses the JSON string stored under "wishlist" and uses it as the initial value for products.
If not found, products is initialized as an empty array ([]).




   b) Key Benefit:

Prevents overwriting or losing the user's existing wishlist data stored in localStorage.
Allows the AuthProvider to start with the latest saved data, keeping the state persistent across page reloads.





2. Syncing products State with localStorage

useEffect(() => {
  localStorage.setItem("wishlist", JSON.stringify(products));
}, [products]);


Purpose:
This code ensures that any changes to the products state are immediately reflected in localStorage, maintaining a consistent and up-to-date wishlist across sessions.


How It Works:
Triggered by useEffect:

The useEffect hook runs whenever the products state changes, as specified by the dependency array [products].
Update localStorage:

Converts the updated products array to a JSON string using JSON.stringify.
Saves the string in localStorage under the "wishlist" key.
Key Benefit:

Ensures that the user's wishlist is preserved even if they refresh the page or close the browser.
Keeps localStorage synchronized with the latest state of products.

*/