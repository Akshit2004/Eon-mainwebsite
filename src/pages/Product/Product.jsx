import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Product.css";

const Product = () => {
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
      <section className="product-hero-section">
        <div className="product-hero-overlay">
          <h1>Our Products</h1>
        </div>
      </section>
      <section className="product-details-section">
        <div className="product-details-container">
          <div className="product-details-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
              alt="CREW Equipment LEO"
              className="product-details-main-img"
            />
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=60"
              alt="CREW Equipment LEO small"
              className="product-details-thumb-img"
            />
          </div>
          <div className="product-details-content">
            <div className="product-details-label">
              // ABOUT THIS PRODUCT
            </div>
            <h2 className="product-details-title">CREW Equipment - LEO</h2>
            <p className="product-details-desc">
              Leo is a Manpack CREW system which is suitable for Long Range
              Patrols, Special ops as well as convoy protection duties. This
              equipment can provide an effective solution against threats using
              public networks.
            </p>
            <p className="product-details-desc">
              The equipment works from internal batteries with easy provision of
              changing the battery and fast recharging. Leo covers the four bands
              of interest simultaneously. Depending on the necessity and assessed
              environmental conditions, the band selection can be varied or, if
              required, a particular channel can be switched off. The wired
              Remote Control Device enables the soldier to switch on the system
              only when he enters the vulnerable areas.
            </p>
            <p className="product-details-desc">
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
      <section className="product-key-features-section">
        <div className="product-key-features-header">
          <div className="product-key-features-label">// KEY FEATURES</div>
          <h2 className="product-key-features-title">
            What makes{" "}
            <span style={{ fontWeight: 700 }}>LEO</span> special
          </h2>
          <p className="product-key-features-desc">
            Leo provides comprehensive protection for long-range patrols, special
            operations, and convoys by effectively countering threats from public
            networks, offering simultaneous multi-band coverage, and featuring
            remote control operation for targeted activation in vulnerable areas.
          </p>
        </div>
        <div className="product-key-features-cards">
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">CREW System</h3>
            <p className="product-key-feature-desc">
              Leo is a portable Counter Radio Electronic Warfare (CREW) system
              designed for long-range patrol, special operations, and convoy
              protection.
            </p>
          </div>
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">
              Against Public Network Threats
            </h3>
            <p className="product-key-feature-desc">
              The equipment provides a robust solution against threats utilizing
              public networks.
            </p>
          </div>
          <div className="product-key-feature-card">
            <h3 className="product-key-feature-title">Multi-Band Coverage</h3>
            <p className="product-key-feature-desc">
              Leo covers four bands of interest at the same time, with flexible
              band selection and the ability to switch off specific channels
              based on environmental conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="product-gallery-section">
        <div className="product-gallery-header">
          <div className="product-gallery-label">// PRODUCT GALLERY</div>
          <h2 className="product-gallery-title">
            Visual Showcase of Our<br />Advanced Defense Product
          </h2>
        </div>
        <div className="product-gallery-images">
          <img src="https://i.imgur.com/0QeQZpT.jpg" alt="Product 1" className="product-gallery-img" />
          <img src="https://i.imgur.com/8QeQZpT.jpg" alt="Product 2" className="product-gallery-img" />
          <img src="https://i.imgur.com/1QeQZpT.jpg" alt="Product 3" className="product-gallery-img" />
        </div>
      </section>

      {/* More Products Section */}
      <section className="product-more-section">
        <div className="product-more-label">// MORE PRODUCTS FROM EON</div>
        <h2 className="product-more-title">
          We provide a variety<br />of products for defence
        </h2>
        <div className="product-more-scroll-outer">
          <button className="scroll-btn left" onClick={() => scrollByAmount(-300)} aria-label="Scroll left">&#8592;</button>
          <div
            className="product-more-scroll-container"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            style={{ cursor: 'grab' }}
          >
            <div className="product-more-card">
              <img src="https://i.imgur.com/0QeQZpT.jpg" alt="Control System T90" className="product-more-img" />
              <div className="product-more-card-title">Control System T90</div>
            </div>
            <div className="product-more-card">
              <img src="https://i.imgur.com/8QeQZpT.jpg" alt="CREW - Libra" className="product-more-img" />
              <div className="product-more-card-title">CREW - Libra</div>
            </div>
            <div className="product-more-card">
              <img src="https://i.imgur.com/1QeQZpT.jpg" alt="CREW - CRIS" className="product-more-img" />
              <div className="product-more-card-title">CREW - CRIS</div>
            </div>
            <div className="product-more-card">
              <img src="https://i.imgur.com/2QeQZpT.jpg" alt="CREW Equipment" className="product-more-img" />
              <div className="product-more-card-title">CREW Equipment</div>
            </div>
            <div className="product-more-card">
              <img src="https://i.imgur.com/3QeQZpT.jpg" alt="Jammer X1" className="product-more-img" />
              <div className="product-more-card-title">Jammer X1</div>
            </div>
            <div className="product-more-card">
              <img src="https://i.imgur.com/4QeQZpT.jpg" alt="Signal Disruptor" className="product-more-img" />
              <div className="product-more-card-title">Signal Disruptor</div>
            </div>
          </div>
          <button className="scroll-btn right" onClick={() => scrollByAmount(300)} aria-label="Scroll right">&#8594;</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Product;
