import React, { useEffect, useRef, useState } from "react";

const ElevenLabsWidget = ({ agentId, ...props }) => {
  const widgetRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector(
      'script[src="https://elevenlabs.io/convai-widget/index.js"]'
    );

    if (existingScript) {
      // Script already exists, check if it's loaded
      if (window.ElevenLabsConvAI || existingScript.readyState === "complete") {
        setScriptLoaded(true);
      } else {
        existingScript.addEventListener("load", () => setScriptLoaded(true));
      }
    } else {
      // Load the script for the first time
      const script = document.createElement("script");
      script.src = "https://elevenlabs.io/convai-widget/index.js";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (scriptLoaded && widgetRef.current && agentId) {
      // Set the agent ID attribute
      widgetRef.current.setAttribute("agent-id", agentId);
    }
  }, [scriptLoaded, agentId]);

  // Only render the custom element if script is loaded
  if (!scriptLoaded) {
    return <div>Loading AI assistant...</div>;
  }

  return <elevenlabs-convai ref={widgetRef} agent-id={agentId} {...props} />;
};

export default ElevenLabsWidget;
