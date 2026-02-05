import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Nicholas Nevins | Infrastructure Engineer</p>
        <div className="footer-socials">
          <a href="https://github.com/NevinsN" target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <span className="divider">|</span>
          <a href="https://www.linkedin.com/in/nicholas-nevins/" target="_blank" rel="noopener noreferrer">
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
