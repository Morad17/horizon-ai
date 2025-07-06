import React, { useState } from "react";
import contact from "../assets/images/contact-us-img.jpg";

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
    <div
      className="contact-us-home"
      style={{ backgroundImage: `url(${contact})` }}
    >
      <div className="background-wrapper"></div>
      <div className="contact-form">
        <h2 className="page-title">Contact Us</h2>
        <p>All enquiries will be answered within 48 hours on business days</p>
        <form onSubmit={handleSubmit}>
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
  );
};

export default ContactUs;
