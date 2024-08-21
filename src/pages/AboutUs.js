import React from 'react';
import "../styles/Otherpages.css";
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <>
    <div className="about-us">
      <div className="about-container">
        <h1 className="about-title">About Burger Meister</h1>
        <p className="about-description">
          At Burger Meister, we're more than just a burger joint. We're a
          passion-driven team dedicated to serving the juiciest, most flavorful
          burgers you'll ever taste. Our journey began with a simple mission:
          to craft the perfect burger using only the freshest, locally sourced
          ingredients.
        </p>
        <div className="about-history">
          <h2 className="history-title">Our Story</h2>
          <p className="history-description">
            Burger Meister was founded in 2020 by a group of burger enthusiasts
            who wanted to create a dining experience that celebrates the classic
            burger with a gourmet twist. From our humble beginnings as a small
            food truck to becoming a beloved local restaurant, our commitment to
            quality and innovation has never wavered.
          </p>
          <p className="history-description">
            Each burger is crafted with care, using only the finest ingredients
            to ensure every bite is packed with flavor. We take pride in our
            friendly service and strive to create a warm, welcoming atmosphere
            for all our guests.
          </p>
        </div>
        <div className="about-values">
          <h2 className="values-title">Our Values</h2>
          <ul className="values-list">
            <li className="value-item">Quality: We use only the best ingredients for unbeatable flavor.</li>
            <li className="value-item">Innovation: We continually experiment with new recipes and ideas.</li>
            <li className="value-item">Community: We support local farmers and suppliers.</li>
            <li className="value-item">Customer Experience: We aim to make every visit memorable.</li>
          </ul>
          </div>
      </div>
        </div>
          <div className='btn_div'>
          <Link to="/" className="logo">
                <button className='homie'>Home</button>
            </Link> 
            </div>
      </>
  );
}
