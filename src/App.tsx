import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';
import ProductComponent from './products/products';

function App() {
	const showMenu = process.env.REACT_APP_SHOW_MENU !== 'false';
	return (
		<div className="App">
			<Router>
				<nav style={{'display': showMenu ? 'block' : 'none'}}>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/products/1">First Product</Link>
						</li>
						<li>
							<Link to="/products/2">Second Product</Link>
						</li>
						<li>
							<Link to="/products/3">Third Product</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route exact path="/">
						<Redirect to="/products"/>
					</Route>
					<Route exact path="/products" render={(props) => {
						const params = props.location.search.replace('?', '').split('&');
						const config = params.reduce((acc: any, param: string) => {
							const paramParts = param.split('=');
							acc[paramParts[0]] = paramParts[1];
							return acc;
						}, {});
						return (<ProductComponent {...config} />);
					}}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
