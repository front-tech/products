import React, { useState, useEffect } from 'react';
import { Images, Props } from './model';
import './products.css';

const NAMES: Images = {
	1: 'Tractor 1',
	2: 'Tractor 2',
	3: 'Tractor 3'
};

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
			<h1 className="products-h1">Producto: {NAMES[id]}</h1>
			<img className="products-img" src={state.image} alt={state.alt}></img>
		</div>
	);
};

export default ProductComponent;
