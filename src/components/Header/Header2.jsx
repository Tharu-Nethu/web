import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";

const navLinks = [
  { display: "Home", url: "/" },
  { display: "About", url: "/" },
  { display: "Events", url: "/events" },
  { display: "Registrations", url: "/registrations" },
];

const Header2 = () => {
  const menuRef = useRef();

  // Toggle menu for mobile view
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const handleNavClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");

    if (target === "/" || target === "/registrations") {
      window.location.href = target;
    } else if (target.startsWith("/#")) {
      const section = target.replace("/", "");
      const element = document.querySelector(section);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <img src="/logo.png" alt="custom-icon" className="custom-image" />
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-8">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url} onClick={handleNavClick}>
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right"></div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header2;
