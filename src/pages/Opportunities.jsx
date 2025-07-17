import { TiArrowSortedUp } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import management from "../assets/images/management.jpg";
import customer from "../assets/images/customer-service.jpg";
import recruitment from "../assets/images/recruitment.jpg";
import placeholder from "../assets/images/placeholder.png";
import { Link } from "react-router";
import Clients from "../components/Clients";

import test1 from "../assets/images/testimonial-1.webp";
import test2 from "../assets/images/testimonial-2.jpeg";

const Opportunities = () => {
  return (
    <div className="opportunities">
      <div className="background-wrapper"></div>
      <div className="title-row">
        <h1 className="page-title">Opportunities</h1>
        <p className="page-title-2">
          <strong>Looking to kick-start your career?</strong>
        </p>
      </div>

      <div className="op-cards">
        <div
          className="op-card"
          style={{ backgroundImage: `url(${customer})` }}
        >
          <div className="card-cta">
            <h3 className="card-title">Sales Assistant</h3>
            <button className="btn">
              <Link to="/contact-us">Click here</Link>
            </button>
          </div>
          <div className="card-desc">
            <p className="card-text">Minimum requirements</p>
            <p className="card-text">
              No experience required - full training provided
            </p>
            <p className="card-text">Eligible to work in the UK</p>
            <p className="card-text">Glasgow</p>
          </div>
        </div>
        <div
          className="op-card op-recruitment"
          style={{ backgroundImage: `url(${recruitment})` }}
        >
          <div className="card-cta">
            <h3 className="card-title">Recruitment Consultant</h3>
            <button className="btn">
              <Link to="/contact-us">Click here</Link>
            </button>
          </div>
          <div className="card-desc">
            <p className="card-text">Minimum requirements</p>
            <p className="card-text">Experience not essential but benefical</p>
            <p className="card-text">Full time</p>
            <p className="card-text">Eligible to work in the UK</p>
          </div>
        </div>
        <div
          className="op-card"
          style={{ backgroundImage: `url(${management})` }}
        >
          <div className="card-cta">
            <h3 className="card-title">Management Training Programme</h3>
            <button className="btn">
              <Link to="/contact-us">Click here</Link>
            </button>
          </div>
          <div className="card-desc">
            <p className="card-text">Minimum requirements</p>
            <p className="card-text">Must be educated to degree standard</p>
            <p className="card-text">Maximum 4 week notice</p>
            <p className="card-text">Eligible to work in the UK</p>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <hr className="hr-fade hr-up" />
        <h2 className="page-heading">Testimonials</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          width={null}
          className="op-carousel"
        >
          <SwiperSlide>
            <div className="slide-image">
              <img src={test1} alt="" />
            </div>
            <p className="slide-text">
              I started working with Horizon as I wanted a career change. The
              new skills I have learnt have been amazing and the team
              environment is second to none!
            </p>
            <p className="slide-author">
              <strong>Charlie</strong>{" "}
              <strong>Management Trainee Programme</strong>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-image">
              <img src={test2} alt="" />
            </div>
            <p className="slide-text">
              Working at Horizon has really helped build my confidence and
              taught me really good communication skills for the future!
            </p>
            <p className="slide-author">
              <strong> Victoria </strong>{" "}
              <strong>Management Trainee Programme</strong>
            </p>
          </SwiperSlide>
        </Swiper>
        <hr className="hr-fade hr-down" />
      </div>
      <Clients />
    </div>
  );
};

export default Opportunities;
