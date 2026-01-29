import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiNetlify, SiGithubactions } from 'react-icons/si'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Section */}
        <div className="social-links">
          <a href="https://github.com/NevinsN" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope />
          </a>
        </div>

        {/* Brand/Copyright Section */}
        <div className="footer-info">
          <p>© {new Date().getFullYear()} Nicholas Nevins. All Rights Reserved.</p>
          <p className="footer-motto">Cloud & Game Infrastructure Engineer</p>
        </div>

        {/* Tech Stack Attribution */}
        <div className="footer-stack">
          <span>Built with:</span>
          <div className="stack-icons">
             <SiGithubactions title="GitHub Actions" />
             <SiNetlify title="Netlify" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
