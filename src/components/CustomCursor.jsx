import React, { useEffect } from "react";
import logoCursor from "../assets/images/horizon-logo-icon-1.png";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("img");
    cursor.src = logoCursor;
    cursor.style.position = "fixed";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = "999999";
    cursor.style.width = "24px";
    cursor.style.height = "24px";
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.mixBlendMode = "multiply";
    document.body.appendChild(cursor);

    // Offset values (pixels)
    const offsetX = -5; // right
    const offsetY = -5; // up

    // For staggered movement
    let targetX = 0,
      targetY = 0;
    let currentX = 0,
      currentY = 0;

    const move = (e) => {
      targetX = e.clientX + offsetX;
      targetY = e.clientY + offsetY;
    };

    // Animation loop for delayed movement
    const animate = () => {
      // Adjust the 0.15 for more/less delay
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CustomCursor;
