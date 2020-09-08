import React from 'react';
import logo from './logo.svg';
import Home from './view/Home/index.js';
import Product from "./view/Products"
import ProductDetail from "./view/ProductDetail"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from "./config/router";
import {GlobalProvider} from "./Context/GlobalState"


function App() {
  return (
    <GlobalProvider>
    <div className="App">
        {/* <Home />
        <Product/>
         <ProductDetail/> */}
         <MainRouter/>
    </div>
    </GlobalProvider>
  );
}

export default App;
