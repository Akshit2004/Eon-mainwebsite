import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Kavach.css";
import prodKavach1 from '../../assets/Products/Kavach/kavach1-min.JPG';
import prodKavach2 from '../../assets/Products/Kavach/kavach2-min.JPG';
import prodKavach3 from '../../assets/Products/Kavach/kavach3-min.JPG';
import prodKavach4 from '../../assets/Products/Kavach/kavach4-min.JPG';

const Kavach = () => {
  return (
    <>
      <Navbar />
      <section className="product-hero-section">
        <div className="product-hero-overlay">
          <h1>KAVACH</h1>
        </div>
      </section>
      <section className="product-details-section">
        <div className="product-details-container">
          <div className="product-details-image-wrap">
            <img
              src={prodKavach1}
              alt="Fire Control System Kavach"
              className="product-details-main-img"
            />
          </div>
          <div className="product-details-content">
            <div className="product-details-label">
              // ABOUT THIS PRODUCT
            </div>
            <h2 className="product-details-title">Fire Control System – Kavach</h2>
            <p className="product-details-desc">
              Kavach is deployed onboard Naval ships and is used as a counter against incoming missile threats. It is highly effective against search and target indication radars as Chaff is deployed in the threatened ship’s vicinity to confuse an enemy’s sensors by offering a number of false targets with the aim of delaying selection of a real target.
            </p>
            <p className="product-details-desc">
              The product is also effective against other types of threats during the target search phase. A threatened ship can surround itself with decoys, when missile attack is imminent. On the commencement of pre-programmed search of the target area it will select a decoy before reaching the threatened ship.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="product-key-features-section">
        <div className="product-key-features-header">
          <div className="product-key-features-label">// KEY FEATURES</div>
          <h2 className="product-key-features-title">
            What makes <span style={{ fontWeight: 700 }}>KAVACH</span> special
          </h2>
          <p className="product-key-features-desc">
            Kavach provides advanced protection for naval vessels by deploying chaff and decoys to counter missile and radar threats, ensuring the safety of the ship and its crew.
          </p>
        </div>
        <div className="product-key-features-cards">
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">Missile Countermeasure</h3>
            <p className="product-key-feature-desc">
              Deploys chaff to create false targets, confusing enemy radars and delaying missile targeting.
            </p>
          </div>
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">Decoy Deployment</h3>
            <p className="product-key-feature-desc">
              Can surround the ship with decoys during imminent missile attacks for enhanced protection.
            </p>
          </div>
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">Automated Response</h3>
            <p className="product-key-feature-desc">
              Initiates pre-programmed search and decoy selection automatically during threat phases.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="product-gallery-section">
        <div className="product-gallery-header">
          <div className="product-gallery-label">// PRODUCT GALLERY</div>
          <h2 className="product-gallery-title">
            Visual Showcase of Our<br />Fire Control System – Kavach
          </h2>
        </div>
        <div className="product-gallery-images">
          <img src={prodKavach1} alt="Kavach Product 1" className="product-gallery-img" />
          <img src={prodKavach2} alt="Kavach Product 2" className="product-gallery-img" />
          <img src={prodKavach3} alt="Kavach Product 3" className="product-gallery-img" />
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

export default Kavach;
