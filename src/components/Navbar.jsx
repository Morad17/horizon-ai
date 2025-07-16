import React from "react";
import { useNavigate, useLocation } from "react-router";
import { TiArrowSortedDown } from "react-icons/ti";
import blog from "../assets/icons/blog.svg";
import home from "../assets/icons/home.svg";
import contact from "../assets/icons/contact.svg";
import opportunities from "../assets/icons/job.svg";
import about from "../assets/icons/about.svg";
import faq from "../assets/icons/faq.svg";

import logo from "../assets/images/horizon-logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <nav className="main-nav">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="main-nav-links">
        <li
          className={`link ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => handleNavigation("/")}
        >
          <img className="nav-icon" src={home} alt="" />
          <span>Home</span>
        </li>
        <li
          className={`link ${
            location.pathname === "/about-us" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/about-us")}
        >
          <img className="nav-icon" src={about} alt="" />
          <span>About Us</span>
        </li>
        <li
          className={`link ${location.pathname === "/faq" ? "active" : ""}`}
          onClick={() => handleNavigation("/faq")}
        >
          <img className="nav-icon" src={faq} alt="" />
          <span>FAQ's</span>
        </li>
        <li
          className={`link ${
            location.pathname === "/opportunities" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/opportunities")}
        >
          <img className="nav-icon" src={opportunities} alt="" />
          <span>Opportunities</span>
        </li>
        <li
          className={`link ${location.pathname === "/blog" ? "active" : ""}`}
          onClick={() => handleNavigation("/blog")}
        >
          <img className="nav-icon" src={blog} alt="" />
          <span>Blog</span>
        </li>
        <li
          className={`link ${
            location.pathname === "/contact-us" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/contact-us")}
        >
          <img className="nav-icon" src={contact} alt="" />
          <span>Contact Us</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
