import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ConsultationSection from "../../components/ConsultationSection/ConsultationSection";
import "./Libra.css";
import prodLibra1 from '../../assets/Products/libra/prod3libra1-min.JPG';
import prodLibra2 from '../../assets/Products/libra/prod3libra2-min.JPG';
import prodLibra3 from '../../assets/Products/libra/prod3libra3-min.JPG';
import prodLibra4 from '../../assets/Products/libra/prod3libra4-min.JPG';

const Libra = () => {
  return (
    <>
      <Navbar />
      <section className="libra-hero-section">
        <div className="libra-hero-overlay">
          <h1>LIBRA</h1>
        </div>
      </section>
      <section className="libra-details-section">
        <div className="libra-details-container">
          <div className="libra-details-image-wrap">
            <img
              src={prodLibra1}
              alt="CREW Libra"
              className="libra-details-main-img"
            />
          </div>
          <div className="libra-details-content">
            <div className="libra-details-label">
              // ABOUT THIS PRODUCT
            </div>
            <h2 className="libra-details-title">CREW – Libra</h2>
            <p className="libra-details-desc">
              Libra is a Manpack counter RCIED Electronic Warfare System which is suitable for ROP as well as convoy protection duties. This equipment can act as a Pre Initiator as well as a neutraliser to provide enhanced protection to convoys and to movements to newer Areas of Responsibility.
            </p>
            <p className="libra-details-desc">
              The subsystems are designed on the concept of Software Designed Radio and combine the power of software with the reach of wireless to deliver maximum value to the user. The equipment works from an internal battery with easy provision of changing the battery set and fast rate of charging.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="libra-key-features-section">
        <div className="libra-key-features-header">
          <div className="libra-key-features-label">// KEY FEATURES</div>
          <h2 className="libra-key-features-title">
            What makes <span style={{ fontWeight: 700 }}>LIBRA</span> special
          </h2>
          <p className="libra-key-features-desc">
            Libra provides advanced convoy and area protection by neutralizing RCIED threats, leveraging software-defined radio technology for flexible and reliable operation.
          </p>
        </div>
        <div className="libra-key-features-cards">
          <div className="libra-key-feature-card">
            <h3 className="libra-key-feature-title">RCIED Neutralization</h3>
            <p className="libra-key-feature-desc">
              Acts as both a pre-initiator and neutraliser to protect convoys and new areas of responsibility from RCIED threats.
            </p>
          </div>
          <div className="libra-key-feature-card">
            <h3 className="libra-key-feature-title">Software Defined Radio</h3>
            <p className="libra-key-feature-desc">
              Utilizes software-defined radio subsystems for maximum flexibility and performance.
            </p>
          </div>
          <div className="libra-key-feature-card">
            <h3 className="libra-key-feature-title">Easy Battery Management</h3>
            <p className="libra-key-feature-desc">
              Internal battery with easy change and fast charging for uninterrupted operation.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="libra-gallery-section">
        <div className="libra-gallery-header">
          <div className="libra-gallery-label">// PRODUCT GALLERY</div>
          <h2 className="libra-gallery-title">
            Visual Showcase of Our<br />CREW – Libra
          </h2>
        </div>
        <div className="libra-gallery-images">
          <img src={prodLibra1} alt="Libra Product 1" className="libra-gallery-img" />
          <img src={prodLibra2} alt="Libra Product 2" className="libra-gallery-img" />
          <img src={prodLibra3} alt="Libra Product 3" className="libra-gallery-img" />
          <img src={prodLibra4} alt="Libra Product 4" className="libra-gallery-img" />
        </div>
      </section>

      {/* Consultation Section */}
      <ConsultationSection />

      <Footer />
    </>
  );
};

export default Libra;
