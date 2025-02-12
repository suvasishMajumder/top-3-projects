

import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore'; // Import onSnapshot
import { database } from '@/Firebase/Firebase';
import { rawDataFoodandDrinks } from '@/assets/rawData';

interface ProductType {
  id: string;
  img: string;
  category: string;
  price: number;
  name: string;
  gluten_free: boolean;
}

const ProductsContext = createContext<{products: ProductType[];loading: boolean;}>({

  //These are only placeholder values. When the provider fails to wrap , then the fallback value gloablly becomes this
  products: [],
  loading: true,
});

export const ProductsProvider: React.FC = ({ children }) => {

  //This is the actual state which is local to this ProductsProvider function and can update the state dynamically
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);                                                            

  useEffect(() => {
    // Use onSnapshot for real-time updates
    const collectionRef = collection(database, 'shopKart');
    
    // Listen for changes to the 'shopKart' collection
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const productsArray = snapshot.docs.map((doc) => {

        const data = doc.data();
        // const imageData = rawDataFoodandDrinks.find((item) => item.id === doc.id);

        return {
          id: doc.id,
          img: '',
          category: data.category || 'Unknown category',
          gluten_free: data.gluten_free || false,
          name: data.name || 'No Name available',
          price: data.price || 0,
        };
      });

      setProducts(productsArray); // Update products state
      setLoading(false); // Set loading to false after data is received
    });

    // Cleanup the subscription on component unmount
    return () => unsubscribe();

  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductsContext);
};



//NOTES:


/*




1. createContext (Global State Management)


export const productContext = createContext<ContextType>({
  products: [],
  loading: true,
});


Purpose:
This is used to create a global context that allows you to share products and loading values across the entire component tree without prop-drilling. 
It sets a default value (in this case, an empty products array and true for loading).

Initialization:
The default value provided in createContext is just a placeholder. It is not the actual state but serves as the fallback if no Provider is wrapping the component tree. 
When the context is used (useContext(productContext)), it will access the value provided by the nearest Provider.

Usage:

The productContext.Provider must be used to set dynamic values (products and loading) in the state, which is why you need the second part (useState).
The context itself does not manage state or updates; it only provides a way to share and access state.







2. useState (Local State Management in Provider)

Purpose:
This is used to manage the actual state of products and loading dynamically within the ProductContextProvider component.

Why It’s Needed:
Even though the context provides a global way to share data, it doesn’t define how the data changes. useState (or similar state-management logic) is required to:

Store the actual data (products) fetched from the database.
Update the data when it changes (e.g., after fetching new products from Firebase).
Set the loading state dynamically during the asynchronous fetch process.
Scope:
The useState variables are local to the ProductContextProvider component but provide dynamic values to the productContext.Provider.


Why the Second One Is Necessary?

The createContext part only provides a static default value. Without the dynamic state provided by useState, the context would always return the
 default values (products: [] and loading: true) to consumers.

Here’s how they work together:

useState manages and updates the products and loading state dynamically inside the ProductContextProvider.
The productContext.Provider shares this dynamic state ({ products, loading }) with all components wrapped by the provider.


*/






/*



Q:- when to use () in map or when to use {} in map ?

Answer:-

1. Using () for Implicit Return
When you only need to return a value directly without writing additional logic, you can use parentheses () to implicitly return the result.

Example:-

const numbers = [1, 2, 3];

const squares = numbers.map((num) => ({
  value: num,
  square: num * num,
}));

console.log(squares);
// Output: [ { value: 1, square: 1 }, { value: 2, square: 4 }, { value: 3, square: 9 } ]


Key points:

--Use parentheses () when the return value is the only operation in the callback.

--Use this when returning simple objects or values.




2. Using {} for a Block of Code
If the .map() callback contains multiple lines of code or you need to perform additional operations, use curly braces {} and an explicit return statement.


const numbers = [1, 2, 3];
const numbers = [1, 2, 3];

const squares = numbers.map((num) => {
  const square = num * num; // Additional logic
  return { value: num, square };
});

console.log(squares);
// Output: [ { value: 1, square: 1 }, { value: 2, square: 4 }, { value: 3, square: 9 } ]


Key points:
Use curly braces {} when you have more than one statement or additional operations.
Explicitly use return inside {} to specify what should be returned.



*/