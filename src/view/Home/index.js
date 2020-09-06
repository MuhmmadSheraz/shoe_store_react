import React from "react";
import "./homeHeader.css";
import { Button, Container, Navbar, Nav, Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="header mx-3 mb-5 ">
        <br />
        <Navbar  collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">
            <div className="navbarHeader">
              <div>
                <img
                  className="logo"
                  src="https://img.icons8.com/ios-filled/50/000000/adidas-trefoil.png"
                />
                <div></div>
                <h3 className="text-dark">Adidas</h3>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav className="ml-auto text-dark">
            <Nav.Link className="navLink active" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navLink" href="#features">o
              Products
            </Nav.Link>
            
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="mt-5 hello">
        <Row className="mt-5">
          <Col md="6" className="mb-5" >
            <div className="content">
              <h2>MENS'S RUNNING </h2>
              <br />
              <h2>BLUE / BLACK / ORANGE</h2>
              <hr className="headerHr" />
              <p className="headingContent"> Adidas</p>
            </div>
          </Col>
          <Col md="6">
            <img className="imageContent" src="https://www.sneakersnstuff.com/images/88393/img-6890.jpg" />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Home;
