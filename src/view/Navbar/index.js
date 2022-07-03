import React, { useContext } from 'react'
import {
  Button,
  Container,
  Navbar,
  Nav,
  Col,
  Row,
  Badge,
} from 'react-bootstrap'
import './navbar.css'
import { GlobalContext } from '../../Context/GlobalState'
import { Link } from 'react-router-dom'

const NavbarHeader = () => {
  const { myCart } = useContext(GlobalContext)
  return (
    <div className=" mx-3">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <div className="navbarHeader">
            <div>
              <img
                className="logo"
                src="https://img.icons8.com/ios-filled/50/000000/adidas-trefoil.png"
              />
              <div></div>
              <h4 className="text-dark">Adidas</h4>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav className="ml-auto text-dark">
            <Nav.Link className="navLink active">
              <Link className="navLink" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="navLink">
              <Link className="navLink" to="/products">
                Products
              </Link>
            </Nav.Link>
            <Nav.Link className="navLink">
              <Link className="navLink " to="/cart">
                My Cart
                <Badge pill variant="dark ml-2 " className="badgePill">
                  {myCart.length}
                </Badge>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default NavbarHeader
