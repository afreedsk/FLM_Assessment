import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section - Logo + Description */}
        <div className="footer-left">
          <div className="logo-footer">📚 FrontlinesEduTech</div>
          <p>Empowering the next generation of professionals with industry-relevant skills.</p>
        </div>
        
        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Platform</h4>
            <a href="#">Browse Courses</a>
            <a href="#">For Enterprise</a>
            <a href="#">Pricing</a>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        
        {/* Right Section - Copyright + Social */}
        <div className="footer-right">
          <p>&copy; 2026 FrontlinesEduTech (FLM). All Rights Reserved.</p>
          <div className="social-icons">
            <span>𝕏</span>
            <span>𝕃</span>
            <span>📘</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;