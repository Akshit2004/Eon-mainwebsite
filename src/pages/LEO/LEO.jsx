import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./LEO.css";
import prodAqua from '../../assets/Products/aqua/prod6aqua1-min.JPG';
import prodKavach from '../../assets/Products/Kavach/kavach1-min.JPG';
import prodT90 from '../../assets/Products/fcst90/prod2ACU1-min.JPG';
import prodLeo from '../../assets/Products/leo/prod5leo1-min.JPG';
import prodLeo1 from '../../assets/Products/leo/prod5leo1-min.JPG';
import prodLeo2 from '../../assets/Products/leo/prod5leo2-min.JPG';
import prodLeo3 from '../../assets/Products/leo/prod5leo3-min.JPG';
import prodLibra from '../../assets/Products/libra/prod3libra1-min.JPG';
import prodCris from '../../assets/Products/cris/prod4cris1-min.JPG';

const LEO = () => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add("dragging");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove("dragging");
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  // Scroll buttons
  const scrollByAmount = (amount) => {
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <section className="leo-hero-section">
        <div className="leo-hero-overlay">
          <img src={prodLeo} alt="LEO Product Hero" className="leo-hero-img" />
          <h1>LEO</h1>
        </div>
      </section>
      <section className="leo-details-section">
        <div className="leo-details-container">
          <div className="leo-details-image-wrap">
            <img
              src={prodLeo}
              alt="CREW Equipment LEO"
              className="leo-details-main-img"
            />
          </div>
          <div className="leo-details-content">
            <div className="leo-details-label">
              // ABOUT THIS PRODUCT
            </div>
            <h2 className="leo-details-title">CREW Equipment - LEO</h2>
            <p className="leo-details-desc">
              Leo is a Manpack CREW system which is suitable for Long Range
              Patrols, Special ops as well as convoy protection duties. This
              equipment can provide an effective solution against threats using
              public networks.
            </p>
            <p className="leo-details-desc">
              The equipment works from internal batteries with easy provision of
              changing the battery and fast recharging. Leo covers the four bands
              of interest simultaneously. Depending on the necessity and assessed
              environmental conditions, the band selection can be varied or, if
              required, a particular channel can be switched off. The wired
              Remote Control Device enables the soldier to switch on the system
              only when he enters the vulnerable areas.
            </p>
            <p className="leo-details-desc">
              The product is also effective against other types of threats during
              the target search phase. A threatened ship can surround itself with
              decoys, when missile attack is imminent. On the commencement of
              pre-programmed search of the target area it will select a decoy
              before reaching the threatened ship.
            </p>
          </div>
        </div>
      </section>


      {/* Key Features Section */}
      <section className="leo-key-features-section">
        <div className="leo-key-features-header">
          <div className="leo-key-features-label">// KEY FEATURES</div>
          <h2 className="leo-key-features-title">
            What makes{" "}
            <span style={{ fontWeight: 700 }}>LEO</span> special
          </h2>
          <p className="leo-key-features-desc">
            Leo provides comprehensive protection for long-range patrols, special
            operations, and convoys by effectively countering threats from public
            networks, offering simultaneous multi-band coverage, and featuring
            remote control operation for targeted activation in vulnerable areas.
          </p>
        </div>
        <div className="leo-key-features-cards">
          <div className="leo-key-feature-card">
            <h3 className="leo-key-feature-title">CREW System</h3>
            <p className="leo-key-feature-desc">
              Leo is a portable Counter Radio Electronic Warfare (CREW) system
              designed for long-range patrol, special operations, and convoy
              protection.
            </p>
          </div>
          <div className="leo-key-feature-card">
            <h3 className="leo-key-feature-title">
              Against Public Network Threats
            </h3>
            <p className="leo-key-feature-desc">
              The equipment provides a robust solution against threats utilizing
              public networks.
            </p>
          </div>
          <div className="leo-key-feature-card">
            <h3 className="leo-key-feature-title">Multi-Band Coverage</h3>
            <p className="leo-key-feature-desc">
              Leo covers four bands of interest at the same time, with flexible
              band selection and the ability to switch off specific channels
              based on environmental conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="leo-gallery-section">
        <div className="leo-gallery-header">
          <div className="leo-gallery-label">// PRODUCT GALLERY</div>
          <h2 className="leo-gallery-title">
            Visual Showcase of Our<br />CREW Equipment - LEO
          </h2>
        </div>
        <div className="leo-gallery-images">
          <img src={prodLeo1} alt="LEO Product 1" className="leo-gallery-img" />
          <img src={prodLeo2} alt="LEO Product 2" className="leo-gallery-img" />
          <img src={prodLeo3} alt="LEO Product 3" className="leo-gallery-img" />
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

export default LEO;
