import React from 'react';
import Navbar from '../../components/Navbar';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="hero-text">
            <div className="tagline">// INNOVATION AT ITS PEAK</div>
            <h1 className="hero-title">
              Defending Those Who<br />
              Defend Us!
            </h1>
            <p className="hero-description">
              Leading the way in advanced technology solutions for defense and security applications.
              Our cutting-edge innovations protect those who protect our nation.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Company Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Company</h2>
              <h3 className="about-heading">What We Actually Do</h3>
              <p className="about-description">
                We are a leading technology company specializing in advanced defense and security solutions. 
                Our cutting-edge innovations and state-of-the-art technology help protect those who protect our nation. 
                With years of expertise in the field, we deliver reliable, secure, and robust solutions that meet 
                the highest standards of quality and performance.
              </p>              <p className="about-description">
                Our team of dedicated professionals works tirelessly to develop next-generation technologies 
                that address the evolving challenges in defense and security sectors. From advanced electronics 
                to sophisticated software solutions, we provide comprehensive support to our clients.
              </p>
              <div className="about-cta">
                <p className="about-cta-text">
                  Ready to discover how our innovative solutions can transform your defense and security operations? 
                  Explore our comprehensive range of services and cutting-edge technologies.
                </p>
                <a href="#services" className="learn-more-link">
                  <span>LEARN MORE</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Technology and Innovation" 
                className="about-img"
              />
            </div>
          </div>        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <div className="section-header">
            <div className="tagline">// OUR ACHIEVEMENTS</div>
            <h2 className="section-title">
              Recipient of top awards for defense<br />
              force service.
            </h2>
          </div>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-image">
                <img src="https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Excellence in Indigenization Award" />
              </div>
              <h3 className="achievement-title">Excellence in Indigenization Award</h3>
            </div>
            <div className="achievement-card">
              <div className="achievement-image">
                <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Winner of Rashtriya Srijan Rath" />
              </div>
              <h3 className="achievement-title">Winner of Rashtriya Srijan Rath</h3>
            </div>
            <div className="achievement-card">
              <div className="achievement-image">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Honored as Esteemed Guest at MSME Defence Conclave" />
              </div>
              <h3 className="achievement-title">Honored as Esteemed Guest at MSME Defence Conclave</h3>
            </div>
            <div className="achievement-card">
              <div className="achievement-image">
                <img src="https://images.unsplash.com/photo-1586769852044-692d6df3490f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Award Received from Defence Ministry" />
              </div>
              <h3 className="achievement-title">Award Received from Defence Ministry</h3>
            </div>          </div>
        </div>
      </section>

      {/* Life at EON Section */}
      <section className="life-at-eon-section">
        <div className="container">
          <div className="life-content">
            <div className="life-text">
              <div className="tagline">// LIFE AT EON</div>
              <h2 className="life-title">
                Improve and Innovate with<br />
                the Tech Trends
              </h2>
              <p className="life-description">
                At EON, what is appreciated most is the enthusiasm to be creative 
                and shoulder responsibility, and the drive and hard work put in by its 
                partners has made EON a credible, trustworthy and competitive 
                player in its domain.
              </p>
              
              <div className="life-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">Experience</h3>
                    <p className="feature-text">Our great team of expert certified engineers.</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                      <path d="M19.4 15C19.2 15.1 19.1 15.2 19 15.4C18.9 15.6 18.9 15.8 19 16L20.2 17.2C20.3 17.3 20.4 17.4 20.4 17.6C20.4 17.8 20.3 17.9 20.2 18L18.4 19.8C18.3 19.9 18.1 20 18 20C17.9 20 17.7 19.9 17.6 19.8L16.3 18.6C16.1 18.5 15.9 18.4 15.7 18.5C15.5 18.6 15.4 18.7 15.3 18.9L14.8 20.3C14.7 20.7 14.4 21 14 21H12C11.6 21 11.3 20.7 11.2 20.3L10.7 18.9C10.6 18.7 10.5 18.6 10.3 18.5C10.1 18.4 9.9 18.5 9.7 18.6L8.4 19.8C8.3 19.9 8.1 20 8 20C7.9 20 7.7 19.9 7.6 19.8L5.8 18C5.7 17.9 5.6 17.7 5.6 17.6C5.6 17.4 5.7 17.3 5.8 17.2L7 16C7.1 15.8 7.1 15.6 7 15.4C6.9 15.2 6.8 15.1 6.6 15L5.2 14.5C4.8 14.4 4.5 14.1 4.5 13.7V10.3C4.5 9.9 4.8 9.6 5.2 9.5L6.6 9C6.8 8.9 6.9 8.8 7 8.6C7.1 8.4 7.1 8.2 7 8L5.8 6.8C5.7 6.7 5.6 6.6 5.6 6.4C5.6 6.2 5.7 6.1 5.8 6L7.6 4.2C7.7 4.1 7.9 4 8 4C8.1 4 8.3 4.1 8.4 4.2L9.7 5.4C9.9 5.5 10.1 5.6 10.3 5.5C10.5 5.4 10.6 5.3 10.7 5.1L11.2 3.7C11.3 3.3 11.6 3 12 3H14C14.4 3 14.7 3.3 14.8 3.7L15.3 5.1C15.4 5.3 15.5 5.4 15.7 5.5C15.9 5.6 16.1 5.5 16.3 5.4L17.6 4.2C17.7 4.1 17.9 4 18 4C18.1 4 18.3 4.1 18.4 4.2L20.2 6C20.3 6.1 20.4 6.3 20.4 6.4C20.4 6.6 20.3 6.7 20.2 6.8L19 8C18.9 8.2 18.9 8.4 19 8.6C19.1 8.8 19.2 8.9 19.4 9L20.8 9.5C21.2 9.6 21.5 9.9 21.5 10.3V13.7C21.5 14.1 21.2 14.4 20.8 14.5L19.4 15Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">Quick Support</h3>
                    <p className="feature-text">We'll help you test bold new ideas while sharing your.</p>
                  </div>
                </div>
              </div>
            </div>
              <div className="life-images">
              <div className="image-grid">
                <div className="grid-item large">
                  <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Our Mission" />
                  <div className="image-overlay">
                    <span>Our Mission</span>
                  </div>
                </div>
                <div className="grid-item">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Our Philosophy" />
                  <div className="image-overlay">
                    <span>Our Philosophy</span>
                  </div>
                </div>
                <div className="grid-item">
                  <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Our Vision" />
                  <div className="image-overlay">
                    <span>Our Vision</span>
                  </div>
                </div>
                <div className="grid-item">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Our Strategy" />
                  <div className="image-overlay">
                    <span>Our Strategy</span>
                  </div>
                </div>
              </div>
            </div>          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <div className="tagline">// OUR PRODUCTS</div>
            <h2 className="section-title">
              We provide a variety<br />
              of products for defence
            </h2>
          </div>
          <div className="products-scroll-container">
            <div className="products-grid">
              <div className="product-card">
                <div className="product-image">
                  <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Equipment - Aqua" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Equipment - Aqua</h3>
                  <div className="product-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Fire Control System - Kavach" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Fire Control System - Kavach</h3>
                  <div className="product-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <img src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Fire Control System T90" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Fire Control System T90</h3>
                  <div className="product-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="CREW - Library" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">CREW - Library</h3>
                  <div className="product-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <img src="https://images.unsplash.com/photo-1581093458791-9d42e3b2c533?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Advanced Defense System" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Advanced Defense System</h3>
                  <div className="product-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>        
          </div>
        </div>
      </section>

      {/* Premises Section */}
      <section className="premises-section">
        <div className="container">
          <div className="section-header">
            <div className="tagline">// GALLERY</div>
            <h2 className="section-title">
              Have A Glimpse Of Our Premises<br />
              And Work Environment
            </h2>
          </div>
          <div className="premises-grid">
            <div className="premises-item large">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Office Building Exterior" />
            </div>
            <div className="premises-item">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Office Entrance" />
            </div>
            <div className="premises-item">
              <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Work Environment" />
            </div>
            <div className="premises-item">
              <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Conference Room" />
            </div>
            <div className="premises-item">
              <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Workspace" />
            </div>          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="quality-section">
        <div className="container">
          <div className="quality-content">
            <div className="quality-text">
              <div className="tagline">// EXCEEDING EXPECTATIONS</div>
              <h2 className="quality-title">
                Quality: An Integral<br />
                Part Of Work Culture
              </h2>
              <p className="quality-description">
                At EON, Quality is not merely a function, but a vital mission and an 
                integral part of the work culture. Quality-enhanced processes are 
                the cornerstones of EON's development methodology. At EON, we 
                are a serious <strong>ISO 9001:2015 organization</strong>, currently 
                working towards <strong>SEI CMMI level 3</strong>.
              </p>
            </div>
            
            <div className="quality-features">
              <div className="quality-feature-card">
                <div className="feature-image">
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Extensive Reach" />
                  <div className="feature-overlay">
                    <h3 className="feature-name">Extensive Reach</h3>
                  </div>
                </div>
              </div>
              
              <div className="quality-feature-card">
                <div className="feature-image">
                  <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Feedback Efficiency" />
                  <div className="feature-overlay">
                    <h3 className="feature-name">Feedback Efficiency</h3>
                  </div>
                </div>
              </div>
              
              <div className="quality-feature-card">
                <div className="feature-image">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Continuous Enhancement" />
                  <div className="feature-overlay">
                    <h3 className="feature-name">Continuous Enhancement</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
