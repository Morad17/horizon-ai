import React, { useState } from "react";

import clients from "../assets/images/clients.jpg";

const Clients = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    sector: "",
    about: "",
    budget: "",
    capacity: "",
    contactNumber: "",
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
    <div className="clients">
      <div className="background-wrapper"></div>
      <h1 className="page-title">Clients</h1>
      <div className="row">
        <div className="clients-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Business Name</label>
              <input
                className="name-group"
                type="text"
                placeholder="Name"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Sector</label>
              <input
                className="name-group"
                type="text"
                placeholder="Sector"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>A bit about your business</label>
              <textarea
                type="text"
                placeholder="About"
                name="about"
                value={formData.about}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Budget</label>
              <input
                type="number"
                placeholder="Budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Capacity at which you run</label>
              <input
                type="text"
                name="capacity"
                placeholder="Capacity"
                value={formData.capacity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="number"
                name="contactNumber"
                placeholder="Contact"
                value={formData.subjectMatter}
                onChange={handleChange}
                required
              />
            </div>
            <div className="btn-div">
              <button className="submit-btn" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="clients-image">
          <img src={clients} alt="" />
        </div>
      </div>

      <div className="row"></div>
    </div>
  );
};

export default Clients;
