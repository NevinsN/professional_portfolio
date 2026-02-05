import React from "react";
import "./Footer.css";
// If you are using FontAwesome, make sure it is installed: npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Nicholas Nevins | Infrastructure Engineer</p>
        <div className="footer-socials">
          <a href="https://github.com/NevinsN" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/nicholas-nevins/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
