import { navigateToUrl } from 'single-spa';
import React, { useState, useEffect } from 'react';
import { Images, Props } from './model';
import './products.css';

import t1 from './1.svg';
import t2 from './2.svg';
import t3 from './3.svg';

const IMAGES: Images = {
	1: {
		name: process.env.REACT_APP_T1,
		file: t1
	},
	2: {
		name: process.env.REACT_APP_T2,
		file: t2
	},
	3: {
		name: process.env.REACT_APP_T3,
		file: t3
	}
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
				image: IMAGES[id].file,
				alt: IMAGES[id].name
			};
		});
	}, [product]);

	const goToProduct = (event: any) => {
		event.preventDefault();
		const url = process.env.REACT_APP_CHECKOUT_URL;
		navigateToUrl(`${url}?product=${state.id}`);
	};

	return (
		<div className="products">
			<div className="products-container">
				<h1 className="products-h1">Producto: {IMAGES[state.id].name}</h1>
				<img className="products-img" src={state.image} alt={state.alt}></img>
			</div>
			<div className="products-payment">
				<button onClick={goToProduct}>Comprar tractor</button>
			</div>
		</div>
	);
};

export default ProductComponent;
