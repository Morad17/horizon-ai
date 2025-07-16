import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const mobileNav = () => {
  return (
    <nav>
      {/* Burger icon for mobile */}
      <div className="burger" onClick={() => setMobileOpen((v) => !v)}>
        <GiHamburgerMenu size={32} />
      </div>
      {/* Mobile nav */}
      {mobileOpen && (
        <div className="mobile-nav">
          <ul>
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
              className={`link ${
                location.pathname === "/blog" ? "active" : ""
              }`}
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
        </div>
      )}
    </nav>
  );
};

export default mobileNav;
