import React from 'react';
import { FaLinkedin, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaTwitter } from 'react-icons/fa';
import toast from 'react-hot-toast';
import './contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div className="contact_page">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="contact_subtitle">We'd love to hear from you. Please fill out this form or get in touch using the details below.</p>
        
        <div className="contact_content">
          <div className="contact_info">
            <h3>Get In Touch</h3>
            <div className="info_item">
              <FaLinkedin className="info_icon" />
              <div>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/aymansanad/" target="_blank" rel="noopener noreferrer">Ayman Sanad</a>
              </div>
            </div>

            <div className="info_item">
              <FaFacebook className="info_icon" />
              <div>
                <h4>Facebook</h4>
                <a href="https://www.facebook.com/ayman.sanad.35" target="_blank" rel="noopener noreferrer">Ayman Sanad</a>
              </div>
            </div>

            <div className="info_item">
              <FaInstagram className="info_icon" />
              <div>
                <h4>Instagram</h4>
                <a href="https://www.instagram.com/aymansanad1/" target="_blank" rel="noopener noreferrer">Ayman Sanad</a>
              </div>
            </div>

            <div className="info_item">
              <FaTwitter className="info_icon" />
              <div>
                <h4>X (Twitter)</h4>
                <a href="https://x.com/aymansanad550" target="_blank" rel="noopener noreferrer">Ayman Sanad</a>
              </div>
            </div>
            
            <div className="info_item">
              <FaEnvelope className="info_icon" />
              <div>
                <h4>Email</h4>
                <p>aymansanad550@gmail.com</p>
              </div>
            </div>

            <div className="info_item">
              <FaPhoneAlt className="info_icon" />
              <div>
                <h4>Phone</h4>
                <p>01095123769</p>
              </div>
            </div>

            <div className="info_item">
              <FaMapMarkerAlt className="info_icon" />
              <div>
                <h4>Address</h4>
                <p>Cairo, Egypt</p>
              </div>
            </div>
          </div>

          <div className="contact_form_container">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit} className="contact_form">
              <div className="form_group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form_group">
                <label>Your Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form_group">
                <label>Subject</label>
                <input type="text" placeholder="Subject of your message" required />
              </div>
              <div className="form_group">
                <label>Message</label>
                <textarea placeholder="Write your message here..." required></textarea>
              </div>
              <button type="submit" className="submit_btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
