import React from 'react';
import logo from './logo.svg';
import Home from './view/Home/index.js';
import Product from "./view/Products"
import ProductDetail from "./view/ProductDetail"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from "./config/router"


function App() {
  return (
    <div className="App">
        {/* <Home />
        <Product/>
         <ProductDetail/> */}
         <MainRouter/>
    </div>
  );
}

export default App;
