import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom"; // <-- Add this

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const CAREERS_TEMPLATE_ID = process.env.REACT_APP_CAREERS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY_CAREERS;

const Careers = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"
  const [password, setPassword] = useState("");
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const navigate = useNavigate(); // <-- Add this

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "questionnaire") {
      setShowQuestionnaire(true);
      setStatus("");
    } else {
      setStatus("Incorrect password.");
      setStatusType("error");
      setTimeout(() => {
        setStatus("");
        setStatusType("");
      }, 3000);
    }
  };

  const onSubmit = (data) => {
    setStatus("Sending...");
    setStatusType("");
    emailjs.send(SERVICE_ID, CAREERS_TEMPLATE_ID, data, PUBLIC_KEY).then(
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
        }, 5000);
      }
    );
  };

  return (
    <div className="careers page">
      <h2 className="page-title">Career</h2>
      <div className="background-wrapper"></div>
      {showQuestionnaire ? (
        <section className="questionnaire">
          <div className="contact-form">
            <h2 className="page-title">Questionnaire</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="career-name">Name</label>
                <input
                  id="career-name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="career-number">Phone Number</label>
                <input
                  id="career-number"
                  type="text"
                  {...register("number", { required: "Number is required" })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="career-interviewToday">
                  Why do you want to interview today?
                </label>
                <textarea
                  id="career-interviewToday"
                  {...register("interviewToday", {
                    required: "This field is required",
                  })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="career-salesEffective">
                  What makes you effective at sales?
                </label>
                <textarea
                  id="career-salesEffective"
                  {...register("salesEffective", {
                    required: "This field is required",
                  })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="career-goals">What are your goals?</label>
                <textarea
                  id="career-goals"
                  {...register("goals", {
                    required: "This field is required",
                  })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="career-strengths">
                  What are your strengths?
                </label>
                <textarea
                  id="career-strengths"
                  {...register("strengths", {
                    required: "This field is required",
                  })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="career-feedback">Any feedback for us?</label>
                <textarea
                  id="career-feedback"
                  {...register("feedback", {
                    required: "This field is required",
                  })}
                />
              </div>
              <button className="submit-btn" type="submit">
                Send Message
              </button>
            </form>
            {/* Error messages */}
            <div className="validation-message" style={{ color: "red" }}>
              {errors.name && <p>{errors.name.message}</p>}
              {errors.number && <p>{errors.number.message}</p>}
              {errors.interviewToday && <p>{errors.interviewToday.message}</p>}
              {errors.salesEffective && <p>{errors.salesEffective.message}</p>}
              {errors.goals && <p>{errors.goals.message}</p>}
              {errors.strengths && <p>{errors.strengths.message}</p>}
              {errors.feedback && <p>{errors.feedback.message}</p>}
            </div>
            <div className={`status-message ${statusType}`}>
              {status && <p>{status}</p>}
            </div>
          </div>
        </section>
      ) : (
        <div className="career-content">
          <p className="career-heading">
            This content is password protected. To view it please enter your
            password below:
          </p>
          {!showQuestionnaire && (
            <form className="password-section" onSubmit={handlePasswordSubmit}>
              <label htmlFor="career-password">Password</label>
              <input
                id="career-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
              <button type="submit">Enter</button>
              <div className={`status-message ${statusType}`}>
                {status && <p>{status}</p>}
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Careers;
