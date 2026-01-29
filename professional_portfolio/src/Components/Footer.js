import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiNetlify, SiGithubactions } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Social Icons Section */}
        <div className="footer-socials">
          <a href="https://github.com/NevinsN" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:your-email@example.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-branding">
          <p>© {new Date().getFullYear()} Nicholas Nevins. All Rights Reserved.</p>
          <p className="footer-tagline">Cloud & Game Infrastructure Engineer</p>
        </div>

        {/* Operational Tech Stack Icons */}
        <div className="footer-ops-meta">
          <span>Deployed with:</span>
          <div className="ops-icons">
            <SiGithubactions title="GitHub Actions" />
            <SiNetlify title="Netlify" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
