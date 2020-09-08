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
      <div className="mb-5">
        <Container>
          <h3 className="font-weight-bold">Shopping Cart</h3>
          <hr className="my-4" />

          {/* <Row>
            <Col md="8">
              <Row className="my-2">
                <Col xsm="9" className>
                  <h5>Product Details</h5>
                </Col>
                <Col xsm="3">
                  <p className="font-weight-bold float-right align-item-center justify-content-center ">
                    Price
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md="4">
         
            </Col>
          </Row> */}

          <Row>
            <Col md="8">
              <Row className="my-2">
                <Col xsm="9">
                  <div className="d-flex justify-content-space-center align-item-center ">
                    <img
                      className="img_Cart"
                      src="http://shoe-store-reactjs.surge.sh/shoes_images_by_type/2/2_01.jpg"
                    />
                    <span className="ml-2 ">
                      <h5>Product Name </h5>
                      <p className="text-danger ">Remove</p>
                    </span>
                  </div>
                </Col>
                <Col xsm="3" className="text-center">
                  <p className="font-weight-bold float-right">PKR 8000 </p>
                </Col>
              </Row>
              <Row className="my-2">
                <Col xsm="9">
                  <div className="d-flex justify-content-space-center align-item-center ">
                    <img
                      className="img_Cart"
                      src="http://shoe-store-reactjs.surge.sh/shoes_images_by_type/2/2_01.jpg"
                    />
                    <span className="ml-2 ">
                      <h5>Product Name </h5>
                      <p className="text-danger ">Remove</p>
                    </span>
                  </div>
                </Col>
                <Col xsm="3" className="text-center">
                  <p className="font-weight-bold float-right">PKR 8000 </p>
                </Col>
              </Row>
            </Col>
            {/* Summary*/}
            <Col md="4">
            <h4>Order Summary </h4>
              <hr className="my-4" />

              <div className="d-flex justify-content-space-around">
                <h6>Items</h6>
                <h6 className="ml-auto">PKR 8000</h6>
              </div>
              <div className="d-flex justify-content-space-around my-3">
                <h6>Delivery Charges</h6>
                <h6 className="ml-auto">PKR 1000</h6>
              </div>
              <h6>Promo Code </h6>
              <input placeholder="Enter Your Coupon" className="p-2 my-1 couponInput" w-100/>
              <Button className="btn btn-danger">Apply</Button>
              <hr className="my-4" />
              <div className="d-flex justify-content-space-around my-3">
                <h6>Total Cost</h6>
                <h6 className="ml-auto">PKR 9000</h6>
              </div>
           <span className="center">   <button className="chk_btn">Checkout</button></span>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Cart;
