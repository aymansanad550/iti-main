import React from 'react';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer_container">
        <div className="footer_col">
          <Link className='logo' to="/">
            <TiShoppingCart className="logo_icon" />
            <span className="logo_text">ABY</span>
          </Link>
          <p className="footer_desc">Your one-stop shop for all your needs. We provide the best products at the most affordable prices.</p>
        </div>

        <div className="footer_col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">All Products</Link></li>
          </ul>
        </div>

        <div className="footer_col">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/">FAQ</Link></li>
            <li><Link to="/">Returns & Refunds</Link></li>
            <li><Link to="/">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer_col">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form className="newsletter_form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social_icons">
            <a href="https://www.facebook.com/ayman.sanad.35" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://x.com/aymansanad550" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/aymansanad1/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/aymansanad/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} ABY E-Commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
