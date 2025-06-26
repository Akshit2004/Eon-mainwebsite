import React from 'react';
import './ConsultationSection.css';

const ConsultationSection = () => (
  <section className="consultation-section">
    <div className="consultation-background"></div>
    <div className="hero-overlay"></div>
    <div className="container">
      <div className="consultation-content">
        <div className="consultation-tagline">//Drop us a line! We are here to answer your questions 24/7</div>
        <h2 className="consultation-title">NEED A CONSULTATION?</h2>
        <button className="consultation-cta">
          CONTACT US
        </button>
      </div>
    </div>
  </section>
);

export default ConsultationSection;
