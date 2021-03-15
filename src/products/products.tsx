import React from 'react';
import './products.css';

import image from './porsche.svg';

export interface Props {
	id: string
}

const ProductComponent =  ({id}: Props) => {

    return (
        <div className="products">
            <h1>Producto: {id}</h1>
            <img src={image}></img>
        </div>
    );
}

export default ProductComponent;
