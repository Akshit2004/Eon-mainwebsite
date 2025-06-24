import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Libra.css";
import prodLibra1 from '../../assets/Products/libra/prod3libra1-min.JPG';
import prodLibra2 from '../../assets/Products/libra/prod3libra2-min.JPG';
import prodLibra3 from '../../assets/Products/libra/prod3libra3-min.JPG';
import prodLibra4 from '../../assets/Products/libra/prod3libra4-min.JPG';

const Libra = () => {
  return (
    <>
      <Navbar />
      <section className="product-hero-section">
        <div className="product-hero-overlay">
          <h1>LIBRA</h1>
        </div>
      </section>
      <section className="product-details-section">
        <div className="product-details-container">
          <div className="product-details-image-wrap">
            <img
              src={prodLibra1}
              alt="CREW Libra"
              className="product-details-main-img"
            />
          </div>
          <div className="product-details-content">
            <div className="product-details-label">
              // ABOUT THIS PRODUCT
            </div>
            <h2 className="product-details-title">CREW – Libra</h2>
            <p className="product-details-desc">
              Libra is a Manpack counter RCIED Electronic Warfare System which is suitable for ROP as well as convoy protection duties. This equipment can act as a Pre Initiator as well as a neutraliser to provide enhanced protection to convoys and to movements to newer Areas of Responsibility.
            </p>
            <p className="product-details-desc">
              The subsystems are designed on the concept of Software Designed Radio and combine the power of software with the reach of wireless to deliver maximum value to the user. The equipment works from an internal battery with easy provision of changing the battery set and fast rate of charging.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="product-key-features-section">
        <div className="product-key-features-header">
          <div className="product-key-features-label">// KEY FEATURES</div>
          <h2 className="product-key-features-title">
            What makes <span style={{ fontWeight: 700 }}>LIBRA</span> special
          </h2>
          <p className="product-key-features-desc">
            Libra provides advanced convoy and area protection by neutralizing RCIED threats, leveraging software-defined radio technology for flexible and reliable operation.
          </p>
        </div>
        <div className="product-key-features-cards">
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">RCIED Neutralization</h3>
            <p className="product-key-feature-desc">
              Acts as both a pre-initiator and neutraliser to protect convoys and new areas of responsibility from RCIED threats.
            </p>
          </div>
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">Software Defined Radio</h3>
            <p className="product-key-feature-desc">
              Utilizes software-defined radio subsystems for maximum flexibility and performance.
            </p>
          </div>
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">Easy Battery Management</h3>
            <p className="product-key-feature-desc">
              Internal battery with easy change and fast charging for uninterrupted operation.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="product-gallery-section">
        <div className="product-gallery-header">
          <div className="product-gallery-label">// PRODUCT GALLERY</div>
          <h2 className="product-gallery-title">
            Visual Showcase of Our<br />CREW – Libra
          </h2>
        </div>
        <div className="product-gallery-images">
          <img src={prodLibra1} alt="Libra Product 1" className="product-gallery-img" />
          <img src={prodLibra2} alt="Libra Product 2" className="product-gallery-img" />
          <img src={prodLibra3} alt="Libra Product 3" className="product-gallery-img" />
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

export default Libra;
