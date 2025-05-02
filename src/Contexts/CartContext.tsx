


import { createContext, useContext, useState, useEffect, ReactNode } from "react";




interface ProductType {
    id: number;
    img: string;
    name: string;
    price: number;
    gluten_free: boolean;
    category: string;
    quantity: number;
  }


interface CartContextType{

    cartProducts: ProductType[];

    setCartProducts: React.Dispatch<React.SetStateAction<ProductType[]>>
}


// React.Dispatch<React.SetStateAction<Product[]>>
// it is used to tell React that this function updates
//  a state managed by the useState or useReducer hook.


export const CartContext = createContext<CartContextType>({

    cartProducts:[],
    setCartProducts: () => {} ,



})

export const CartProvider:React.FC<{children:ReactNode}> = ({children}) =>{

const [cartProducts, setCartProducts] = useState<ProductType[]>([]);

// console.log(cartProducts);

return (

<CartContext.Provider value ={{cartProducts, setCartProducts}}>
{children}
</CartContext.Provider>

)


}

