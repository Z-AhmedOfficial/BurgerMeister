import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import "../styles/Sections.css";
import { Link, useNavigate } from 'react-router-dom';

export default function Cards({ id, image, title, paragraph, rating, price }) {
  const [cart, setCart] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalQuantity, setModalQuantity] = useState(0);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    setCart(cart + 1);
    setModalQuantity(cart + 1);
    setShowModal(true);
  };

  const handleRemoveFromCart = () => {
    if (cart > 0) {
      setCart(cart - 1);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const increaseQuantity = () => {
    setModalQuantity(modalQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (modalQuantity > 1) {
      setModalQuantity(modalQuantity - 1);
    }
  };

  const handleCheckout = () => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems') || "[]") || []; // Get Previous Cart Items
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, { id, title, price, image, quantity: modalQuantity }])); // Add new item to cart

    navigate(`/Checkout?title=${encodeURIComponent(title)}&price=${price}&quantity=${modalQuantity}&image=${encodeURIComponent(image)}`);
  }


  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden cards_main">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="wishlist">
              <i className="bi bi-heart"></i>
              <button onClick={handleRemoveFromCart} className='closey' disabled={cart === 0}>-</button>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">${price.toFixed(2)}</h5>
            </div>
            <div className="add_to_cart">
              <button onClick={handleAddToCart} className="btn btn-link text-decoration-none">
                <i className="bi bi-bag me-2"></i>
                Add To Cart
              </button>
              {cart > 0 && <p>Items in cart: {cart}</p>}
            </div>
          </div>
        </Card.Body>
      </Card>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3 className='modalh3'>Added to cart: {modalQuantity}</h3>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Burgers: {title}</h2>
            <p><img src={image} alt={title} style={{ width: '100px', height: 'auto' }} /></p>
            <div className="quantity-controls">
              <button onClick={decreaseQuantity} className='btn btn-secondary'>-</button>
              <span>Quantity: {modalQuantity}</span>
              <button onClick={increaseQuantity} className='btn btn-secondary'>+</button>
            </div>
            <h2>Price: ${(price * modalQuantity).toFixed(2)}</h2>
            <span className="logo">
              <button onClick={handleCheckout} className='homies'>Proceed to checkout</button>
            </span>
          </div>
        </div>
      )}
    </Col>
  );
}
