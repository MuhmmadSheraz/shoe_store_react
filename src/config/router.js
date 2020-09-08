import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Navbar from "../view/Navbar"
import Home from "../../src/view/Home";
import Products from "../../src/view/Products";
import ProductDetail from "../view/ProductDetail"
import Cart from "../view/Cart"
const MainRouter = () => {
  return (
    <>
      <Router>
<Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="products" element={<Products/>} />
          <Route path="products/:id" element={<ProductDetail/>} />
          <Route path="cart" element={<Cart/>} />
        </Routes>
      </Router>
    </>
  );
};
export default MainRouter;
