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
						<Redirect to="/product/1"/>
					</Route>
					<Route path="/product/:id" render={(props) => {
						console.log(props);
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
							<Link to="/product/1">First Product</Link>
						</li>
						<li>
							<Link to="/product/2">Second Product</Link>
						</li>
						<li>
							<Link to="/product/3">Third Product</Link>
						</li>
					</ul>
				</nav>
			</Router>
		</div>
	);
}

export default App;
