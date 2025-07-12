import React from "react";
import glasgow from "../../assets/images/glasgow.jpg";

const Launch = () => {
  return (
    <div className="launch article">
      <div className="background-wrapper"></div>
      <h2 className="page-title">Horizon Launch in Glasgow</h2>
      <div className="article-content">
        <img src={glasgow} alt="" className="article-image" />
        <p className="text-content">
          We are excited to announce that Horizon has officially launched in
          Glasgow!
        </p>
        <p className="text-content">
          Please be sure to follow our socials to keep up-to-date.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Launch;
