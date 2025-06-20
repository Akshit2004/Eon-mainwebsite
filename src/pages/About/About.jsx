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
      </div>      {/* Vision Section */}
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
            <div className="vision-badge">// OUR VISION</div>
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
            <div className="pillars-badge">// The Eon Strategy</div>
            <h2 className="pillars-title">Five Pillars of the Eon Strategy</h2>
          </div>
          
          <div className="pillars-grid">
            <div className="pillar-card pillar-1">
              <div className="pillar-image">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=400&q=80" 
                  alt="Focus on Customer Vision" 
                />
              </div>
              <div className="pillar-content">
                <h3>Focus on Customer Vision</h3>
                <p>
                  At Eon Information Limited, we have only one mission: clients – "To Make Our Customer's Vision Possible." Everything that constitutes Eon's Customer & Sales, we seek first to understand our clients, understand their needs. This shapes our service technology solutions that satisfy their needs. The ultimate result is that we stay focused on the customer as the centre of our mission statement, while our customers focus on their own core business and have the mission statement.
                </p>
              </div>
            </div>

            <div className="pillar-card pillar-2">
              <div className="pillar-image">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" 
                  alt="Speed" 
                />
              </div>
              <div className="pillar-content">
                <h3>Speed</h3>
                <p>
                  We realise that speed is one of the key factors in delivering to our customers. We are a young, nimble-footed team compared to bigger players. Our typical delivery times are 50% faster than bigger players. We leverage simplicity, agility and technology while embracing efficiency without compromising on the quality of our solutions, so you'll not only get your projects delivered faster but also with the highest standards upheld.
                </p>
              </div>
            </div>

            <div className="pillar-card pillar-3">
              <div className="pillar-image">
                <img 
                  src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=400&q=80" 
                  alt="Research & Development" 
                />
              </div>
              <div className="pillar-content">
                <h3>Research & Development</h3>
                <p>
                  Research and Development is our lifeline, and gives us the competitive advantage in this fiercely contested marketplace. 10% of our budget goes into Research and Development every year, this enables us to keep our talents within Eon are currently working on technologies of tomorrow.
                </p>
              </div>
            </div>

            <div className="pillar-card pillar-4">
              <div className="pillar-image">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80" 
                  alt="Quality Practices" 
                />
              </div>
              <div className="pillar-content">
                <h3>Quality Practices, Standards and Management</h3>
                <p>
                  Quality is a way of life at Eon. The trinity of Quality Standards, Quality Practices and Quality Management guides us in all our engagements. We are a systems driven ISO 9001:2008 Organization.
                </p>
              </div>
            </div>

            <div className="pillar-card pillar-5">
              <div className="pillar-image">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80" 
                  alt="Prices" 
                />
              </div>
              <div className="pillar-content">
                <h3>Prices</h3>
                <p>
                  A lean India company can bring you world class solutions at naturally Indian prices. Our focus on efficiency allows us to deliver world-class services without the hefty price tags.
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
              At the core Eon's philosophy are<br />the following principles
            </h2>
          </div>
          <div className="philosophy-grid">
            <div className="philosophy-card card-1">
              <div className="philosophy-bg-number">01</div>
              <div className="philosophy-content">
                <h3>Customer-Centric Approach</h3>
                <p>Eon believes in understanding and fulfilling their customer's vision, dreams, and needs.</p>
                <div className="philosophy-icon">👥</div>
              </div>
            </div>
            <div className="philosophy-card card-2">
              <div className="philosophy-bg-number">02</div>
              <div className="philosophy-content">
                <h3>Innovative Spirit</h3>
                <p>Eon Infotech stay ahead of the curve in innovation and providing cutting-edge technology solutions in their products.</p>
                <div className="philosophy-icon">🚀</div>
              </div>
            </div>
            <div className="philosophy-card card-3">
              <div className="philosophy-bg-number">03</div>
              <div className="philosophy-content">
                <h3>Commitment to Excellence</h3>
                <p>Eon upholds a culture of excellence in all aspects of their operations to ensure the highest level of customer satisfaction.</p>
                <div className="philosophy-icon">🏅</div>
              </div>
            </div>
            <div className="philosophy-card card-4">
              <div className="philosophy-bg-number">04</div>
              <div className="philosophy-content">
                <h3>Value-Oriented Pricing</h3>
                <p>Eon also values affordability as they aim to provide cost-effective solutions to their valueable clients.</p>
                <div className="philosophy-icon">💲</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation CTA Section */}
      <div className="about-consultation-section">
        <div className="consultation-overlay">
          <div className="consultation-content">
            <div className="consultation-badge">// Drop us a line! We are here to answer your questions 24/7</div>
            <h2 className="consultation-title">NEED A CONSULTATION?</h2>
            <a href="/contact" className="consultation-btn">Contact Us</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
