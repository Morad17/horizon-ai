import React, { useState, useRef } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const recognitionRef = useRef(null);

  // Text-to-Speech
  const speak = (text) => {
    if ("speechSynthesis" in window) {
      const utter = new window.SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utter);
    }
  };

  // Speech-to-Text
  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser.");
      return;
    }
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };
    recognition.onerror = (event) => {
      alert("Speech recognition error: " + event.error);
    };
    recognition.start();
    recognitionRef.current = recognition;
  };

  const sendMessage = async (e) => {
    e && e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/elevenlabs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const botText = data.reply || data.message || "No response";
      const botMsg = { from: "bot", text: botText };
      setMessages((msgs) => [...msgs, botMsg]);
      speak(botText); // Speak the bot's reply
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "Error contacting ElevenLabs." },
      ]);
    }
    setInput("");
    setLoading(false);
  };

  return (
    <div className="chatbot">
      <div
        className="chat-window"
        style={{ maxHeight: 300, overflowY: "auto", marginBottom: 10 }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.from === "user" ? "chat-user" : "chat-bot"}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="chat-bot">...</div>}
      </div>
      <form
        onSubmit={sendMessage}
        className="chat-form"
        style={{ display: "flex", gap: 8 }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type or use the mic..."
          disabled={loading}
          style={{ flex: 1 }}
        />
        <button
          type="button"
          onClick={startListening}
          disabled={loading}
          title="Speak"
        >
          🎤
        </button>
        <button type="submit" disabled={loading || !input.trim()}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
