import React, { useState } from "react";
import Box from "../Box";
import "../styles/Twentytwo.css";

const Twentytwo: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <Box className="twentytwo" span={4} onClick={() => setClicked(!clicked)}>
      <svg
        style={{ cursor: "pointer" }}
        viewBox="50 -10 20 57"
        xmlns="http://www.w3.org/2000/svg"
        width="75px"
        height="81px"
        onClick={scrollToTop}
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
          d="M60,50 L60,0" /* Path reversed to point upward */
        />
      </svg>
    </Box>
  );
};

export default Twentytwo;
