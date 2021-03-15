import React, { useState, useEffect } from 'react';
import './products.css';

export interface Props {
	id: string
}

const ProductComponent = ({id}: Props) => {

	const [state, setState] = useState({
		image: '',
		alt: ''
	});

	useEffect(() => {
		setState(state => ({
			...state,
			image: require(`./${id}.svg`).default,
			alt: require(`./${id}.svg`).default
		}));
	}, [id]);

	return (
		<div className="products">
			<h1 className="products-h1">Producto: {id}</h1>
			<img className="products-img" src={state.image} alt={state.alt}></img>
		</div>
	);
};

export default ProductComponent;
