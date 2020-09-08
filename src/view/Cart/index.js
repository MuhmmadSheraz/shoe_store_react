import React, { useContext } from "react";
import { Button, Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cart.css";
import product_items from "../../product_items";
import { GlobalContext } from "../../Context/GlobalState";

const array_Items = Object.keys(product_items);
let Cart = () => {
  const { myCart } = useContext(GlobalContext);
  console.log(myCart);
  return (
    <div className="cart_wrapper">
      <div className="mt-5">
        <Container>
          <h1 className="">Shopping Cart</h1>
          <h1 className="float-right">3 Items </h1>
          <hr />
          <Row>
            <Col md="9">
              {/* cart Item */}
              <div className="bg-secondary p-3 mt-3 no-gutter">
                <Row className="no-gutters">
                  <Col sm="6" className="lol">
                    <img
                      className="img_Cart"
                      src="http://shoe-store-reactjs.surge.sh/shoes_images_by_type/2/2_01.jpg"
                    />
                    <h5>Product Price </h5>
                    <br />
                    <p className="text-danger">Remove</p>
                  </Col>
                  <Col sm="3">
                    <h4>Price </h4>
                  </Col>
                  <Col sm="3">
                    <h4>Adidas Shoes Model Nai Pta</h4>
                  </Col>
                </Row>
              </div>
              {/* ////cart Item */}
            </Col>
            {/* Summray*********************** */}
            <Col md="3">
              <h1>Summary </h1>
              <div className="d-flex justify-content-space-around">
                <p>Sub Total</p>
                <p>PKR 8000</p>
              </div>
              <div className="d-flex justify-content-space-around">
                <p>Delivery Charges </p>
                <p>PKR 1000</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Cart;
