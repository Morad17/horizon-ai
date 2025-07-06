import React from "react";

import background from "../assets/images/bg-hero-img.jpg";

const Hero = () => {
  return (
    <div className="hero full-page">
      <img className="image" src={background} alt="" />
      <div className="hero-title">
        <h2 className="title">Horizon</h2>
        <h2 className="title">Marketing</h2>
      </div>
    </div>
  );
};

export default Hero;
