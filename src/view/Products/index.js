import React, { useContext } from "react";
import { Button, Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./products.css";
import product_items from "../../product_items";
import { GlobalContext } from "../../Context/GlobalState";

const array_Items = Object.keys(product_items);
let Products = () => {
  const { addToCart, myCart } = useContext(GlobalContext);

  const addToCartFun = (param) => {
    if (myCart && myCart.includes(param)) {
      return alert("Item already added");
    } else {
      console.log("OnClicked**", param);
      addToCart(param);
    }
  };
  return (
    <>
      <div className="product">
        <h1 className="my-5 text-center main_head">*** Featured Products ***</h1>
        <hr className="productHR" />{" "}
        <Container>
          <Row className="mt-5">
            {array_Items.map((x, index) => {
              return (
                <Col key={product_items[x].name} md="6" lg="4" className="mb-5">
                  <div className="product_Content text-center">
                    <img className="product_image" src={product_items[x].img} />
                    <h5>{product_items[x].name} </h5>
                    <hr className="productHR my-3" />
                    <h4 className="price">PKR {product_items[x].prc} </h4>
                    <br />
                    <Button
                      variant="outline-primary mb-1"
                      onClick={() => addToCartFun(product_items[x])}
                    >
                      Add To Cart
                    </Button>
                    <Link to={`/products/${product_items[x].name}`}>
                      <Button variant="outline-success mb-1 mx-1">View Details</Button>
                    </Link>
                    <br />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Products;
