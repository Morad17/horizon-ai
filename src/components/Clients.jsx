import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import clients from "../assets/images/clients.jpg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom"; // <-- import this

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const CLIENT_TEMPLATE_ID = process.env.REACT_APP_CLIENT_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY_CONTACT;

const Clients = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"
  const navigate = useNavigate(); // <-- use this

  const onSubmit = (data) => {
    setStatus("Sending...");
    setStatusType("");
    emailjs.send(SERVICE_ID, CLIENT_TEMPLATE_ID, data, PUBLIC_KEY).then(
      () => {
        setStatus("Message sent");
        setStatusType("success");
        reset();
        setTimeout(() => {
          setStatus("");
          setStatusType("");
          navigate("/"); // <-- navigate to homepage after 3 seconds
        }, 3000);
      },
      () => {
        setStatus("Failed to send. Please try again.");
        setStatusType("error");
        setTimeout(() => {
          setStatus("");
          setStatusType("");
        }, 5000);
      }
    );
  };

  return (
    <div className="clients">
      <div className="background-wrapper"></div>
      <h1 className="page-title">Ready to connect?</h1>
      <div className="row">
        <div className="clients-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Business Name</label>
              <input
                className="name-group"
                type="text"
                placeholder="Name"
                {...register("businessName", {
                  required: "Business name is required",
                })}
              />
            </div>
            <div className="form-group">
              <label>Sector</label>
              <input
                className="name-group"
                type="text"
                placeholder="Sector"
                {...register("sector", { required: "Sector is required" })}
              />
            </div>
            <div className="form-group">
              <label>A bit about your business</label>
              <textarea
                type="text"
                placeholder="About"
                {...register("about", { required: "About is required" })}
              />
            </div>
            <div className="form-group">
              <label>Budget</label>
              <input
                type="number"
                placeholder="Budget"
                {...register("budget", { required: "Budget is required" })}
              />
            </div>
            <div className="form-group">
              <label>Capacity at which you run</label>
              <input
                type="text"
                placeholder="Capacity"
                {...register("capacity", { required: "Capacity is required" })}
              />
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="text"
                placeholder="Contact Number"
                {...register("contactNumber", {
                  required: "Contact number is required",
                })}
              />
            </div>
            <div className="form-group">
              <label>Contact Name</label>
              <input
                type="text"
                placeholder="Contact Name"
                {...register("contactName", {
                  required: "Contact name is required",
                })}
              />
            </div>
            <div className="btn-div">
              <button className="submit-btn" type="submit">
                Send Message
              </button>
            </div>
          </form>
          {/* Error messages */}
          <div className="validation-message" style={{ color: "red" }}>
            {errors.businessName && <p>{errors.businessName.message}</p>}
            {errors.sector && <p>{errors.sector.message}</p>}
            {errors.about && <p>{errors.about.message}</p>}
            {errors.budget && <p>{errors.budget.message}</p>}
            {errors.capacity && <p>{errors.capacity.message}</p>}
            {errors.contactNumber && <p>{errors.contactNumber.message}</p>}
            {errors.contactName && <p>{errors.contactName.message}</p>}
          </div>
          <div className={`status-message ${statusType}`}>
            {status && <p>{status}</p>}
          </div>
        </div>
        <div className="clients-image">
          <DotLottieReact
            src="https://lottie.host/6bf128ea-6c5a-41c7-92c3-1f3ca0d1063f/9kwJ2ImF9c.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
