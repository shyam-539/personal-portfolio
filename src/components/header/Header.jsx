import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  // Toggle active class on the navbar-toggler when clicked
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Shyam
          </a>
          <button
            className={`navbar-toggler ${isActive ? "active" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isActive ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isActive ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
