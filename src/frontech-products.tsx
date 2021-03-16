import React from 'react';
import ReactDOM from 'react-dom';
import rootComponent from './App';
import singleSpaReact from 'single-spa-react';

const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent,
	errorBoundary(err:any, info: any, props: any) {
		// https://reactjs.org/docs/error-boundaries.html
		return (
			<div>This renders when a catastrophic error occurs</div>
		);
	},
});

export const {bootstrap, mount, unmount} = reactLifecycles;
