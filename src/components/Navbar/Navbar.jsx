import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">       
         <div className="nav-logo">
          <Link to="/" className="logo">
            <img src="\EonWebLogoBlueTransWhiteText.png" alt="Eon Infotech" className="logo-image" />
          </Link>
        </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>          
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={toggleMenu}>
            About Us
          </Link>
          <div className="nav-link nav-dropdown">
            <span>Our Products</span>
            <div className="dropdown-content">
              <Link to="/products/aqua" onClick={toggleMenu}>CREW Equipment - Aqua</Link>
              <Link to="/products/kavach" onClick={toggleMenu}>Fire Control System - Kavach</Link>
              <Link to="/products/t90" onClick={toggleMenu}>Fire Control System T90</Link>
              <Link to="/leo" onClick={toggleMenu}>CREW Equipment - LEO</Link>
              <Link to="/products/libra" onClick={toggleMenu}>CREW - Libra</Link>
              <Link to="/products/cris" onClick={toggleMenu}>CREW - CRIS</Link>
            </div>
          </div>
          <Link to="/life" className={`nav-link ${isActive('/life') ? 'active' : ''}`} onClick={toggleMenu}>
            Life at Eon
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={toggleMenu}>
            Contact Us
          </Link>
          <Link to="/quality" className={`nav-link ${isActive('/quality') ? 'active' : ''}`} onClick={toggleMenu}>
            Quality
          </Link>
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
