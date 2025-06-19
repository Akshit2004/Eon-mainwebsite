import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo">
            <img src="/eon_logo_trans.png" alt="Eon Infotech" className="logo-image" />
            <div className="brand-text">
              <strong>Eon</strong>
              <div className="brand-subtitle">Infotech</div>
            </div>
          </div>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link active" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" className="nav-link" onClick={toggleMenu}>
            About Us
          </a>
          <a href="#products" className="nav-link" onClick={toggleMenu}>
            Our Products
          </a>
          <a href="#life" className="nav-link" onClick={toggleMenu}>
            Life at Eon
          </a>
          <a href="#contact" className="nav-link" onClick={toggleMenu}>
            Contact Us
          </a>
          <a href="#quality" className="nav-link" onClick={toggleMenu}>
            Quality
          </a>
        </div>

        <div className="nav-actions">
          <div className="contact-info">
            <div className="help-text">Have Any Questions?</div>
            <div className="phone-number">+91 172 5044700</div>
          </div>
          <button className="nav-cta-btn">SEND ENQUIRY</button>
        </div>
        
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
