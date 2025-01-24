import React from "react";
import Box from "../Box";
import "../styles/Twentyfive.css";

const Twentyfive: React.FC = () => {
  return (
    <Box className="twentyfive" span={4}>
      <a href="https://jlsidelsky.github.io/click-charrette/" target="_blank">
        <svg
          style={{ cursor: "pointer" }}
          viewBox="58 35 28 25"
          xmlns="http://www.w3.org/2000/svg"
          width="75px"
          height="75px"
        >
          <defs>
            <marker
              id="head"
              orient="auto"
              markerWidth="4"
              markerHeight="4"
              refX="2"
              refY="2"
            >
              <path d="M0,0 V4 L4,2 Z" fill="var(--red)" />
            </marker>
          </defs>

          <path
            id="arrow-line"
            marker-end="url(#head)"
            stroke-width="4"
            fill="none"
            stroke="var(--red)"
            d="M60,60 L80,40" /* Shortened path for a shorter arrow line */
          />
        </svg>
      </a>
    </Box>
  );
};

export default Twentyfive;
