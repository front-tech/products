import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import productComponent from './products/products';

function Index() {
  return <h2>Home</h2>;
}
// function Product({ match }) {
//  return <h2>This is a page for product with ID: {match.params.id} </h2>;
// }

function getProductComponent() {
  return productComponent;
}
function App() {
  return (
    <div className="App">
      <Router>
       <div>
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
               <Link to="/products">Products Component</Link>
             </li>
           </ul>
         </nav>
 
         <Route path="/" exact component={Index} />
         <Route path="/products" component={getProductComponent()}/>
         {/* <Route path="/products/:id" component={Product} /> */}
       </div>
     </Router>
    </div>
  );
}

export default App;
