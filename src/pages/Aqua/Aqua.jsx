import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Aqua.css";
import prodAqua1 from '../../assets/Products/aqua/prod6aqua1-min.JPG';
import prodAqua3 from '../../assets/Products/aqua/prod6aqua3-min.JPG';
import prodAqua4 from '../../assets/Products/aqua/prod6aqua4-min.JPG';
import prodAqua5 from '../../assets/Products/aqua/prod6aqua5-min.JPG';
import prodAqua6 from '../../assets/Products/aqua/prod6aqua6-min.JPG';

const Aqua = () => {
  return (
    <>
      <Navbar />
      <section className="product-hero-section">
        <div className="product-hero-overlay">
          <h1>AQUA</h1>
        </div>
      </section>
      <section className="product-details-section">
        <div className="product-details-container">
          <div className="product-details-image-wrap">
            <img
              src={prodAqua1}
              alt="CREW Equipment Aqua"
              className="product-details-main-img"
            />
          </div>
          <div className="product-details-content">
            <div className="product-details-label">
              // ABOUT THIS PRODUCT
            </div>
            <h2 className="product-details-title">CREW Equipment – Aqua</h2>
            <p className="product-details-desc">
              Aqua is a Manpack CREW equipment which is suitable for handling threats emanating from WiFi and other ISM signals and hence can provide enhanced protection to troops involved in counter insurgency operations. Aqua equipment works from internal batteries with facility to easily change the battery in operational conditions. The system uses state of art Technology and can handle multiple threats simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="product-key-features-section">
        <div className="product-key-features-header">
          <div className="product-key-features-label">// KEY FEATURES</div>
          <h2 className="product-key-features-title">
            What makes <span style={{ fontWeight: 700 }}>AQUA</span> special
          </h2>
          <p className="product-key-features-desc">
            Aqua provides advanced protection for troops in counter-insurgency operations by neutralizing threats from WiFi and ISM signals, using state-of-the-art technology and supporting easy battery changes in the field.
          </p>
        </div>
        <div className="product-key-features-cards">
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">WiFi & ISM Threat Protection</h3>
            <p className="product-key-feature-desc">
              Designed to counter threats from WiFi and other ISM signals, ensuring troop safety in modern electronic warfare environments.
            </p>
          </div>
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">Manpack & Portable</h3>
            <p className="product-key-feature-desc">
              Lightweight and portable, suitable for rapid deployment and use in diverse operational conditions.
            </p>
          </div>
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">Multiple Threat Handling</h3>
            <p className="product-key-feature-desc">
              Capable of handling multiple threats simultaneously with advanced technology.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="product-gallery-section">
        <div className="product-gallery-header">
          <div className="product-gallery-label">// PRODUCT GALLERY</div>
          <h2 className="product-gallery-title">
            Visual Showcase of Our<br />CREW Equipment – Aqua
          </h2>
        </div>
        <div className="product-gallery-images">
          <img src={prodAqua1} alt="Aqua Product 1" className="product-gallery-img" />
          <img src={prodAqua3} alt="Aqua Product 2" className="product-gallery-img" />
          <img src={prodAqua4} alt="Aqua Product 3" className="product-gallery-img" />
          <img src={prodAqua5} alt="Aqua Product 4" className="product-gallery-img" />
          <img src={prodAqua6} alt="Aqua Product 5" className="product-gallery-img" />
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

export default Aqua;
