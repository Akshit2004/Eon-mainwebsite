import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ConsultationSection from "../../components/ConsultationSection/ConsultationSection";
import "./Kavach.css";
import prodKavach1 from '../../assets/Products/Kavach/kavach1-min.JPG';
import prodKavach2 from '../../assets/Products/Kavach/kavach2-min.JPG';
import prodKavach3 from '../../assets/Products/Kavach/kavach3-min.JPG';
import prodKavach4 from '../../assets/Products/Kavach/kavach4-min.JPG';

const Kavach = () => {
  return (
    <>
      <Navbar />
      <section className="kavach-hero-section">
        <div className="kavach-hero-overlay">
          <h1>KAVACH</h1>
        </div>
      </section>
      <section className="kavach-details-section">
        <div className="kavach-details-container">
          <div className="kavach-details-image-wrap">
            <img
              src={prodKavach1}
              alt="Fire Control System Kavach"
              className="kavach-details-main-img"
            />
          </div>
          <div className="kavach-details-content">
            <div className="kavach-details-label">
              // ABOUT THIS PRODUCT
            </div>
            <h2 className="kavach-details-title">Fire Control System – Kavach</h2>
            <p className="kavach-details-desc">
              Kavach is deployed onboard Naval ships and is used as a counter against incoming missile threats. It is highly effective against search and target indication radars as Chaff is deployed in the threatened ship’s vicinity to confuse an enemy’s sensors by offering a number of false targets with the aim of delaying selection of a real target.
            </p>
            <p className="kavach-details-desc">
              The product is also effective against other types of threats during the target search phase. A threatened ship can surround itself with decoys, when missile attack is imminent. On the commencement of pre-programmed search of the target area it will select a decoy before reaching the threatened ship.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="kavach-key-features-section">
        <div className="kavach-key-features-header">
          <div className="kavach-key-features-label">// KEY FEATURES</div>
          <h2 className="kavach-key-features-title">
            What makes <span style={{ fontWeight: 700 }}>KAVACH</span> special
          </h2>
          <p className="kavach-key-features-desc">
            Kavach provides advanced protection for naval vessels by deploying chaff and decoys to counter missile and radar threats, ensuring the safety of the ship and its crew.
          </p>
        </div>
        <div className="kavach-key-features-cards">
          <div className="kavach-key-feature-card">
            <h3 className="kavach-key-feature-title">Missile Countermeasure</h3>
            <p className="kavach-key-feature-desc">
              Deploys chaff to create false targets, confusing enemy radars and delaying missile targeting.
            </p>
          </div>
          <div className="kavach-key-feature-card">
            <h3 className="kavach-key-feature-title">Decoy Deployment</h3>
            <p className="kavach-key-feature-desc">
              Can surround the ship with decoys during imminent missile attacks for enhanced protection.
            </p>
          </div>
          <div className="kavach-key-feature-card">
            <h3 className="kavach-key-feature-title">Automated Response</h3>
            <p className="kavach-key-feature-desc">
              Initiates pre-programmed search and decoy selection automatically during threat phases.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="kavach-gallery-section">
        <div className="kavach-gallery-header">
          <div className="kavach-gallery-label">// PRODUCT GALLERY</div>
          <h2 className="kavach-gallery-title">
            Visual Showcase of Our<br />Fire Control System – Kavach
          </h2>
        </div>
        <div className="kavach-gallery-images">
          <img src={prodKavach1} alt="Kavach Product 1" className="kavach-gallery-img" />
          <img src={prodKavach2} alt="Kavach Product 2" className="kavach-gallery-img" />
          <img src={prodKavach3} alt="Kavach Product 3" className="kavach-gallery-img" />
          <img src={prodKavach4} alt="Kavach Product 4" className="kavach-gallery-img" />
        </div>
      </section>

      {/* Consultation Section */}
      <ConsultationSection />

      <Footer />
    </>
  );
};

export default Kavach;
