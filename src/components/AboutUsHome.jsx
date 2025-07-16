import { FaPeopleArrows } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { FaPeopleLine } from "react-icons/fa6";

const AboutUsHome = () => {
  return (
    <div className="about-us-home full-page">
      <section className="our-services">
        <h2 className="page-title">Our Services</h2>
        <div className="row">
          <div className="service-card">
            <FaPeopleArrows className="card-svg" />
            <h3 className="card-title">Face-to-face</h3>
            <p className="card-text">
              Through our personalised campaigns we are able to connect with
              consumers through face-to-face marketing methods which helps to
              create a long-lasting bond between brand and consumer.
            </p>
          </div>
          <div className="service-card">
            <BsGraphUpArrow className="card-svg" />
            <h3 className="card-title">Visible Results</h3>
            <p className="card-text">
              Due to the direct nature of our process, we are able to produce
              highly measurable results that can be delivered daily, weekly, or
              monthly. This way we can make any necessary changes to your
              campaign.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="service-card">
            <TbTargetArrow className="card-svg" />
            <h3 className="card-title">Customer Acquisition</h3>
            <p className="card-text">
              By creating campaigns that consumers can really identify with, we
              are more effective than traditional forms of marketing and can
              increase our clients’ customer acquisition
            </p>
          </div>

          <div className="service-card">
            <FaPeopleLine className="card-svg" />
            <h3 className="card-title">Lead Generation</h3>
            <p className="card-text">
              By utilising our services, your brand can benefit from our
              extensive market research. We are able to create an ideal consumer
              profile and generate hot leads to follow to increase results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsHome;
