import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Otherpages.css';

export default function Checkout() {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems') || "[]") || []);

  const [cardName, setCardName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [dob, setDob] = useState("MM/YY");

  const navigate = useNavigate();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const image = query.get('image');

  const handleAlert = (e) => {

    e.preventDefault(); 
    alert(`YOUR ORDER HAS BEEN SUBMITTED\nCardholder's Name: ${cardName}\nCard Number: ${cardNum}\nExpiration Date: ${dob}`);

  };
  const handlepaynow = () => {
    let paynowItems = JSON.parse(localStorage.getItem([])) || [];

    setCartItems(paynowItems)
  }

  const handleRemoveItem = (idx) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems') || "[]") || [];
    let updatedCart = cartItems.filter((item, index) => index !== idx);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  }

  return (
    <>
      <div className="checkout-container">
        <div className="checkout-header">
          <h1>Checkout</h1>
        </div>
        
        {cartItems?.map((item, idx) => (
          <div key={idx} className="checkout-items">
            <div className="checkout-item">
              <img src={image} alt={item.title} />
              <div className="checkout-item-details">
                <h2 className="checkout-item-title">{item.title}</h2>
                <p className="checkout-item-price">Price: ${(item.price * item.quantity).toFixed(2)}</p>
                <p className="checkout-item-quantity">Quantity: {item.quantity}</p>
              </div>
            </div>
    
            <div className='div_moreitem'>
              <button className='moreitem' onClick={() => handleRemoveItem(idx)}>x</button>
              <button className='moreitem' onClick={() => navigate('/menu')}>+</button>
            </div>            
          </div>
        ))}
        <div className="payment-method">
          <h2>Payment Method</h2>
          <form onSubmit={handleAlert}>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Cardholder's Name"
              required
            />
            <input
              type="text"
              value={cardNum}
              onChange={(e) => setCardNum(e.target.value)}
              placeholder="Card Number"
              maxLength="19"
              required
            />
            <input
              type="text"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              placeholder="MM/YY"
              maxLength="5"
              required
            />
            <input type="submit" value="Pay Now"
            onClick={handlepaynow} />
          </form>
        </div>
      </div>
      <div className='divvy'>
        <Link to="/" className="logo">
          <button className='home'>Go to Home</button>
        </Link>
      </div>
    </>
  );
}
