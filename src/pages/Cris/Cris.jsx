import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ConsultationSection from "../../components/ConsultationSection/ConsultationSection";
import "./Cris.css";
import prodCris1 from '../../assets/Products/cris/prod4cris1-min.JPG';
import prodCris2 from '../../assets/Products/cris/prod4cris2-min.JPG';
import prodCris4 from '../../assets/Products/cris/prod4cris4-min.JPG';
import product6 from  '../../assets/Products/combinedprods-min.JPG';

const Cris = () => {
  return (
    <>
      <Navbar />
      <section className="cris-hero-section">
        <div className="cris-hero-overlay">
          <h1>CRIS</h1>
        </div>
      </section>
      <section className="cris-details-section">
        <div className="cris-details-container">
          <div className="cris-details-image-wrap">
            <img
              src={prodCris1}
              alt="CREW CRIS"
              className="cris-details-main-img"
            />
          </div>
          <div className="cris-details-content">
            <div className="cris-details-label">
              // ABOUT THIS PRODUCT
            </div>
            <h2 className="cris-details-title">CREW – CRIS</h2>
            <p className="cris-details-desc">
              CRIS is a handheld counter RCIED Electronic Warfare Equipment which neutralises the militant deployed RCIEDs within its range. Weighing just 1200 grams, CRIS is ideal for the protection of individual soldier on road opening or patrol duties. It is also useful to give protection to the moving convoys.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="cris-key-features-section">
        <div className="cris-key-features-header">
          <div className="cris-key-features-label">// KEY FEATURES</div>
          <h2 className="cris-key-features-title">
            What makes <span style={{ fontWeight: 700 }}>CRIS</span> special
          </h2>
          <p className="cris-key-features-desc">
            CRIS provides lightweight, portable protection against RCIED threats for individual soldiers and convoys, ensuring safety during patrol and movement.
          </p>
        </div>
        <div className="cris-key-features-cards">
          <div className="cris-key-feature-card">
            <h3 className="cris-key-feature-title">Handheld Protection</h3>
            <p className="cris-key-feature-desc">
              Compact and lightweight (1200g), ideal for individual soldiers on patrol or road opening duties.
            </p>
          </div>
          <div className="cris-key-feature-card">
            <h3 className="cris-key-feature-title">RCIED Neutralization</h3>
            <p className="cris-key-feature-desc">
              Effectively neutralizes militant-deployed RCIEDs within its operational range.
            </p>
          </div>
          <div className="cris-key-feature-card">
            <h3 className="cris-key-feature-title">Convoy Protection</h3>
            <p className="cris-key-feature-desc">
              Provides additional protection to moving convoys against electronic threats.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="cris-gallery-section">
        <div className="cris-gallery-header">
          <div className="cris-gallery-label">// PRODUCT GALLERY</div>
          <h2 className="cris-gallery-title">
            Visual Showcase of Our<br />CREW – CRIS
          </h2>
        </div>
        <div className="cris-gallery-images">
          <img src={prodCris1} alt="Cris Product 1" className="cris-gallery-img" />
          <img src={prodCris2} alt="Cris Product 2" className="cris-gallery-img" />
          <img src={prodCris4} alt="Cris Product 3" className="cris-gallery-img" />
        </div>
      </section>

      {/* Consultation Section */}
      <ConsultationSection />

      <Footer />
    </>
  );
};

export default Cris;
