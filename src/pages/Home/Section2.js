import React from 'react';
import "../../styles/Sections.css";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Section2() {
  return (
    <Container>
      <div className='div_main'>
        <div className='headings'>
          <h1>
            THE BURGER TASTE BETTER WHEN<br />
            YOU EAT IT WITH YOUR FAMILY
          </h1>
          <p>
            Enjoying a delicious burger is always a special experience, but it's even better when shared with the people you care about. Gather your family and make mealtime memorable with our irresistible burgers.
          </p>
          <Link to="/menu" className="btn fullmenu btn_red">
            Explore Full Menu
          </Link>
        </div>
      </div>
    </Container>
  );
}
