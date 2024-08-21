import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "../../styles/Sections.css";
import Cards from '../../components/Cards';
import { Link } from 'react-router-dom';
// import Order from '../Order';

const mockData = [
    {
      id: "0001",
      image: 'https://imgs.search.brave.com/Z5i5oy5YbgtMi2Kn9UeDXGf6xoq0HYBruUA6jtJcZA8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYnVyZ2VyX3Nh/bmR3aWNoL3NtYWxs/L2J1cmdlcl9zYW5k/d2ljaF9QTkc0MTU3/LnBuZw',
      title: "Crispy Chicken",
      paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
      rating: 5,
      price: 5.15,
    },
    {
      id: "0002",
      image: 'https://imgs.search.brave.com/MlSAqHwHsjz9mLTTF8l3mzxL281f7sV9caaTlWntSjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS8y/Y2Q0M2JfNGQzNDBk/MjhiYTI4NDJiOTgx/MDU5OTAyMTkwZjhj/ODJ-bXYyLnBuZy92/MS9maXQvd185NjAs/aF83MjgscV8zMC8y/Y2Q0M2JfNGQzNDBk/MjhiYTI4NDJiOTgx/MDU5OTAyMTkwZjhj/ODJ-bXYyLnBuZw',
      title: "Ultimate Bacon",
      paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
      rating: 4.5,
      price: 7.32,
    },
    {
      id: "0003",
      image: 'https://imgs.search.brave.com/jht7wovbmsjM0wYx45WVcvlRzfBuSFE22zqT_ezouI0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS8y/Y2Q0M2JfNGYxZGRk/ZTMyZWRjNDU3ZWJk/MDZkNDc5Zjk4NDdj/MTZ-bXYyLnBuZy92/MS9maXQvd180NjAs/aF80MTMscV8zMC8y/Y2Q0M2JfNGYxZGRk/ZTMyZWRjNDU3ZWJk/MDZkNDc5Zjk4NDdj/MTZ-bXYyLnBuZw',
      title: "Black Sheep",
      paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
      rating: 4,
      price: 6.15,
    },
    {
      id: "0004",
      image: 'https://imgs.search.brave.com/TEcwKN0gtX0C0JvQ2jK_e1XQEn9Q1ezt9j99uhBwdAw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9TYW5k/d2ljaC1IYW1idXJn/ZXItUE5HLUltYWdl/LnBuZw',
      title: "Vegan Burger",
      paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
      rating: 3.5,
      price: 5.25,
    },
    {
      id: "0005",
      image:'https://imgs.search.brave.com/JDKPVBoLDwoOY_TFiAYafR1cPi2QnZxAa4uzPqhnrVc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTYvRG91/YmxlLUNoZWVzZS1C/dXJnZXItUE5HLVRy/YW5zcGFyZW50LUlt/YWdlLnBuZw',
      title: "Double Burger",
      paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
      rating: 3.0,
      price: 8.25,
    },
    {
      id: "0006",
      image: 'https://imgs.search.brave.com/8cpkMI8CXx_tD1EyICwMLByB48Xzh1QZlE6caQlmh0w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5wbmdhYWEuY29t/LzUzNi84MTUzNi1t/aWRkbGUucG5n',
      title: "Turkey Burger",
      paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
      rating: 3,
      price: 6.18,
    },
    {
      id: "0007",
      image: 'https://imgs.search.brave.com/acLrdhe94r8IISdttQVfk1Dvyppyz_8XYjgntsuZ88c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NS9CdXJnZXItRnJl/ZS1Eb3dubG9hZC1Q/TkcucG5n',
      title: "Smokey House",
      paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
      rating: 2.5,
      price: 7.19,
    },
    {
      id: "0008",
      image: 'https://imgs.search.brave.com/3z7Wv5tH_5pORBPJ3mGf5LhwPQWC_dzHaUK8NGemMjs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NS9CdXJnZXItRnJl/ZS1QTkctSW1hZ2Uu/cG5n',
      title: "Classic Burger",
      paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
      rating: 2.0,
      price: 5.12,
    },
    
  ];
export default function Section3() {
  return (
    <>
    <section className="menu_section">
    <Container>
      <Row>
        <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
          <h2 className='crazebur'>OUR CRAZY BURGERS</h2>
          <p className="paracraze">
          Indulge in our wildest creations—burgers packed with unexpected flavors and unbeatable flair!
          </p>
        </Col>
      </Row>
      <Row>
        {mockData.map((Cardata, index)=>(
        <Cards
        key={index}
        id={Cardata.id}
        image={Cardata.image}
        title={Cardata.title}
        paragraph={Cardata.paragraph}
        price={Cardata.price}
        />
    ))}
      </Row>
      <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Coming soon!
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>FIRE BURGER</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Coming soon!
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
       <div className='divvy'>
       {/* <Link to="/" className="logo">
         <button className='home'>Home</button>
       </Link> */}
     </div>
     </>
  )
}
