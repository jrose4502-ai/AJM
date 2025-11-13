import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const gradientStyle = {
    background: `linear-gradient(${135 + mousePos.x * 50}deg, #ffffff 0%, #fef2f2 ${50 + mousePos.y * 20}%, #fee2e2 100%)`
  };

  return (
    <section id="home" className="hero" style={gradientStyle}>
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
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

