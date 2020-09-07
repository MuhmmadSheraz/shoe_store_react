import React from "react";
import { Button, Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import './navbar.css'

 const NavbarHeader = () => {
  return (
      <div className=" mx-3">
        <Navbar  collapseOnSelect expand="lg">
          <Navbar.Brand href="/">
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
            <Nav.Link className="navLink active" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="navLink" href="/products">
              Products
            </Nav.Link>
            
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>

        )
        }
        export default NavbarHeader;