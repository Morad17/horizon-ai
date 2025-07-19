import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const CONTACT_TEMPLATE_ID = process.env.REACT_APP_CONTACT_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY_CONTACT;

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setStatus("Sending...");
    setStatusType(""); // reset
    emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, data, PUBLIC_KEY).then(
      () => {
        setStatus("Message sent");
        setStatusType("success");
        reset();
        setTimeout(() => {
          setStatus("");
          setStatusType("");
          navigate("/");
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

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  className="name-group"
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                <input
                  className="name-group"
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
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
            <div className="validation-message" style={{ color: "red" }}>
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
