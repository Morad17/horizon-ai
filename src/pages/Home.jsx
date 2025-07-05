import React from "react";
import Hero from "../components/Hero";
import ElevenLabsWidget from "../components/ElevenLabsWidget";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      {/* ElevenLabs Conversational AI Widget */}
      <ElevenLabsWidget
        agentId={process.env.REACT_APP_AGENT_ID}
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
