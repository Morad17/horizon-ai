import { motion } from "framer-motion";
import { useRef } from "react";

import useMousePosition from "../utils/useMousePositon";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 320 : 40;
  const maskRef = useRef(null);

  // Calculate relative position
  let maskX = 0,
    maskY = 0;
  if (maskRef.current && x !== null && y !== null) {
    const rect = maskRef.current.getBoundingClientRect();
    maskX = x - rect.left;
    maskY = y - rect.top;
  }

  return (
    <div className="hero full-page">
      <div className="background-wrapper"></div>
      <section className="top-section">
        <div className="hero-title">
          <h2 className="title">Broaden your</h2>
          <h2 className="title main-title">Horizon</h2>
        </div>
        {/* <div className="cta-div">
          <button className="btn">Get Started</button>
        </div> */}
      </section>
      <motion.div
        ref={maskRef}
        animate={{
          WebkitMaskPosition: `${maskX - size / 2}px ${maskY - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        className="mask"
      >
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="summary-text-mask"
        >
          We help established and emerging brands grow across the UK through
          smart, personalised campaigns. Based in Glasgow, we craft strategies
          that build loyal customers and drive real results.
        </p>
      </motion.div>
      <p className="summary-text">
        We help established and emerging brands grow across the UK through
        smart, personalised campaigns. Based in Glasgow, we craft strategies
        that build loyal customers and drive real results.
      </p>
    </div>
  );
};

export default Hero;
