import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoArrowForward, IoClose } from "react-icons/io5";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigateToSignup = () => {
    navigate("/signup");
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <div
            className="logo"
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
          >
            <div className="logo-monogram">
              <span className="c-letter">C</span>
              <span className="b-letter">B</span>
            </div>
            <div className="logo-text">
              <span className="club-text">CLUB</span>
              <span className="billionaire-text">BILLIONAIRE</span>
            </div>
          </div>
        </div>

        {/* Desktop Register Button */}
        <div className="register-section">
          <button className="register-btn" onClick={navigateToSignup}>
            <span>Register here</span>
            <IoArrowForward className="arrow-icon" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <IoClose /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <div className="mobile-menu-content">
          <div className="mobile-register-section">
            <button className="mobile-register-btn" onClick={navigateToSignup}>
              <span>Register here</span>
              <IoArrowForward className="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
