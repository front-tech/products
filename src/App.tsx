import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function Index() {
  return <h2>Home</h2>;
}
// function Product({ match }) {
//  return <h2>This is a page for product with ID: {match.params.id} </h2>;
// }
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
           </ul>
         </nav>
 
         <Route path="/" exact component={Index} />
         {/* <Route path="/products/:id" component={Product} /> */}
       </div>
     </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
