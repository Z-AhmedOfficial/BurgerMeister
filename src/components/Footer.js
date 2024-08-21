import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>At Burger Meister, we’re passionate about crafting mouthwatering burgers with the freshest ingredients and unique flavors. Our goal is simple: to deliver an unforgettable burger experience in every bite.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p><i className="bi bi-envelope"></i> zain.a@cloudnosys.com</p>
            <p><i className="bi bi-telephone"></i> +922345678901</p>
            <p><i className="bi bi-geo-alt"></i> DHA PHASE 8, Karachi, Pakistan</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
