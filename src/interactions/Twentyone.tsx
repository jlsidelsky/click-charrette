import React, { useState } from "react";
import Box from "../Box";
import "../styles/Twentyone.css";

const Twentyone: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // Scroll to the bottom of the page
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <Box className="twentyone" span={4} onClick={() => setClicked(!clicked)}>
      <svg
        style={{ cursor: "pointer" }}
        viewBox="50 0 20 57"
        xmlns="http://www.w3.org/2000/svg"
        width="75px"
        height="81px"
        onClick={scrollToBottom}
      >
        <defs>
          <marker
            id="head"
            orient="auto"
            markerWidth="3"
            markerHeight="4"
            refX="0.1"
            refY="2"
          >
            <path d="M0,0 V4 L2,2 Z" fill="var(--red)" />
          </marker>
        </defs>

        <path
          id="arrow-line"
          marker-end="url(#head)"
          stroke-width="4"
          fill="none"
          stroke="var(--red)"
          d="M60,0 L60,50"
        />
      </svg>
    </Box>
  );
};

export default Twentyone;
