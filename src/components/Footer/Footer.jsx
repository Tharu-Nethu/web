import React from "react";
import { Container,  } from "reactstrap";

import "./footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
      <p>IEEE Women in Engineering (WIE) affinity group University of Ruhuna</p>
      <h2>Stay Inspired. Stay Empowered.</h2>
      </div>
      <div className="icon-container">
      <a href="https://facebook.com/WIEFoEUoR/" target="_blank" rel="noopener noreferrer">
          <img src="/fb.png" alt="Facebook Icon" className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/showcase/ieee-women-in-engineering-society-university-of-ruhuna/" target="_blank" rel="noopener noreferrer">
          <img src="/lk.png" alt="custom-icon" className="social-icon" />
      </a>
      <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="/gmail.png" alt="custom-icon" className="social-icon" />
      </a>
      </div>
      </Container>
    </footer>
  );
};

export default Footer;
