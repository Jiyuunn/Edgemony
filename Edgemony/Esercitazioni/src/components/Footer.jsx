import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">Logo</div>
      <nav className="footer-nav">
        <ul>
          <li><a href="#services">Services</a>
            <ul>
              <li><a href="#consulting">Products</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
