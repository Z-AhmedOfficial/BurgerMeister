import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/HeaderStyle.css";

const Header = () => {

  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || "[]");
    setCartItems(storedCartItems);
  }, []); 

 
  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };


  const [nav, setNav] = useState(false);

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeValueOnScroll);
    return () => window.removeEventListener("scroll", changeValueOnScroll);
  }, []); 

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img
                src="https://imgs.search.brave.com/RCTyRiify-3LnNj1uBNFHITUQCKSGV1tZwPs96ivZkg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/M2E5ZmI5NGU0NzNm/MzZkYmU5OWMxYjEv/NjUxYmNhY2QyNDcw/MWRjMzQzNjVlYmI2/XzZ4TzVjMkw5U01r/ek5CZU5NQ2M5Lmpw/ZWc"
                width={120}
                height={120}
                alt="Logo"
                className="img-fluid"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/order">
                Order
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/checkout">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">{getTotalQuantity()}</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
