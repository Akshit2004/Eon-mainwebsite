import React from 'react';
import Navbar from '../../components/Navbar';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="hero-text">
            <div className="tagline">// INNOVATION AT ITS PEAK</div>
            <h1 className="hero-title">
              Defending Those Who<br />
              Defend Us!
            </h1>
            <p className="hero-description">
              Leading the way in advanced technology solutions for defense and security applications.
              Our cutting-edge innovations protect those who protect our nation.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Company Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Company</h2>
              <h3 className="about-heading">What We Actually Do</h3>
              <p className="about-description">
                We are a leading technology company specializing in advanced defense and security solutions. 
                Our cutting-edge innovations and state-of-the-art technology help protect those who protect our nation. 
                With years of expertise in the field, we deliver reliable, secure, and robust solutions that meet 
                the highest standards of quality and performance.
              </p>              <p className="about-description">
                Our team of dedicated professionals works tirelessly to develop next-generation technologies 
                that address the evolving challenges in defense and security sectors. From advanced electronics 
                to sophisticated software solutions, we provide comprehensive support to our clients.
              </p>
              <div className="about-cta">
                <p className="about-cta-text">
                  Ready to discover how our innovative solutions can transform your defense and security operations? 
                  Explore our comprehensive range of services and cutting-edge technologies.
                </p>
                <a href="#services" className="learn-more-link">
                  <span>LEARN MORE</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Technology and Innovation" 
                className="about-img"
              />
            </div>
          </div>        </div>
      </section>
    </div>
  );
};

export default LandingPage;
