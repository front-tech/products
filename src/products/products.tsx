import React, { useState, useEffect } from 'react';
import { Images, Props } from './model';
import './products.css';

const NAMES: Images = {
	1: process.env.REACT_APP_T1,
	2: process.env.REACT_APP_T2,
	3: process.env.REACT_APP_T3
};

const ProductComponent = ({product}: Props) => {

	const [state, setState] = useState({
		id: '1',
		image: '',
		alt: ''
	});

	useEffect(() => {
		setState(state => {
			const id = product === undefined ? '1' : product;
			return {
				...state,
				id,
				image: require(`./${id}.svg`).default,
				alt: require(`./${id}.svg`).default
			};
		});
	}, [product]);

	const goToProduct = (event: any) => {
		event.preventDefault();
		const url = process.env.REACT_APP_CHECKOUT_URL;
		window.location.href = `${url}?product=${state.id}`;
	};

	return (
		<div className="products">
			<div className="products-container">
				<h1 className="products-h1">Producto: {NAMES[state.id]}</h1>
				<img className="products-img" src={state.image} alt={state.alt}></img>
			</div>
			<div className="products-payment">
				<button onClick={goToProduct}>Comprar tractor</button>
			</div>
		</div>
	);
};

export default ProductComponent;
