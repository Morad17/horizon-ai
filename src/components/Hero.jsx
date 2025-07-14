import React from "react";

import background from "../assets/images/bg-hero-img.jpg";

const Hero = () => {
  return (
    <div className="hero full-page">
      <img className="image" src={background} alt="" />
      <div className="hero-title">
        <h2 className="title">Broaden your</h2>
        <h2 className="title main-title">Horizon</h2>
      </div>
    </div>
  );
};

export default Hero;
