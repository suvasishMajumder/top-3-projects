

// import { createContext, useContext, useState, useEffect } from "react";
// import { auth } from "../Firebase/Firebase"; // Adjust the import based on your project structure

// // Define the Product interface
// interface Product {
//   id: number;
//   img: string;
//   name: string;
//   price: number;
//   gluten_free: boolean;
//   category: string;
// }

// // Define the type for your context value
// interface WishListContextType {
//   products: Product[];  // An array of products in the wishlist
//   setWishList: React.Dispatch<React.SetStateAction<Product[]>>; // Function to update the wishlist
// }

// //A function that can be used to update the state of a useState or useReducer hook.



// // Create the context with a default value (empty products array and a noop function for setWishList)
// export const WishListContext = createContext<WishListContextType>({
//   products: [],
//   setWishList: () => {}, // empty function to satisfy the type initially
// });

// // Custom hook to use the WishListContext
// export const useWishListContext = () => useContext(WishListContext);  // Correct the usage of useContext

// // Create a provider to wrap your app and manage the wishlist state
// export const WishProvider = ({ children }: { children: React.ReactNode }) => {
//   const [products, setWishList] = useState<Product[]>([]); // Initialize state for products

//   // Here, you can use useEffect or any other logic to fetch or persist the wishlist if needed

//   return (
//     <WishListContext.Provider value={{ products, setWishList }}>
//       {children}
//     </WishListContext.Provider>
//   );
// };
