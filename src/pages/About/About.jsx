import React from "react";
import "./About.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-hero-section">
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">About Us</h1>
        </div>
      </div>
      <div
        className="about-main-section"
        style={{
          background: "#f5f6fa",
          boxShadow: "none",
          borderRadius: 0,
          padding: 0,
        }}
      >
        <div className="about-main-wrapper">
          <div className="about-main-images">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
              alt="Engineer at work"
              className="about-main-img1"
            />
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
              alt="Microchip closeup"
              className="about-main-img2"
            />
          </div>
          <div className="about-main-content">
            <h5>// About Us</h5>
            <h2>
              World Class embedded
              <br />
              software-based solutions
              <br />
              for defence
            </h2>
            <p>
              At EON, what is appreciated most is the enthusiasm to be creative
              and shoulder responsibility, and the drive and hard work put in by
              its partners has made EON a credible, respected and competitive
              player in its domain.
            </p>
            <ul className="about-main-list">
              <li>Government & Law Forces</li>
              <li>Corporate Sector</li>
            </ul>
            <hr
              style={{
                margin: "12px 0",
                border: "none",
                borderTop: "1px solid #eee",
              }}
            />
            <div className="about-main-features">
              <div className="about-feature">
                <span className="about-feature-icon">👍</span> Assured Quality
              </div>
              <div className="about-feature">
                <span className="about-feature-icon">👨‍💻</span> Highly Qualified
                Team
              </div>
            </div>
            <div className="about-main-contact">
              <span className="about-contact-label">Call Us Anytime</span>
              <span className="about-contact-phone">+91 172 5044700</span>
              <button className="about-products-btn">Our Products</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
