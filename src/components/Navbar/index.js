import React, { useState, useEffect } from "react";

import { RiCloseLine } from "react-icons/ri";
import { FiBarChart2 } from "react-icons/fi";
import "./style.css";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    let page = document.getElementById(id);
    if (page) {
      page.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setShowMobileMenu(false);
    }
  };

  const handleMenuClick = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <div id="navbarWrapper">
      <div id="navbar-left-section">Ajay.dev</div>
      <div id="navbar-right-section">
        <text
          className={`navbar-right-item ${activeSection === "home" ? "active" : ""}`}
          onClick={() => scrollTo("home")}
        >
          Home
        </text>

        <text
          className={`navbar-right-item ${activeSection === "projects" ? "active" : ""}`}
          onClick={() => scrollTo("projects")}
        >
          Projects
        </text>
        <text
          className={`navbar-right-item ${activeSection === "about" ? "active" : ""}`}
          onClick={() => scrollTo("about")}
        >
          About
        </text>
        <text
          className={`navbar-right-item ${activeSection === "contact" ? "active" : ""}`}
          onClick={() => scrollTo("contact")}
        >
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
          <div id="slide-menu" data-aos="fade-left" data-aos-duration="1000">
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
