import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <svg 
            width="42" 
            height="38" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="logo-icon"
          >
            <rect x="3" y="4" width="18" height="17" rx="2" fill="#00b4d8" stroke="#005f8a" strokeWidth="2"/>
            <path d="M6 4V21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
            <rect x="9" y="8" width="4" height="3" fill="#ffffff" rx="0.5"/>
            <rect x="13" y="13" width="4" height="3" fill="#ffffff" rx="0.5"/>
          </svg>
          <div className="logo-text">
            <h1>FrontlinesEduTech</h1>
            <p className="tagline">FLM</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>Courses</Link>
          <Link to="/my-learning" className={`nav-link ${location.pathname === '/my-learning' ? 'active' : ''}`} onClick={closeMenu}>My Learning</Link>
          <Link to="/community" className={`nav-link ${location.pathname === '/community' ? 'active' : ''}`} onClick={closeMenu}>Community</Link>
          <Link to="/enterprise" className={`nav-link ${location.pathname === '/enterprise' ? 'active' : ''}`} onClick={closeMenu}>Enterprise</Link>
        </nav>

        {/* Right Side - Clean (User + Button only) */}
        <div className="header-right">
          {/* User Profile */}
          <div className="user-profile">
            <div className="avatar">👨‍💼</div>
            <span className="username">Shaik Afreed</span>
          </div>

          {/* Browse Courses Button */}
          <Link to="/" className="btn-primary" onClick={closeMenu}>
            Browse Courses
          </Link>
        </div>

        {/* Hamburger Toggle - Mobile only */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#1f2937" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <Link to="/" className="mobile-nav-link" onClick={closeMenu}>Courses</Link>
            <Link to="/my-learning" className="mobile-nav-link" onClick={closeMenu}>My Learning</Link>
            <Link to="/community" className="mobile-nav-link" onClick={closeMenu}>Community</Link>
            <Link to="/enterprise" className="mobile-nav-link" onClick={closeMenu}>Enterprise</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;