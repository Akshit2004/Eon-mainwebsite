import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ConsultationSection from "../../components/ConsultationSection/ConsultationSection";
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
      <section className="aqua-hero-section">
        <div className="aqua-hero-overlay">
          <h1>AQUA</h1>
        </div>
      </section>
      <section className="aqua-details-section">
        <div className="aqua-details-container">
          <div className="aqua-details-image-wrap">
            <img
              src={prodAqua1}
              alt="CREW Equipment Aqua"
              className="aqua-details-main-img"
            />
          </div>
          <div className="aqua-details-content">
            <div className="aqua-details-label">
              // ABOUT THIS PRODUCT
            </div>
            <h2 className="aqua-details-title">CREW Equipment – Aqua</h2>
            <p className="aqua-details-desc">
              Aqua is a Manpack CREW equipment which is suitable for handling threats emanating from WiFi and other ISM signals and hence can provide enhanced protection to troops involved in counter insurgency operations. Aqua equipment works from internal batteries with facility to easily change the battery in operational conditions. The system uses state of art Technology and can handle multiple threats simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="aqua-key-features-section">
        <div className="aqua-key-features-header">
          <div className="aqua-key-features-label">// KEY FEATURES</div>
          <h2 className="aqua-key-features-title">
            What makes <span style={{ fontWeight: 700 }}>AQUA</span> special
          </h2>
          <p className="aqua-key-features-desc">
            Aqua provides advanced protection for troops in counter-insurgency operations by neutralizing threats from WiFi and ISM signals, using state-of-the-art technology and supporting easy battery changes in the field.
          </p>
        </div>
        <div className="aqua-key-features-cards">
          <div className="aqua-key-feature-card">
            <h3 className="aqua-key-feature-title">WiFi & ISM Threat Protection</h3>
            <p className="aqua-key-feature-desc">
              Designed to counter threats from WiFi and other ISM signals, ensuring troop safety in modern electronic warfare environments.
            </p>
          </div>
          <div className="aqua-key-feature-card">
            <h3 className="aqua-key-feature-title">Manpack & Portable</h3>
            <p className="aqua-key-feature-desc">
              Lightweight and portable, suitable for rapid deployment and use in diverse operational conditions.
            </p>
          </div>
          <div className="aqua-key-feature-card">
            <h3 className="aqua-key-feature-title">Multiple Threat Handling</h3>
            <p className="aqua-key-feature-desc">
              Capable of handling multiple threats simultaneously with advanced technology.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="aqua-gallery-section">
        <div className="aqua-gallery-header">
          <div className="aqua-gallery-label">// PRODUCT GALLERY</div>
          <h2 className="aqua-gallery-title">
            Visual Showcase of Our<br />CREW Equipment – Aqua
          </h2>
        </div>
        <div className="aqua-gallery-images">
          <img src={prodAqua1} alt="Aqua Product 1" className="aqua-gallery-img" />
          <img src={prodAqua3} alt="Aqua Product 2" className="aqua-gallery-img" />
          <img src={prodAqua4} alt="Aqua Product 3" className="aqua-gallery-img" />
        </div>
      </section>

      {/* Consultation Section */}
      <ConsultationSection />

      <Footer />
    </>
  );
};

export default Aqua;
