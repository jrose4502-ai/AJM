import React, { useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const sectionRef = useRef(null);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About AJ Money Makers</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Your Success is Our Mission</h3>
            <p>
              Based in the heart of Los Angeles, AJ Money Makers is a premier digital marketing 
              agency dedicated to helping businesses thrive in the digital landscape. Founded by 
              Julian Rosario and Angie Rosso, we bring passion, expertise, and innovative 
              strategies to every project.
            </p>
            <p>
              We specialize in crafting tailored marketing solutions that drive real results. 
              From SEO and social media management to PPC campaigns and content marketing, 
              we're your partner in growth.
            </p>
            <div className="founders">
              <div className="founder-card">
                <div className="founder-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h4>Julian Rosario</h4>
                <p>Co-Founder</p>
              </div>
              <div className="founder-card">
                <div className="founder-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h4>Angie Rosso</h4>
                <p>Co-Founder</p>
              </div>
            </div>
          </div>
          <div className="approach-section">
            <h3 className="approach-title">Our Approach</h3>
            <p className="approach-intro">
              We build from the bottom line up. First, we design an offer that your customers 
              actually want. Then we launch fast, test weekly, and scale what works.
            </p>
            <div className="approach-cards">
              <div className="approach-card">
                <div className="approach-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h4>Data-Driven Decisions</h4>
                <p>
                  Every decision is tied to data you can see: leads, calls, bookings, and revenue.
                </p>
              </div>
              <div className="approach-card">
                <div className="approach-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h4>Fast Launch & Test</h4>
                <p>
                  We launch quickly, test weekly, and continuously optimize what works best for your business.
                </p>
              </div>
              <div className="approach-card">
                <div className="approach-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>You Own Everything</h4>
                <p>
                  You own the accounts, the assets, and the results. Complete transparency and control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

