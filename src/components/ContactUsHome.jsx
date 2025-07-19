import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import contact from "../assets/images/contact-us-img.jpg";
import { useNavigate } from "react-router";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_CONTACT_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY_CONTACT;

const ContactUsHome = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate(); // <-- Add this
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"

  const onSubmit = (data) => {
    setStatus("Sending...");
    setStatusType(""); // reset
    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY).then(
      () => {
        setStatus("Message sent");
        setStatusType("success");
        reset();
        setTimeout(() => {
          setStatus("");
          setStatusType("");
          navigate("/"); // <-- Navigate to home after 3 seconds
        }, 3000);
      },
      () => {
        setStatus("Failed to send. Please try again.");
        setStatusType("error");
        setTimeout(() => {
          setStatus("");
          setStatusType("");
        }, 5000); // Hide after 5 seconds
      }
    );
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              className="name-group"
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "First name is required" })}
            />
            <input
              className="name-group"
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: "Last name is required" })}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Phone"
              {...register("phone", { required: "Phone is required" })}
            />
          </div>
          <div className="form-group">
            <textarea
              className="textarea"
              placeholder="Subject Matter"
              {...register("subjectMatter", {
                required: "Subject is required",
              })}
            />
          </div>
          <button className="submit-btn" type="submit">
            Send Message
          </button>
        </form>
        {/* Error messages */}
        <div style={{ color: "red" }}>
          {errors.firstName && <p>{errors.firstName.message}</p>}
          {errors.lastName && <p>{errors.lastName.message}</p>}
          {errors.email && <p>{errors.email.message}</p>}
          {errors.phone && <p>{errors.phone.message}</p>}
          {errors.subjectMatter && <p>{errors.subjectMatter.message}</p>}
        </div>
        <div className={`status-message ${statusType}`}>
          {status && <p>{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactUsHome;
