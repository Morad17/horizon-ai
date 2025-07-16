import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import blog from "../assets/icons/blog.svg";
import home from "../assets/icons/home.svg";
import contact from "../assets/icons/contact.svg";
import opportunities from "../assets/icons/job.svg";
import about from "../assets/icons/about.svg";
import faq from "../assets/icons/faq.svg";

const NavMobile = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    setMobileOpen(false);
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <nav className="mobile-nav-container">
      {/* Burger icon top left */}
      <div className="burger" onClick={() => setMobileOpen((v) => !v)}>
        <GiHamburgerMenu size={32} />
      </div>
      {/* Dropdown menu */}
      {mobileOpen && (
        <div className="mobile-nav-dropdown">
          <ul>
            <hr />
            <li
              className={`link ${location.pathname === "/" ? "active" : ""}`}
              onClick={() => handleNavigation("/")}
            >
              <img className="nav-icon" src={home} alt="" />
              <span>Home</span>
            </li>
            <hr />
            <li
              className={`link ${
                location.pathname === "/about-us" ? "active" : ""
              }`}
              onClick={() => handleNavigation("/about-us")}
            >
              <img className="nav-icon" src={about} alt="" />
              <span>About Us</span>
            </li>
            <hr />
            <li
              className={`link ${location.pathname === "/faq" ? "active" : ""}`}
              onClick={() => handleNavigation("/faq")}
            >
              <img className="nav-icon" src={faq} alt="" />
              <span>FAQ's</span>
            </li>
            <hr />
            <li
              className={`link ${
                location.pathname === "/opportunities" ? "active" : ""
              }`}
              onClick={() => handleNavigation("/opportunities")}
            >
              <img className="nav-icon" src={opportunities} alt="" />
              <span>Opportunities</span>
            </li>
            <hr />
            <li
              className={`link ${
                location.pathname === "/blog" ? "active" : ""
              }`}
              onClick={() => handleNavigation("/blog")}
            >
              <img className="nav-icon" src={blog} alt="" />
              <span>Blog</span>
            </li>
            <hr />
            <li
              className={`link ${
                location.pathname === "/contact-us" ? "active" : ""
              }`}
              onClick={() => handleNavigation("/contact-us")}
            >
              <img className="nav-icon" src={contact} alt="" />
              <span>Contact Us</span>
            </li>
            <hr />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavMobile;
