import React, { useState } from "react";

import { RiCloseLine } from "react-icons/ri";
import { FiBarChart2 } from "react-icons/fi";
import "./style.css";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const scrollTo = (id) => {
    let page = document.getElementById(id);
    page.scrollIntoView({ behavior: "smooth" });
  };

  const handleMenuClick = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <div id="navbarWrapper">
      <div id="navbar-left-section">Ajay.dev</div>
      <div id="navbar-right-section">
        <text className="navbar-right-item" onClick={() => scrollTo("home")}>
          Home
        </text>

        <text
          className="navbar-right-item"
          onClick={() => scrollTo("projects")}
        >
          Projects
        </text>
        <text className="navbar-right-item" onClick={() => scrollTo("about")}>
          About
        </text>
        <text className="navbar-right-item" onClick={() => scrollTo("contact")}>
          Contact
        </text>
      </div>
      <div id="navbar-right-section-hamburger" onClick={handleMenuClick}>
        {showMobileMenu ? (
          <RiCloseLine size={"1.5rem"} />
        ) : (
          <FiBarChart2 id="bar-icon" size={"1.5rem"} />
        )}
        {showMobileMenu && (
          <div id="slide-menu">
            <text className="navbar-expanded" onClick={() => scrollTo("home")}>
              Home
            </text>
            <text
              className="navbar-expanded"
              onClick={() => scrollTo("projects")}
            >
              Projects
            </text>
            <text className="navbar-expanded" onClick={() => scrollTo("about")}>
              About
            </text>
            <text
              className="navbar-expanded"
              onClick={() => scrollTo("contact")}
            >
              Contact
            </text>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
