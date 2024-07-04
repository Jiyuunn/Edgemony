import React from "react";
import "./Footer.css";

const Footer = () => {
  const links = ["Services", "Products", "Support", "Contact"];

  return (
    <footer className="footer">
      <div className="footer-logo">Logo</div>
      <nav className="footer-nav">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
