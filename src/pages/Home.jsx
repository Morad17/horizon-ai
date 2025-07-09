import React from "react";
import Hero from "../components/Hero";
import ElevenLabsWidget from "../components/ElevenLabsWidget";
import AboutUsHome from "../components/AboutUsHome";
import HiringCta from "../components/HiringCta";
import BlogsHome from "../components/BlogsHome";
import InstaHome from "../components/InstaHome";
import ContactUsHome from "../components/ContactUsHome";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <AboutUsHome />
      <HiringCta />
      <BlogsHome />
      <ContactUsHome />
      <InstaHome />
      {/* ElevenLabs Conversational AI Widget */}
      <ElevenLabsWidget
        agentId={process.env.REACT_APP_AGENT_ID}
        textOnly={false}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      />
    </div>
  );
};

export default Home;
