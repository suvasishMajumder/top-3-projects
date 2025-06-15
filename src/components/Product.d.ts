import React from 'react';
interface PropsType {
    id: number | string;
    img: string;
    name: string;
    price: number;
    gluten_free: boolean;
    category: string;
    FT?: boolean;
    quantity?: number;
}
declare const _default: React.NamedExoticComponent<PropsType>;
export default _default;
