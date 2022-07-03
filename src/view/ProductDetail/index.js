import React, { useContext } from "react";
import "./detail.css";
import Swal from 'sweetalert2'
import { Button, Container, Nav, Col, Row } from "react-bootstrap";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useParams } from "react-router-dom";
import items from "../../product_items.json";
import { GlobalContext } from "../../Context/GlobalState";

let ProductDetail = () => {
  const { addToCart, myCart } = useContext(GlobalContext);
  const { id } = useParams();
  const item = items[`${id}`];
  const add = (param) => {
    if (myCart && myCart.find(x=>x.name===param)) {
      console.log("IF")
      return Swal.fire({
        icon: 'warning',
        text: 'Item Already Added',
      });
    } else {
      console.log("ELSE")
      console.log(myCart)
      console.log(param)
      let sent = items[param];
      addToCart(sent);
    }
  };
  return (
    <>
      <div>
        <Row className="m-0">
          <Col md="6" className="content_col">
            <Zoom>
              <img
                className="imageDeatils"
                alt="that wanaka tree"
                src={item.img}
                width="500"
              />
            </Zoom>
          </Col>
          <Col md="6" className="content_col">
            <Container className="col_content_inside">
              <h1 className="mb-4 ">{item.name}</h1>

              <p className="description_product">
                psum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset
              </p>
              <h5 className="font-weight-bolder">{item.prc} PKR</h5>
              <button className="addCart" onClick={() => add(`${id}`)}>
                Add to cart
              </button>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default ProductDetail;
