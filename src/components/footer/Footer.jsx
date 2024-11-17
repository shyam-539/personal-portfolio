import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import Resume from "../../assets/resume.pdf";

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container text-center">
        <ul className="footer-links list-inline mb-0">
          <li className="list-inline-item">
            <a href="#work" className="footer-link">
              Work
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li className="list-inline-item">
            <a href="mailto:shyamsankarp539@gmail.com" className="footer-link">
              Email
            </a>
          </li>
          <li className="list-inline-item">
            <a href={Resume} target="_blank" className="footer-link">
              Resume
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.linkedin.com/in/shyamsankarp539/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
