import { ReactNode } from "react";
interface Product {
    id: number;
    img: string;
    name: string;
    price: number;
    gluten_free: boolean;
    category: string;
    quantity?: number;
}
interface wishlistcontextType {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
export declare const WishListContext: import("react").Context<wishlistcontextType>;
export declare const WishListProvider: React.FC<{
    children: ReactNode;
}>;
export {};
