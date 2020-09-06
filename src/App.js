import React from 'react';
import logo from './logo.svg';
import Home from './view/Home/index.js';
import Product from "./view/Products"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     {/* <NavbarHeader/> */}
        {/* <Home /> */}
        <Product/>
    </div>
  );
}

export default App;
