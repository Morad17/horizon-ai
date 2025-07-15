import React from "react";
import edinburgh from "../../assets/images/edinburgh.jpg";

const Launch = () => {
  return (
    <div className="launch article">
      <div className="background-wrapper"></div>
      <h2 className="page-title">Horizon Launch in Edinburgh</h2>
      <div className="article-content">
        <img src={edinburgh} alt="" className="article-image" />
        <p className="text-content">
          We are excited to announce that Horizon has officially launched in
          Edinburgh!
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
