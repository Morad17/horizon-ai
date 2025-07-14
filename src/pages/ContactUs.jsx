import React, { useState } from "react";
import contact from "../assets/images/contact.jpg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subjectMatter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to: ${value}`); // Debug log
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-us">
      <div className="background-wrapper"></div>
      <h2 className="page-title">Contact Us</h2>
      <div className="contact-content">
        <div className="contact-form">
          <div className="contact-wrapper">
            <h2 className="page-title">Get In Touch</h2>
            <p className="page-disclaimer">
              <strong>
                We are always open to receive any inquiry or feedback. Please
                feel free to drop us an email using the form below and we will
                get back to you as soon as we can. We aim to answer all
                enquiries within 48 hours.
              </strong>
            </p>

            <form onSubmit={handleSubmit}>
              <h3></h3>
              <div className="form-group">
                <input
                  className="name-group"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  className="name-group"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="textarea"
                  name="subjectMatter"
                  placeholder="Subject Matter"
                  value={formData.subjectMatter}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="submit-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="contact-image">
          <DotLottieReact
            src="https://lottie.host/5e882f18-f7ff-4394-a201-e4c72f129264/1zxotTqVSh.lottie"
            loop
            autoplay
            className="card-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
