import React from "react";
import "./About.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ConsultationSection from "../../components/ConsultationSection/ConsultationSection";
import laptopImage from "../../assets/laptop2.png";
import gallery1 from '../../assets/OurPhotos/gallery1.jpg';
import gallery2 from '../../assets/OurPhotos/gallery2.jpg';
import pillar1 from '../../assets/Pillars/visionPillar-1.png';
import pillar2 from '../../assets/Pillars/speedPillar-1.png';
import pillar3 from '../../assets/Pillars/rdPillar.png';
import pillar4 from '../../assets/Pillars/QualityPillar.png';
import pillar5 from '../../assets/Pillars/pricePillar.png';

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
              src={gallery1}
              alt="EON Team 1"
              className="about-main-img1"
            />
            <img
              src={gallery2}
              alt="EON Team 2"
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
        <div className="about-tech-container" style={{flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
          <div style={{textAlign: 'center', width: '100%'}}>
            <div className="about-tech-badge">// Our Mission</div>
            <h2 className="about-tech-title" style={{fontSize: '2.4rem', fontWeight: 800, margin: 0, lineHeight: 1.2}}>
              Our mission is to make our<br />customer’s vision possible
            </h2>
          </div>
        </div>
      </div>
      {/* Customer Journey Section (now below Our Mission) */}
      <div className="about-journey-section" style={{background: 'transparent', padding: ' 0 0 0', marginTop: 2}}>
        <div className="about-journey-container" style={{padding: 0}}>
          <div className="journey-cards modern-journey-cards">
            <div className="journey-card modern-journey-card card-1">
              <div className="modern-journey-content">
                <h3 className="journey-step">Our Customer<br/>Dreams</h3>
              </div>
              <div className="card1-icon-overlay">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/><circle cx="12" cy="12" r="5"/></svg>
              </div>
            </div>
            <div className="journey-card modern-journey-card card-2">
              <div className="modern-journey-content">
                <h3 className="journey-step">And<br/>We Believe</h3>
              </div>
              <div className="card2-icon-overlay">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
            </div>
            <div className="journey-card modern-journey-card card-3">
              <div className="modern-journey-content">
                <h3 className="journey-step">Then We<br/>Create</h3>
              </div>
              <div className="card3-icon-overlay">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 5 15.4a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 16 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.31.22.65.22 1v.09A1.65 1.65 0 0 0 21 12c0 .35-.08.69-.22 1z"/></svg>
              </div>
            </div>
          </div>
          <div className="journey-message" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'transparent', boxShadow: 'none', border: 'none', padding: 0 }}>
            <div className="success-message" style={{ width: '100%', textAlign: 'center', margin: 0, padding: 0, background: 'transparent' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, padding: 0 }}>And then he succeeds.<br/>His success inspires us to do More.</h2>
            </div>
          </div>        
        </div>
      </div> 
      {/* End Customer Journey Section */}
      <div className="about-vision-section">
        <div className="about-vision-container">
          <div className="vision-image-container">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
              alt="Professional Business Vision" 
              className="vision-image"
            />
          </div>
          <div className="vision-content">
            <div className="vision-badge">//OUR VISION</div>
            <h2 className="vision-title">Explained.</h2>
            <p className="vision-description">
              We envision ourselves in the leadership position in providing embedded product-
              realization solutions in India.
            </p>            
            <div className="vision-details">
              <p>
                As we use this term, leadership means more external, more profit, more innovation that serves all customer's 
                needs, and a more attractive place to work than any competitor. Achieving this ambitious objective will 
                require that we double our revenue and profit every year for the next two years, and then double them every 
                two years thereafter. It will require that we become less India oriented, more externally focused, have a mix of 
                products and services, and continue to maintain a special focus on the wireless communications domain, 
                which is our core competence. It will require us to deliver, time and again, world class solutions at Indian 
                prices. The business will be sufficiently diversified through a judicious customer spread and a component of 
                revenue coming through projects with predictable cash flows. We sincerely believe that if we work together, 
                we can create this change and in this process create a firm that will be admired by our stockholders, 
                customers, employees, and the community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Five Pillars Section */}
      <div className="about-pillars-section">
        <div className="about-pillars-container">
          <div className="pillars-header">
            <div className="pillars-badge">//The Eon Strategy</div>
            <h2 className="pillars-title">Five Pillars of the Eon Strategy</h2>
          </div>
          
          <div className="pillars-grid">
            <div className="pillar-card pillar-1">
              <div className="pillar-image">
                <img 
                  src={pillar1} 
                  alt="Focus on Customer Vision" 
                />
              </div>
              <div className="pillar-content">
                <h3>Focus on Customer Vision</h3>
                <p>
                  We put our clients' vision at the center, shaping solutions around their needs so they can focus on their core business.
                </p>
              </div>
            </div>

            <div className="pillar-card pillar-2">
              <div className="pillar-image">
                <img 
                  src={pillar2} 
                  alt="Speed" 
                />
              </div>
              <div className="pillar-content">
                <h3>Speed</h3>
                <p>
                  We deliver projects quickly and efficiently, leveraging agility and technology without compromising quality.
                </p>
              </div>
            </div>

            <div className="pillar-card pillar-3">
              <div className="pillar-image">
                <img 
                  src={pillar3} 
                  alt="Research & Development" 
                />
              </div>
              <div className="pillar-content">
                <h3>Research & Development</h3>
                <p>
                  Continuous investment in R&D keeps us ahead, working on tomorrow’s technologies today.
                </p>
              </div>
            </div>
          </div>

          {/* Separate div for Quality Practices and Prices */}
          <div className="pillars-grid pillars-grid-bottom">
            <div className="pillar-card pillar-4">
              <div className="pillar-image">
                <img 
                  src={pillar4} 
                  alt="Quality Practices" 
                />
              </div>
              <div className="pillar-content">
                <h3>Quality Practices, Standards and Management</h3>
                <p>
                  Quality guides everything we do, driven by strong standards and certified management systems.
                </p>
              </div>
            </div>

            <div className="pillar-card pillar-5">
              <div className="pillar-image">
                <img 
                  src={pillar5} 
                  alt="Prices" 
                />
              </div>
              <div className="pillar-content">
                <h3>Prices</h3>
                <p>
                  We offer world-class solutions at competitive, value-driven prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Philosophy Section */}
      <div className="about-philosophy-section">
        <div className="about-philosophy-container">
          <div className="philosophy-header">
            <div className="philosophy-badge">// OUR PHILOSOPHY</div>
            <h2 className="philosophy-title">
              At the core Eon's philosophy are<br/>the following principles
            </h2>
          </div>
          <div className="philosophy-grid redesigned-philosophy-grid">
            <div className="philosophy-card redesigned-philosophy-card card-1">
              <div className="philosophy-floating-icon philosophy-icon-1">👥</div>
              <div className="philosophy-bg-number redesigned-bg-number">01</div>
              <div className="philosophy-content redesigned-content">
                <h3>Customer-Centric Approach</h3>
                <p>Eon believes in understanding and fulfilling their customer's vision, dreams, and needs.</p>
              </div>
            </div>
            <div className="philosophy-card redesigned-philosophy-card card-2">
              <div className="philosophy-floating-icon philosophy-icon-2">🚀</div>
              <div className="philosophy-bg-number redesigned-bg-number">02</div>
              <div className="philosophy-content redesigned-content">
                <h3>Innovative Spirit</h3>
                <p>Eon Infotech stays ahead of the curve in innovation and provides cutting-edge technology solutions in their products.</p>
              </div>
            </div>
            <div className="philosophy-card redesigned-philosophy-card card-3">
              <div className="philosophy-floating-icon philosophy-icon-3">🏅</div>
              <div className="philosophy-bg-number redesigned-bg-number">03</div>
              <div className="philosophy-content redesigned-content">
                <h3>Commitment to Excellence</h3>
                <p>Eon upholds a culture of excellence in all aspects of their operations to ensure the highest level of customer satisfaction.</p>
              </div>
            </div>
            <div className="philosophy-card redesigned-philosophy-card card-4">
              <div className="philosophy-floating-icon philosophy-icon-4">💲</div>
              <div className="philosophy-bg-number redesigned-bg-number">04</div>
              <div className="philosophy-content redesigned-content">
                <h3>Value-Oriented Pricing</h3>
                <p>Eon values affordability and aims to provide cost-effective solutions to their valuable clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ConsultationSection />

      <Footer />
    </>
  );
};

export default About;
