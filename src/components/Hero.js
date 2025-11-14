import React from 'react';
import '../styles/Hero.css';
import websiteVideo from '../assets/videos/finished vid.mp4';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={websiteVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title fade-in">Transform Your Digital Presence</h1>
          <p className="hero-subtitle fade-in-delay">
            Elevate your brand with cutting-edge digital marketing strategies
          </p>
          <div className="hero-buttons fade-in-delay-2">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn btn-primary"
            >
              Get Started
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="btn btn-secondary"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

