import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Cris.css";
import prodCris1 from '../../assets/Products/cris/prod4cris1-min.JPG';
import prodCris2 from '../../assets/Products/cris/prod4cris2-min.JPG';
import prodCris4 from '../../assets/Products/cris/prod4cris4-min.JPG';

const Cris = () => {
  return (
    <>
      <Navbar />
      <section className="product-hero-section">
        <div className="product-hero-overlay">
          <h1>CRIS</h1>
        </div>
      </section>
      <section className="product-details-section">
        <div className="product-details-container">
          <div className="product-details-image-wrap">
            <img
              src={prodCris1}
              alt="CREW CRIS"
              className="product-details-main-img"
            />
          </div>
          <div className="product-details-content">
            <div className="product-details-label">
              // ABOUT THIS PRODUCT
            </div>
            <h2 className="product-details-title">CREW – CRIS</h2>
            <p className="product-details-desc">
              CRIS is a handheld counter RCIED Electronic Warfare Equipment which neutralises the militant deployed RCIEDs within its range. Weighing just 1200 grams, CRIS is ideal for the protection of individual soldier on road opening or patrol duties. It is also useful to give protection to the moving convoys.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="product-key-features-section">
        <div className="product-key-features-header">
          <div className="product-key-features-label">// KEY FEATURES</div>
          <h2 className="product-key-features-title">
            What makes <span style={{ fontWeight: 700 }}>CRIS</span> special
          </h2>
          <p className="product-key-features-desc">
            CRIS provides lightweight, portable protection against RCIED threats for individual soldiers and convoys, ensuring safety during patrol and movement.
          </p>
        </div>
        <div className="product-key-features-cards">
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">Handheld Protection</h3>
            <p className="product-key-feature-desc">
              Compact and lightweight (1200g), ideal for individual soldiers on patrol or road opening duties.
            </p>
          </div>
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">RCIED Neutralization</h3>
            <p className="product-key-feature-desc">
              Effectively neutralizes militant-deployed RCIEDs within its operational range.
            </p>
          </div>
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">Convoy Protection</h3>
            <p className="product-key-feature-desc">
              Provides additional protection to moving convoys against electronic threats.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="product-gallery-section">
        <div className="product-gallery-header">
          <div className="product-gallery-label">// PRODUCT GALLERY</div>
          <h2 className="product-gallery-title">
            Visual Showcase of Our<br />CREW – CRIS
          </h2>
        </div>
        <div className="product-gallery-images">
          <img src={prodCris1} alt="Cris Product 1" className="product-gallery-img" />
          <img src={prodCris2} alt="Cris Product 2" className="product-gallery-img" />
          <img src={prodCris4} alt="Cris Product 3" className="product-gallery-img" />
        </div>
      </section>

      {/* Consultation Section */}
      <section className="consultation-section">
        <div className="consultation-bg">
          <div className="consultation-overlay">
            <div className="consultation-content">
              <div className="consultation-label">// Drop us a line! We are here to answer your questions 24/7</div>
              <h2 className="consultation-title">NEED A CONSULTATION?</h2>
              <button className="consultation-btn">CONTACT US</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cris;
