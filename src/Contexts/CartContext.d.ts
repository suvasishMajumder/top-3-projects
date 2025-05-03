import { ReactNode } from "react";
interface ProductType {
    id: number;
    img: string;
    name: string;
    price: number;
    gluten_free: boolean;
    category: string;
    quantity: number;
}
interface CartContextType {
    cartProducts: ProductType[];
    setCartProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
}
export declare const CartContext: import("react").Context<CartContextType>;
export declare const CartProvider: React.FC<{
    children: ReactNode;
}>;
export {};
