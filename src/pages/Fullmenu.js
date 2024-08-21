import React from 'react';
import Section3 from './Home/Section3';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/Otherpages.css";

export default function Fullmenu() {

  const FriesData = [
    {
      id: "0001",
      image: 'https://imgs.search.brave.com/Gxyv-_wpmPD8aCXCfcqfveRiIbjiT-o8t7y2sVk7zFc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNC9Gcmll/cy5wbmc',
      title: "Regular Fries",
      paragraph: "Crispy, Perfectly salted and served hot.",
      rating: 5,
      price: 2.15,
    },
    {
      id: "0002",
      image: 'https://imgs.search.brave.com/mZWLo7Dd9zIjAei3qJIlntkLK0iKEvRU8YvKXmLrVlc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY3Vy/bHktZnJpZXNpbi1y/ZWQtYm94LW1xdzhn/bWs4OGl3MHR6MWou/cG5n',
      title: "Curly Fries",
      paragraph: "Seasoned fries with a unique curly shape.",
      rating: 4.5,  
      price: 2.32,
    },
    {
      id: "0003",
      image: 'https://imgs.search.brave.com/PzDmd6h-pFjWpUS_pw5EfTqSTyBWvh08a2E32WcFOK8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lm10aXByb2R1Y3Rz/LmNvbS9odWJmcy9J/bXBvcnRlZF9CbG9n/X01lZGlhL2JlbGdp/YW5mcmllcy5wbmc',
      title: "Belgian Fries",
      paragraph: "Thick-cut fries with a deliciously fluffy interior.",
      rating: 4,
      price: 3.15,
    },
    {
      id: "0004",
      image: 'https://imgs.search.brave.com/0Cr0u3ThRCHs6PSNC0qIAK1y4woBziFERRI8DBxcF5s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY2hl/ZXNlLWNvdmVyZWQt/ZnJpZXNpbi1jdXAt/MWFrbG5zZHZlc2Nq/cnRreC5wbmc',
      title: "Cheese Covered Fries",
      paragraph: "Crispy fries topped with melted cheese.",
      rating: 3.5,
      price: 4.25,
    },
    {
      id: "0005",
      image: 'https://imgs.search.brave.com/pmVEKslK8877uxU00WuNCATARS3gJyfmVKSKFrURZrY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY3Jp/c3B5LW9uaW9uLXJp/bmdzLWZhc3QtZm9v/ZC1zbmFjay1qNXUz/aDV1a2tvMzZucjY2/LnBuZw',
      title: "Crispy Onion Fries",
      paragraph: "Fried onions for an extra crunch and savory flavor.",
      rating: 3.0,
      price: 3.25,
    },
    {
      id: "0006",
      image: 'https://imgs.search.brave.com/1yTo8PURG-V5EpoeE9xccI4gVjYRHjNHOC1okJJrSeI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zbWFs/bGltZy5wbmdrZXku/Y29tL3BuZy9zbWFs/bC84MS04MTI0OTNf/Z3JhdnktbG9hZGVk/LWZyaWVzLWF1c3Ry/YWxpYS1mcmVuY2gt/ZnJpZXMtd2l0aC1n/cmF2eS5wbmc',
      title: "Gravy Loaded Fries",
      paragraph: "Fries covered with a rich, savory gravy.",
      rating: 3,
      price: 4.45,
    },
    {
      id: "0007",
      image: 'https://imgs.search.brave.com/o5gnikb4VvKy1ULKnNNZq7qkIJzQ2zvsyZJJ6oYyEGw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmljZXBuZy5jb20v/cG5nL2RldGFpbC8x/MC0xMDg3NThfbWFz/YWxhLWZyaWVzLW1h/c2FsYS1mcmVuY2gt/ZnJpZXMtcG5nLnBu/Zw',
      title: "Masala Fries",
      paragraph: "Fries seasoned with a blend of Indian spices.",
      rating: 2.5,
      price: 2.19,
    },
    {
      id: "0008",
      image: 'https://imgs.search.brave.com/vSaYp13QZp3vOwkI_WeVNGhAL_sOUe9LLlN6EoR_jYM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zbWFs/bGltZy5wbmdrZXku/Y29tL3BuZy9zbWFs/bC8yNS0yNTIyOTdf/bWVhdHktY2hlZXNl/LWZyaWVzLWZyaWVz/LXBuZy5wbmc',
      title: "Meaty Cheese Fries",
      paragraph: "Layer of cheese and chunks of savory meat..",
      rating: 2.0,
      price: 4.12,
    },
    {
      id: "0009",
      image: 'https://imgs.search.brave.com/_QP0H1p6ztINLdOQWTxmDO5deYLJhB-3qJ9moDzYzrM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdz/ZXQuY29tL2ltYWdl/cy9zYXVjZWQtYW5k/LWxvYWRlZC1mcmll/cy1mb29kLWJyZWFk/LWNyYWNrZXItc25h/Y2stdHJhbnNwYXJl/bnQtcG5nLTcxNjY5/LnBuZw',
      title: "Sauced and loaded Fries",
      paragraph: "Layer of Sauced Fries.",
      rating: 2.0,
      price: 4.30,
    },
  ];
   

  return (
    <div>
      <Section3 />
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2 className="crazebur">OUR TASTY FRIES</h2>
            <p className="paracraze">
              Indulge in our wildest creations—fries packed with unexpected flavors and unbeatable flair!
            </p>
          </Col>
        </Row>
        <Row>
          {FriesData.map((fries, index) => (
            <Col key={index} lg={4} className="text-center mb-5">
              <div className="Fries_main">
                <div className="Fries_main_2">
                  <h2>{fries.title}</h2>
                  <img src={fries.image} alt={fries.title} className="img-fluid" />
                  <p>{fries.paragraph}</p>
                  <p>${fries.price.toFixed(2)}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="text-center">
            <div className="btn_div">
              <Link to="/" className="logo">
                <button className="homies">Home</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
