import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AJ Money Makers</h3>
            <p>Your trusted digital marketing partner in Los Angeles.</p>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link social-facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com" className="social-link social-x" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://instagram.com" className="social-link social-instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="social-link social-linkedin" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> Los Angeles, CA
              </li>
              <li>
                <i className="fas fa-phone"></i> (559) 874-8874
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@ajmoneymakers.com
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 AJ Money Makers. All rights reserved. Founded by Julian Rosario and Angie Rosso.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

