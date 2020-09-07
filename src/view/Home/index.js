import React from "react";
import "./homeHeader.css";
// import NavbarHeader from "../Navbar/index.js"
import { Button, Container, Navbar, Nav, Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
     {/* <NavbarHeader/> */}
    <div className="homeWrapper mb-5">
      <div className="hello">
        <Row >
          <Col md="6" className="mb-5" >
            <div className="content">
              <h2>MENS'S RUNNING </h2>
              <br />
              <h2>BLUE / BLACK / ORANGE</h2>
              <hr className="headerHr" />
              <p className="headingContent"> Adidas</p>
        <button className="headerBtn">Get Yours</button>
            </div>
          </Col>
          <Col md="6">
            <img className="imageContent" src="https://www.sneakersnstuff.com/images/88393/img-6890.jpg" />
          </Col>
        </Row>
      </div>
    </div>
    </>
  );
};
export default Home;
