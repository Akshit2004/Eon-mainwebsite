import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ConsultationSection from "../../components/ConsultationSection/ConsultationSection";
import "./LEO.css";
import prodLeo1 from '../../assets/Products/leo/prod5leo1-min.JPG';
import prodLeo2 from '../../assets/Products/leo/prod5leo2-min.JPG';
import prodLeo3 from '../../assets/Products/leo/prod5leo3-min.JPG';

const LEO = () => {
  return (
    <>
      <Navbar />
      <section className="leo-hero-section">
        <div className="leo-hero-overlay">
          <h1>LEO</h1>
        </div>
      </section>
      <section className="leo-details-section">
        <div className="leo-details-container">
          <div className="leo-details-image-wrap">
            <img
              src={prodLeo1}
              alt="CREW Equipment Leo"
              className="leo-details-main-img"
            />
          </div>
          <div className="leo-details-content">
            <div className="leo-details-label">
              // ABOUT THIS PRODUCT
            </div>
            <h2 className="leo-details-title">CREW Equipment – Leo</h2>
            <p className="leo-details-desc">
              Leo is a Manpack CREW system suitable for Long Range Patrols, Special ops, and convoy protection duties. This equipment provides an effective solution against threats using public networks.
            </p>
            <p className="leo-details-desc">
              The equipment works from internal batteries with easy provision of changing the battery and fast recharging. Leo covers the four bands of interest simultaneously. Depending on necessity and environmental conditions, the band selection can be varied or, if required, a particular channel can be switched off. The wired Remote Control Device enables the soldier to switch on the system only when entering vulnerable areas.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="leo-key-features-section">
        <div className="leo-key-features-header">
          <div className="leo-key-features-label">// KEY FEATURES</div>
          <h2 className="leo-key-features-title">
            What makes <span style={{ fontWeight: 700 }}>LEO</span> special
          </h2>
          <p className="leo-key-features-desc">
            LEO provides advanced protection for patrols and convoys by neutralizing threats from public networks, supporting multiple bands, and offering flexible operational control for soldiers in the field.
          </p>
        </div>
        <div className="leo-key-features-cards">
          <div className="leo-key-feature-card">
            <h3 className="leo-key-feature-title">Multi-Band Coverage</h3>
            <p className="leo-key-feature-desc">
              Covers four bands of interest simultaneously, with flexible band/channel selection based on operational needs.
            </p>
          </div>
          <div className="leo-key-feature-card">
            <h3 className="leo-key-feature-title">Manpack & Portable</h3>
            <p className="leo-key-feature-desc">
              Designed for long range patrols, special ops, and convoy protection with easy battery change and fast recharging.
            </p>
          </div>
          <div className="leo-key-feature-card">
            <h3 className="leo-key-feature-title">Remote Control Device</h3>
            <p className="leo-key-feature-desc">
              Wired remote enables the system to be switched on only in vulnerable areas, optimizing operational safety and battery life.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="leo-gallery-section">
        <div className="leo-gallery-header">
          <div className="leo-gallery-label">// PRODUCT GALLERY</div>
          <h2 className="leo-gallery-title">
            Visual Showcase of Our<br />CREW Equipment – Leo
          </h2>
        </div>
        <div className="leo-gallery-images">
          <img src={prodLeo1} alt="Leo Product 1" className="leo-gallery-img" />
          <img src={prodLeo2} alt="Leo Product 2" className="leo-gallery-img" />
          <img src={prodLeo3} alt="Leo Product 3" className="leo-gallery-img" />
        </div>
      </section>

      {/* Consultation Section */}
      <ConsultationSection />

      <Footer />
    </>
  );
};

export default LEO;
