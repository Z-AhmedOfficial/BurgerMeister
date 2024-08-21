import React from 'react';
import "../styles/Otherpages.css";
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Secret to Perfect Burgers",
    summary: "Discover the secrets behind our delicious burgers and how we use premium ingredients to make every bite unforgettable.",
    date: "August 10, 2024",
    link: "https://theburgerblog.com/"
  },
  {
    id: 2,
    title: "The Evolution of Burger Meister",
    summary: "Take a journey through our history and see how Burger Meister has grown from a small food truck to a local favorite.",
    date: "July 20, 2024",
    link: "https://theburgerblog.com/"
  },
  {
    id: 3,
    title: "Why Local Ingredients Matter",
    summary: "Learn about the importance of sourcing locally and how it impacts the quality of our food and supports our community.",
    date: "June 15, 2024",
     link: "https://theburgerblog.com/"
  }
];

export default function Blog() {
  return (
    <div className="blog">
      <div className="blog-container">
        <h1 className="blog-title">Our Blog</h1>
        <div className="blog-posts">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-post">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-date">{post.date}</p>
              <p className="post-summary">{post.summary}</p>
              <a href={post.link} className="read-more">Read More</a>
            </div>
          ))}
        </div>
      </div>
      <div className='btn_div'>
         <Link to="/" className="logo">
            <button className='homie_new'>Home</button>
        </Link> 
            </div>
    </div>
  );
}
