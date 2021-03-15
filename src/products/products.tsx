import React, { useState, useEffect } from 'react';
import './products.css';

import im1 from './1.svg';
import im2 from './2.svg';
import im3 from './3.svg';

export interface Props {
	id: string
}

const IMAGES: any = {
	'1': im1,
	'2': im2,
	'3': im3

};

const ProductComponent = ({id}: Props) => {

	const [state, setState] = useState({
		image: '',
		alt: ''
	});

	useEffect(() => {
		setState(state => ({
			...state,
			image: IMAGES[id],
			alt: IMAGES[id]
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
