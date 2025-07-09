import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import leads from "../assets/images/leads.jpg";
import sales from "../assets/images/sales.jpg";
import about1 from "../assets/gif/about1.lottie";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="background-wrapper"></div>
      <h1 className="page-title">ABOUT US</h1>
      <div className="about-cards">
        <div className="about-card">
          <DotLottieReact
            src="https://lottie.host/dedf8615-bb34-4173-87e7-07f6e58794e5/EBjCkWzxyb.lottie"
            loop
            autoplay
            className="card-image"
          />
          <h2 className="card-title">Sales and Promotions</h2>
          <p className="card-text">
            We have a team of experienced sales executives engaging with
            consumers on a daily basis converting quality leads to direct sales.
          </p>
        </div>
        <div className="about-card">
          <DotLottieReact
            src="https://lottie.host/9da75af9-d35e-413e-b04e-982a5a9ce64e/u2giAmmJvm.lottie"
            loop
            autoplay
            speed="0.5"
            className="card-image"
          />
          <h2 className="card-title">Customer Acquisition</h2>
          <p className="card-text">
            By creating campaigns that consumers can really identify with, we
            can increase our clients' customer acquisition.
          </p>
        </div>
        <div className="about-card">
          <DotLottieReact
            src="https://lottie.host/f81d7a91-7031-4916-8f60-781db05e42a8/II0qoogGcM.lottie"
            speed="1"
            loop
            autoplay
            className="card-image"
          />
          <h2 className="card-title">Face-to-face</h2>
          <p className="card-text">
            Through our personalised campaigns we are able to connect with
            consumers through face-to-face marketing methods which helps to
            create a long-lasting bond between brand and consumer.
          </p>
        </div>
        <div className="about-card">
          <DotLottieReact
            src="https://lottie.host/0b4f1072-15a2-464d-a121-aff9abe7f4f2/SB2o8387eI.lottie"
            loop
            autoplay
            className="card-image"
          />
          <h2 className="card-title">Lead Generation</h2>
          <p className="card-text">
            Through our extensive market research we are able to create an ideal
            consumer profile and generate hot leads to follow to increase
            results.
          </p>
        </div>
        <div className="about-card">
          <DotLottieReact
            src="https://lottie.host/5e882f18-f7ff-4394-a201-e4c72f129264/1zxotTqVSh.lottie"
            loop
            autoplay
            className="card-image"
          />
          <h2 className="card-title">Marketing and Branding</h2>
          <p className="card-text">
            Our unique approach allows us to communicate with consumers on
            behalf of our clients’ brands in order to increase their sales
            results and acquire quality consumers.
          </p>
        </div>
        <div className="about-card">
          <DotLottieReact
            src="https://lottie.host/8ab68b6d-fe4d-41ad-870a-32354d186444/Wg00rZsuRN.lottie"
            loop
            speed="0.5"
            autoplay
            className="card-image"
          />
          <h2 className="card-title">High ROI</h2>
          <p className="card-text">
            We focus primarily on delivering a low investment, high return on
            investment agreement (ROI) for both established and up and coming
            brands alike.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
