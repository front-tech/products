import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import ProductComponent from './products/products';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Redirect to="/products/1"/>
					</Route>
					<Route exact path="/products">
						<Redirect to="/products/1"/>
					</Route>
					<Route path="/products/:id" render={(props) => {
						return (
							<ProductComponent {
								...props.match.params
							} />
						);
					}}/>
				</Switch>
				<nav>
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
			</Router>
		</div>
	);
}

export default App;
