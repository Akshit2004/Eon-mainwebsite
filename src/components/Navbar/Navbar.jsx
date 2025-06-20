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
      <div className="nav-container">        <div className="nav-logo">
          <Link to="/" className="logo">
            <img src="/eon_logo_trans.png" alt="Eon Infotech" className="logo-image" />
            <div className="brand-text">
              <strong>Eon</strong>
              <div className="brand-subtitle">Infotech</div>
            </div>
          </Link>
        </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={toggleMenu}>
            Home
          </Link>
          <a href="#about" className="nav-link" onClick={toggleMenu}>
            About Us
          </a>
          <a href="#products" className="nav-link" onClick={toggleMenu}>
            Our Products
          </a>            <Link to="/life" className={`nav-link ${isActive('/life') ? 'active' : ''}`} onClick={toggleMenu}>
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
