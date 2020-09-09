import React, { useContext } from "react";
import { Button, Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import "./cart.css";
import product_items from "../../product_items";
import { GlobalContext } from "../../Context/GlobalState";
import allProduct from "../../product_items.json";
const array_Items = Object.keys(product_items);


let Cart = () => {
  const { myCart,checkout_Done } = useContext(GlobalContext);
  
  const checkout=()=>{
    Swal.fire({
      title: 'checkout Completed ',
      icon:"success",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    checkout_Done()
  }
  let total=0
  return (
    <div className="cart_wrapper">
      <div className="mb-5">
        <Container>
          {myCart.length ? (
            <>
              <h3 className="font-weight-bold">Shopping Cart</h3>
              <hr className="my-4" />

              <Row>
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
                <Col md="4"></Col>
              </Row>

              <Row>
                <Col md="8">
                  {myCart.length ? (
                    myCart.map((item, index) => {
                      total+=item.prc
                      return (
                        <Row className="my-2" key={item}>
                          <Col xsm="9">
                            <div className="d-flex justify-content-space-center align-item-center ">
                              <img className="img_Cart" src={item.img} />
                              <span className="ml-2 ">
                                <h5>{item.name}</h5>
                              </span>
                            </div>
                          </Col>
                          <Col xsm="3" className="text-center">
                            <p className="font-weight-bold float-right">
                              PKR ${item.prc}{" "}
                            </p>
                          </Col>
                        </Row>
                      );
                    })
                  ) : (
                    <p>Your Cart Is Empty</p>
                  )}
                </Col>
                {/* Summary*/}
                <Col md="4">
                  <h4>Order Summary </h4>
                  <hr className="my-4" />

                  <div className="d-flex justify-content-space-around">
                    <h6>Items</h6>
                    <h6 className="ml-auto">PKR {total}</h6>
                  </div>
                  <div className="d-flex justify-content-space-around my-3">
                    <h6>Delivery Charges</h6>
                    <h6 className="ml-auto">PKR 1000</h6>
                  </div>
                  <h6>Promo Code </h6>
                  <input
                    placeholder="Enter Your Coupon"
                    className="p-2 my-1 couponInput"
                  />
                  <Button className="btn btn-danger">Apply</Button>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-space-around my-3">
                    <h6>Total Cost</h6>
                  <h6 className="ml-auto">PKR {total+1000}</h6>
                  </div>
                  <span className="center">
                    {" "}
                    <button className="chk_btn"onClick={checkout}>Checkout</button>
                  </span>
                </Col>
              </Row>
            </>
          ) : (
            <h1 className="text-center">Your Cart Is Empty</h1>
          )}
        </Container>
      </div>
    </div>
  );
};
export default Cart;
