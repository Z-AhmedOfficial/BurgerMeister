import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/Sections.css";
import { Link } from 'react-router-dom';

export default function Section1() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="image-container">
            <img src="https://imgs.search.brave.com/cyYhTmjpf1S0tA9Tg9KHSQw6ugMc0Lt-1nWjNpnMCvU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYnVyZ2VyX3Nh/bmR3aWNoL2J1cmdl/cl9zYW5kd2ljaF9Q/Tkc0MTM1LnBuZw" alt="Sample Image" />
            <div className="price-tag">$6.99</div>
          </div>
        </div>
        <div className="sec1_div text-center ">
          <h1 className="text-white">New Burger</h1>
          <h2 className="text-white">With Onion</h2>
          <p className="text-white pt-2 pb-4 ">
          Try our new burger with onion: a juicy beef patty topped with caramelized onions and gourmet cheeses. 
    Served on a toasted bun with crisp lettuce and ripe tomatoes, it’s a savory, flavor-packed experience.

          </p>
          <Link to="/order" className="btn order_now">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
}
