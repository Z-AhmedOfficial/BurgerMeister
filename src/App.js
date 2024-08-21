import React from 'react'; 
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs';
import Order from './pages/Order';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Fullmenu from './pages/Fullmenu';
import Checkout from './pages/Checkout';
import Section3 from './pages/Home/Section3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/order" element={<Order />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Fullmenu />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sec3" element={<Section3 />} />
      </Routes>
    </Router>
  );
}

export default App;
