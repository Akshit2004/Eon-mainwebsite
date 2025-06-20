import React from "react";
import "./About.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import laptopImage from "../../assets/image-from-rawpixel-id-12362751-png.png";

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

      {/* New Technology Innovation Section */}
      <div className="about-tech-section">
        <div className="about-tech-container">
          <div className="about-tech-content">
            <div className="about-tech-badge">// Innovation</div>
            <h2 className="about-tech-title">
              Cutting-Edge Technology
              <br />
              <span className="tech-highlight">Driving Innovation</span>
            </h2>
            <p className="about-tech-description">
              Our mission is to make our customer's vision possible through
              advanced embedded solutions and innovative software development.
              We believe in transforming ideas into reality with precision and
              excellence.
            </p>

            <div className="about-tech-stats">
              <div className="tech-stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="tech-stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="tech-stat">
                <div className="stat-number">99%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>

            <div className="about-tech-points">
              <div className="tech-point">
                <div className="tech-point-icon">🚀</div>
                <div className="tech-point-text">Advanced Embedded Systems</div>
              </div>
              <div className="tech-point">
                <div className="tech-point-icon">⚡</div>
                <div className="tech-point-text">Real-time Processing</div>
              </div>
              <div className="tech-point">
                <div className="tech-point-icon">🔒</div>
                <div className="tech-point-text">Secure Defense Solutions</div>
              </div>
            </div>
          </div>

          <div className="about-tech-visual">
            <div className="laptop-container">
              <img
                src={laptopImage}
                alt="Technology Laptop"
                className="laptop-image"
              />
              <div className="floating-elements">
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-circle circle-3"></div>
                <div className="code-snippet snippet-1">
                  <span>{'<EON/>'}</span>
                </div>
                <div className="code-snippet snippet-2">
                  <span>console.log('innovation')</span>
                </div>
                <div className="tech-icon icon-1">💻</div>
                <div className="tech-icon icon-2">⚙️</div>
                <div className="tech-icon icon-3">🔧</div>
              </div>
            </div>
          </div>        </div>
      </div>

      {/* Customer Journey Section */}
      <div className="about-journey-section">
        <div className="about-journey-container">
          <div className="journey-cards">
            <div className="journey-card card-1">
              <div className="card-icon">
                <div className="icon-circle dreams-icon">
                  <span>💭</span>
                </div>
              </div>
              <h3>Our Customer Dreams</h3>
              <p>We listen to our customers' aspirations and understand their vision for the future.</p>
            </div>

            <div className="journey-card card-2">
              <div className="card-icon">
                <div className="icon-circle believe-icon">
                  <span>💡</span>
                </div>
              </div>
              <h3>And We Believe</h3>
              <p>We believe in turning those dreams into achievable goals with our expertise and dedication.</p>
            </div>

            <div className="journey-card card-3">
              <div className="card-icon">
                <div className="icon-circle create-icon">
                  <span>⚙️</span>
                </div>
              </div>
              <h3>Then We Create</h3>
              <p>We create innovative solutions that bring those dreams to life with precision and excellence.</p>
            </div>
          </div>

          <div className="journey-message">
            <div className="success-message">
              <h2>And then he succeeds.</h2>
              <p>His success inspires us to do More.</p>
            </div>
            <div className="inspire-visual">
              <div className="success-ripple"></div>
              <div className="inspire-icon">🎯</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
