import React, { useState, useEffect } from 'react';
import './products.css';

export interface Props {
	id: string
}

const ProductComponent =  ({id}: Props) => {

    const [state, setState] = useState({
        image: ''
    });

    useEffect(() => {
        setState({image: `/${id}.svg`});
    }, [id]);

    return (
        <div className="products">
            <h1 className="products-h1">Producto: {id}</h1>
            <img className="products-img" src={state.image} alt="tractor"></img>
        </div>
    );
}

export default ProductComponent;
