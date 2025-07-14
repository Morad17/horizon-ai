import React from "react";
import { Link } from "react-router";
import { TiArrowSortedDown } from "react-icons/ti";
import blog from "../assets/icons/blog.svg";
import home from "../assets/icons/home.svg";
import contact from "../assets/icons/contact.svg";
import opportunities from "../assets/icons/job.svg";
import about from "../assets/icons/about.svg";

import logo from "../assets/images/logo.JPG";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="main-nav-links">
        <li className="link">
          <img className="nav-icon" src={home} alt="" />
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown d-about">
          <div className="dropdown-main">
            <div className="dropdown-title">
              <img className="nav-icon" src={about} alt="" />
              <Link to="/about-us">About Us</Link>
            </div>

            <TiArrowSortedDown className="dropdown-arrow" />
          </div>
          <ul className="dropdown-menu">
            <li className="dropdown-link">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="dropdown-link">
              <Link to="/faq">FAQ's</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown d-opportunities">
          <div className="dropdown-main">
            <div className="dropdown-title">
              <img className="nav-icon" src={opportunities} alt="" />
              <Link to="/opportunities">Opportunities</Link>
            </div>

            <TiArrowSortedDown className="dropdown-arrow" />
          </div>
          <ul className="dropdown-menu">
            <li className="dropdown-link">
              <Link to="/clients">Clients</Link>
            </li>
            <li className="dropdown-link">
              <Link to="/opportunities">Opportunities</Link>
            </li>
            <li className="dropdown-link">
              <Link to="/money-generated">Money Generated</Link>
            </li>
          </ul>
        </li>
        <li className="link">
          <img className="nav-icon" src={blog} alt="" />
          <Link to="/blog">Blog</Link>
        </li>
        <li className="link">
          <img className="nav-icon" src={contact} alt="" />
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
