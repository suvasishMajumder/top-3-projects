/********************* New Component  *******************************/
import React from 'react';
interface PropsType {
    id: number;
    img: string;
    name: string;
    price: number;
    quantity: number;
    gluten_free: boolean;
    category: string;
    cart?: any;
}
declare const _default: React.NamedExoticComponent<PropsType>;
export default _default;
