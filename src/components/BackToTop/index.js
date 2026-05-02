import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      id="back-to-top"
      className={isVisible ? "show" : ""}
      onClick={scrollToTop}
      title="Back to Top"
      aria-label="Back to Top"
    >
      <FiArrowUp size="1.25rem" />
    </button>
  );
}

export default BackToTop;
