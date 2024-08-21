import React from 'react';
import '../styles/Otherpages.css';
import { Link } from 'react-router-dom';

export default function Contact() {
    const handleSubmit = () => {
        alert("Thankyou for contacting us, we'll get back to you very soon.")
    }
    
    
  return (
    <>
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        We’d love to hear from you! Please fill out the form below, and we will get back to you as soon as possible.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
        <div className='btns_div'>
        <Link to="/" className="logo">
           <button className='homiess'>Home</button>
       </Link> 
           </div>
           </>
  );
}
