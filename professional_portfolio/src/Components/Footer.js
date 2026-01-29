import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Links as Plain Text */}
        <div className="social-links">
          <a href="https://github.com/NevinsN" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:your-email@example.com">
            Email
          </a>
        </div>

        {/* Brand/Copyright Section */}
        <div className="footer-info">
          <p>© {new Date().getFullYear()} Nicholas Nevins. All Rights Reserved.</p>
          <p className="footer-motto">Cloud & Game Infrastructure Engineer</p>
        </div>

        {/* Tech Stack Attribution */}
        <div className="footer-stack">
          <span>Built with: GitHub Actions & Netlify</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
