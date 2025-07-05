import React from "react";
import { Link } from "react-router";
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="nav-logo">LOGO</div>
      <ul className="main-nav-links">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <ul>
          <Link to="/test">About Us</Link>
          <TiArrowSortedDown />
          <li className="link">
            <Link to="/">About Us</Link>
          </li>
          <li className="link">
            <Link to="/">Faq</Link>
          </li>
          <li className="link">
            <Link to="/">Test Link</Link>
          </li>
        </ul>
        <ul>
          <Link to="/">Opportunities</Link>
          <TiArrowSortedDown />
          <li className="link">
            <Link to="/">Clients</Link>
          </li>
          <li className="link">
            <Link to="/">Opportunities</Link>
          </li>
          <li className="link">
            <Link to="/">Careers</Link>
          </li>
        </ul>
        <li className="link">
          <Link to="/">Blog</Link>
        </li>
        <li className="link">
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
