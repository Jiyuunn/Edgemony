import React from "react";
import "./Header.css";

const Header = () => {
  const links = ["Home", "About", "Services", "Contact"];

  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
