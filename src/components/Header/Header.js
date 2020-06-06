import React from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#fff" }}>
        <Navbar.Brand href="/">
          <img
            src="https://i.ibb.co/qsXmy2v/logo2.png"
            width="120"
            alt=""
            className="img-fluid"
            id="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/review/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              cart
            </Link>
            <Nav.Link style={{ color: "#111" }}>
              {" "}
              <Link to="/login">Login</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <button className="button-sign-up">
                <Link
                  style={{ color: "#fff", textDecoration: "none" }}
                  to="/register"
                >
                  Sign up
                </Link>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
