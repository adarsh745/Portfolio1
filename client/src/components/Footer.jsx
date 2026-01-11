import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-links">
          <a href="https://github.com/adarsh745" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com/in/adarshjanjirala" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:adarshjanjirala745@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
        
        <div className="footer-action">
           <a href="/resume.pdf" download className="btn btn-outline footer-resume-btn">
             Resume <FaDownload />
           </a>
        </div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} Janjirala Adarsh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
