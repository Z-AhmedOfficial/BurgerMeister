import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "../../styles/Sections.css";

export default function Section4() {
  return (
    <>
    <section className="promotion">
    <Container>
      <Row className="align-items-center">
        <Col lg={6} className="text-center mb-5 mb-lg-0">
          <img src="https://imgs.search.brave.com/V5B1Sl6xyedDzgXW2YLOGPbd33sJvGaxniTKWn7NqGk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/NTAxMjg1OC9waG90/by9mcmllbmRzLWFu/ZC1mYXN0LWZvb2Qu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWU2enFSRU5ZdXJK/cmFVbmZFeUY3QW5m/ZVp3ekhyWDBSR3J2/R3hhRC1jaHM9" className="img-fluid" alt="Promo" />
        </Col>
        <Col lg={6} className="px-5">
          <h2>Nothing brings people together like a good food</h2>
          <p>
          At the heart of every great gathering is a shared experience, and few things bring people together
         like enjoying a delicious burger. Whether it’s a family barbecue, 
         a friendly get-together, or a casual meal with colleagues, burgers offer 
         a perfect blend of flavors and fun. They’re more than just food—they’re a way to connect, celebrate, and create lasting memories with those you care about.
          </p>
          
          <h3>Benefits</h3>
          <ul>
            <li>
              <p>
              Nutritious food strengthens the immune system and reduces the risk of chronic illnesses.
              </p>
            </li>
            <li>
              <p>Balanced meals provide steady energy and support a positive mood.</p>
            </li>
            <li>
              <p>
              Fiber-rich foods promote healthy digestion and help manage weight.
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>    
 </section>
        
        </>
  )
}
