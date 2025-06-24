import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './LandingPage.css';
import img1 from '../../assets/img1/1.png';
import img2 from '../../assets/img1/2.png';
import img3 from '../../assets/img1/3.png';
import img4 from '../../assets/img1/4.png';
import award1 from '../../assets/Awards/indesization.JPG';
import award2 from '../../assets/Awards/srijan ratn.JPG';
import award3 from '../../assets/Awards/defence conclave.JPG';
import award4 from '../../assets/Awards/defence ministry.JPG';
import prodLeo from '../../assets/Products/leo/prod5leo1-min.JPG';
import prodAqua from '../../assets/Products/aqua/prod6aqua1-min.JPG';
import prodKavach from '../../assets/Products/Kavach/kavach1-min.JPG';
import prodT90 from '../../assets/Products/fcst90/prod2ACU1-min.JPG';
import prodLibra from '../../assets/Products/libra/prod3libra1-min.JPG';
import prodCris from '../../assets/Products/cris/prod4cris1-min.JPG';

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
            <div className="tagline">//INNOVATION AT ITS PEAK</div>
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
              <h2 className="tagline">//About Company</h2>
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
            <div className="tagline">//OUR ACHIEVEMENTS</div>
            <h2 className="section-title">
              Recipient of top awards for defense<br />
              force service.
            </h2>
          </div>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-image">
                <img src={award1} alt="Excellence in Indigenization Award" />
              </div>
              <h3 className="achievement-title">Excellence in Indigenization Award</h3>
            </div>
            <div className="achievement-card">
              <div className="achievement-image">
                <img src={award2} alt="Winner of Rashtriya Srijan Rath" />
              </div>
              <h3 className="achievement-title">Winner of Rashtriya Srijan Rath</h3>
            </div>
            <div className="achievement-card">
              <div className="achievement-image">
                <img src={award3} alt="Honored as Esteemed Guest at MSME Defence Conclave" />
              </div>
              <h3 className="achievement-title">Honored as Esteemed Guest at MSME Defence Conclave</h3>
            </div>
            <div className="achievement-card">
              <div className="achievement-image">
                <img src={award4} alt="Award Received from Defence Ministry" />
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
              <div className="tagline">//LIFE AT EON</div>
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
                  <div className="feature-content" style={{ color: '#000' }}>
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
                  <div className="feature-content" style={{ color: '#000' }}>
                    <h3 className="feature-title">Quick Support</h3>
                    <p className="feature-text">We'll help you test bold new ideas while sharing your.</p>
                  </div>
                </div>
              </div>
            </div>
              <div className="life-images">
              <div className="image-grid">
                <div className="grid-item large">
                  <img src={img1} alt="Our Mission" />
                  <div className="image-overlay">
                    <span>Our Mission</span>
                  </div>
                </div>
                <div className="grid-item">
                  <img src={img2} alt="Our Philosophy" />
                  <div className="image-overlay">
                    <span>Our Philosophy</span>
                  </div>
                </div>
                <div className="grid-item">
                  <img src={img3} alt="Our Vision" />
                  <div className="image-overlay">
                    <span>Our Vision</span>
                  </div>
                </div>
                <div className="grid-item">
                  <img src={img4} alt="Our Strategy" />
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
            <div className="tagline">OUR PRODUCTS</div>
            <h2 className="section-title">
              We provide a variety<br />
              of products for defence
            </h2>
          </div>
          <div className="products-scroll-container">
            <div className="products-grid">
              <div className="product-card">
                <div className="product-image">
                  <img src={prodAqua} alt="Equipment - Aqua" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Equipment - Aqua</h3>
                  <a href="/Aqua" className="product-arrow" title="View Aqua">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <img src={prodKavach} alt="Fire Control System - Kavach" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Fire Control System - Kavach</h3>
                  <a href="/Kavach" className="product-arrow" title="View Kavach">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <img src={prodT90} alt="Fire Control System T90" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Fire Control System T90</h3>
                  <a href="/T90" className="product-arrow" title="View T90">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <img src={prodLibra} alt="CREW - Library" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">CREW - Library</h3>
                  <a href="/Libra" className="product-arrow" title="View Libra">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <img src={prodCris} alt="Advanced Defense System" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Advanced Defense System</h3>
                  <a href="/Cris" className="product-arrow" title="View Cris">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <img src={prodLeo} alt="CREW Equipment - LEO" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">CREW Equipment - LEO</h3>
                  <a href="/LEO" className="product-arrow" title="View LEO">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
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
            <div className="tagline">//GALLERY</div>
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
            </div>          
            </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="quality-section">
        <div className="container">
          <div className="quality-content">
            <div className="quality-text">
              <div className="tagline">//EXCEEDING EXPECTATIONS</div>
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
            </div>          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="tagline">//TESTIMONIALS</div>
            <h2 className="section-title">
              What our clients say<br />
              about us!
            </h2>
            <div className="google-rating">
              <div className="rating-info">
                <span className="rating-text">Good</span>
                <div className="stars">
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star half">★</span>
                </div>
                <span className="rating-count">Based on 15 reviews</span>
              </div>
              <img src="/google_g_logo.svg" alt="Google" className="google-logo" />
            </div>
          </div>
          
          <div className="testimonials-slider">
            <div className="testimonials-container">
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar"><span>S</span></div>
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">Shashank Srivastava</h4>
                      <div className="review-stars">
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                      </div>
                    </div>
                  </div>
                  <img src="/google_g_logo.svg" alt="Google" className="review-source" />
                </div>
                <p className="testimonial-text">
                  Colleagues are good, they are very supportive, interaction with the customer and their feedback is valuable. A great place to learn, experiment, unlearn and relearn. The management supports initiatives and recognises the impact created by each employee.
                </p>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar"><span>S</span></div>
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">Sanjeev Dhiman</h4>
                      <div className="review-stars">
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                      </div>
                    </div>
                  </div>
                  <img src="/google_g_logo.svg" alt="Google" className="review-source" />
                </div>
                <p className="testimonial-text">
                  Eon Infotech Ltd is a technology company. This is very Good and stable organisation. It provide flexible working hours and all the benefits as per law of their employees. Management is very supportive and always tries to maintain work life balance for the employees. I recommend this company who want to learn and grow in own life.
                </p>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar"><span>S</span></div>
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">Sonia Sharma</h4>
                      <div className="review-stars">
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                      </div>
                    </div>
                  </div>
                  <img src="/google_g_logo.svg" alt="Google" className="review-source" />
                </div>
                <p className="testimonial-text">
                  It's a good organization to work with who value their employees, motivates them to grow further. Head of the company is very down to earth and always appreciates the hard work of their employees.
                </p>
              </div>
            </div>
            <div className="more-reviews-cta" style={{ textAlign: 'center', marginTop: '2rem' }}>
              <a
                href="https://www.google.com/search?client=opera-gx&hs=Qg2&sca_esv=e636a3bf86a437ec&sxsrf=AE3TifOLvICl9f40w9EbOK7-1bK_hiA0SA:1750749413018&si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8s3BmHbvkFGdIsbgNgyosAEOxT7r3hy2bOZG7Gh00Ql4okmmi8q0as_DRly_gtzmLf2ckutOZqmZBCyZstom3J2MgbV50kDVwQ-OZUmPj5qixz1wnRg%3D%3D&q=Eon+Infotech+Limited+Reviews&sa=X&ved=2ahUKEwiB9unmwYmOAxVJ6jgGHeKjLQgQ0bkNegQISRAE"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
                style={{
                  display: 'inline-block',
                  background: '#4285F4',
                  color: '#fff',
                  padding: '0.75rem 2rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '1rem',
                  boxShadow: '0 2px 8px rgba(66,133,244,0.15)',
                  transition: 'background 0.2s',
                }}
              >
                Read More Reviews on Google
              </a>
            </div>
          </div>        </div>
      </section>

      {/* Consultation Section */}
      <section className="consultation-section">
        <div className="consultation-background"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="consultation-content">
            <div className="consultation-tagline">//Drop us a line! We are here to answer your questions 24/7</div>
            <h2 className="consultation-title">NEED A CONSULTATION?</h2>
            <button className="consultation-cta">
              CONTACT US
            </button>          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
