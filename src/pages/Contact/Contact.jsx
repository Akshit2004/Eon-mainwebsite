import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-background"></div>
        <div className="contact-hero-overlay"></div>
        
        <div className="contact-hero-content">
          <div className="contact-hero-text">
            <div className="tagline">// GET IN TOUCH</div>
            <h1 className="contact-hero-title">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-content">
            {/* Left Side - Contact Information */}
            <div className="contact-info">
              <h2 className="contact-info-title">Contact us</h2>
              <p className="contact-info-description">
                Have a project idea or question you need to be answered? Let's talk about it.
                We're here to help make your project a reality.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h4>Our Address</h4>
                    <p>123 Technology Drive, Suite 456, Defense City, DC 20001</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h4>Our Hotline</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h4>Our Email</h4>
                    <p>info@eontech.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-wrapper">
              <div className="contact-form-card">
                <h3 className="form-title">Ready to Get Started?</h3>
                <p className="form-subtitle">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>

                <form className="contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <select className="form-input form-select" required>
                      <option value="">Select Service</option>
                      <option value="defense-systems">Defense Systems</option>
                      <option value="security-solutions">Security Solutions</option>
                      <option value="technology-consulting">Technology Consulting</option>
                      <option value="custom-development">Custom Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <textarea
                      placeholder="Tell us about your project..."
                      className="form-input form-textarea"
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;