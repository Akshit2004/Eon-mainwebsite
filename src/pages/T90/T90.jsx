import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./T90.css";
import prodT90_1 from '../../assets/Products/fcst90/prod2ACU1-min.JPG';
import prodT90_2 from '../../assets/Products/fcst90/prod2ACU2-min.JPG';
import prodT90_3 from '../../assets/Products/fcst90/prod2PU1-min.JPG';

const T90 = () => {
  return (
    <>
      <Navbar />
      <section className="product-hero-section">
        <div className="product-hero-overlay">
          <h1>FIRE CONTROL SYSTEM T90</h1>
        </div>
      </section>
      <section className="product-details-section">
        <div className="product-details-container">
          <div className="product-details-image-wrap">
            <img
              src={prodT90_1}
              alt="Fire Control System T90"
              className="product-details-main-img"
            />
          </div>
          <div className="product-details-content">
            <div className="product-details-label">
              // ABOUT THIS PRODUCT
            </div>
            <h2 className="product-details-title">Fire Control System T90 – Power Unit (PU) & Automatic Control Unit (ACU)</h2>
            <p className="product-details-desc">
              Both these units are part of the FCS of T90. The unit enables the gunner to simply aim the main armament at an enemy tank and press a button to independently track the target, traversing the turret and raising or lowering the main armament accordingly.
            </p>
            <p className="product-details-desc">
              Eon is currently the only Indian company which has been granted the Bulk production clearance based on the extensive lab testing and field trials. Till now 21 Power units and 15 ACUs have been supplied to the customer.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="product-key-features-section">
        <div className="product-key-features-header">
          <div className="product-key-features-label">// KEY FEATURES</div>
          <h2 className="product-key-features-title">
            What makes <span style={{ fontWeight: 700 }}>T90 FCS</span> special
          </h2>
          <p className="product-key-features-desc">
            The T90 Fire Control System provides advanced target tracking and control, enabling precise and efficient operation of the tank's main armament.
          </p>
        </div>
        <div className="product-key-features-cards">
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">Automatic Target Tracking</h3>
            <p className="product-key-feature-desc">
              Allows the gunner to lock onto and track enemy targets with minimal manual intervention.
            </p>
          </div>
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">Bulk Production Clearance</h3>
            <p className="product-key-feature-desc">
              Only Indian company with bulk production clearance after extensive testing and trials.
            </p>
          </div>
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">Supplied Units</h3>
            <p className="product-key-feature-desc">
              21 Power Units and 15 ACUs delivered to the customer, demonstrating proven reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="product-gallery-section">
        <div className="product-gallery-header">
          <div className="product-gallery-label">// PRODUCT GALLERY</div>
          <h2 className="product-gallery-title">
            Visual Showcase of Our<br />Fire Control System T90
          </h2>
        </div>
        <div className="product-gallery-images">
          <img src={prodT90_1} alt="T90 Product 1" className="product-gallery-img" />
          <img src={prodT90_2} alt="T90 Product 2" className="product-gallery-img" />
          <img src={prodT90_3} alt="T90 Product 3" className="product-gallery-img" />
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

export default T90;
