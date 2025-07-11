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
            <h3 className="card-title">Customer Service</h3>
            <button className="btn">
              <Link to="/contact-us">Click here</Link>
            </button>
          </div>
          <div className="card-desc">
            <p className="card-text">1 Position Available</p>
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
            <p className="card-text">Postion Filled</p>
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
            <p className="card-text">1 Positon Available</p>
            <p className="card-text">Minimum requirements</p>
            <p className="card-text">Must be educated to degree standard</p>
            <p className="card-text">Maximum 4 week notice</p>
            <p className="card-text">Eligible to work in the UK</p>
          </div>
        </div>
      </div>
      <div className="testimonials">
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
              <img
                src="https://phoenix-scotland.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-13-at-09.30.45-150x150.jpeg"
                alt=""
              />
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
          <SwiperSlide className="swiper-slide">
            <div className="slide-image">
              <img src={placeholder} alt="" />
            </div>
            <p className="slide-text">
              Working with Horizon has been amazing the clear progression route
              combined with the training has been great!
            </p>
            <p className="slide-author">
              <strong>Joe</strong>
              <strong>Management Trainee Programme </strong>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-image">
              <img
                src="https://phoenix-scotland.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-07-at-13.55.28-e1699639975131-150x150.jpeg"
                alt=""
              />
            </div>
            <p className="slide-text">
              Working at Horizon has really helped build my confidence and
              taught me really good communication skills for the future!
            </p>
            <p className="slide-author">
              <strong> Victoria Management</strong>{" "}
              <strong>Trainee Programme</strong>
            </p>
          </SwiperSlide>
        </Swiper>
        {/* <div className="slide">
          <h3 className="slide-title"></h3>
          <div className="slide-image"></div>
          <p className="slide-text"></p>
          <p className="slide-author"></p>
        </div> */}
      </div>
    </div>
  );
};

export default Opportunities;
