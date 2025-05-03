import React from 'react';
interface ProductType {
    FT: boolean;
    id: string;
    img: string;
    category: string;
    price: number;
    name: string;
    gluten_free: boolean;
}
interface ProductsProviderProps {
    children: React.ReactNode;
}
export declare const ProductsProvider: React.FC<ProductsProviderProps>;
export declare const useProducts: () => {
    products: ProductType[];
    loading: boolean;
};
export {};
