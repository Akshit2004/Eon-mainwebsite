import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-newsletter">
            <h3 className="newsletter-title">
              Leave your email to stay<br />
              updated.
            </h3>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Input Email Here..." 
                className="newsletter-input"
              />
              <button className="newsletter-submit">Submit</button>
            </div>
          </div>
          
          <div className="footer-separator"></div>
          
          <div className="footer-info">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/EonWebLogoBlueTransWhiteText2.png" alt="Eon InfoTech Logo" className="footer-logo-img" />
              </div>
              <p className="footer-description">
                A technical company<br />
                headquartered in the<br />
                Northern Indian city of<br />
                Chandigarh.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-column-title">Contact Info</h4>
                <div className="contact-item">
                  <div className="contact-text-white">
                    <p>📍 C-180 Industrial Area,</p>
                    <p> Phase 8-B, Sector 74, Mohali</p>
                    <p>160059, India</p>
                  </div>
                </div>
                <div className="contact-item">
                  <p className="contact-text-white">📞 +91 172 5044700</p>
                </div>
                <div className="contact-item">
                  <p className="contact-text-white">✉️ info@eoninfotech.com</p>
                </div>
              </div>              
              <div className="footer-column">
                <h4 className="footer-column-title">Quick Links</h4>                
                <ul className="footer-menu">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/life">Life at Eon</a></li>
                  <li><a href="/quality">Quality</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4 className="footer-column-title">Our Products</h4>
                <ul className="footer-menu">
                  <li><a href="/Kavach">Fire Control System - Kavach</a></li>
                  <li><a href="/T90">Fire Control System T90</a></li>
                  <li><a href="/Libra">CREW - Libra</a></li>
                  <li><a href="/LEO">CREW Equipment - Leo</a></li>
                  <li><a href="/Aqua">CREW Equipment - Aqua</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
