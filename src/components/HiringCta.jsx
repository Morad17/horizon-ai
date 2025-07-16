import { useLocation, useNavigate } from "react-router";
import hiring from "../assets/images/hiring.jpg";

const HiringCta = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };
  return (
    <div
      className="hiring-cta-page"
      style={{
        backgroundImage: `url(${hiring})`,
        width: "100%",
      }}
    >
      <div className="background-wrapper"></div>
      <section className="centered-section">
        <h2 className="page-title">Looking to kickstart your career?</h2>
        <h2 className="page-title">We are hiring!</h2>
        <button
          className={`btn link ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => handleNavigation("/contact-us")}
        >
          Get In Touch Today
        </button>
      </section>
    </div>
  );
};

export default HiringCta;
