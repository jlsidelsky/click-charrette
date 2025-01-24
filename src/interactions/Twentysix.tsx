import React from "react";
import Box from "../Box";
import "../styles/Twentysix.css";

const Twentysix: React.FC = () => {
  return (
    <Box className="twentysix" span={3}>
      <svg
        onClick={() => window.location.reload()}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100"
        height="100"
        fill="currentColor"
      >
        <path d="M12 2a10 10 0 1 1-7.07 2.93.75.75 0 0 1 1.06 1.06A8.5 8.5 0 1 0 12 3.5V6a.75.75 0 0 1-1.28.53L8.22 4.03a.75.75 0 0 1 0-1.06L10.72.97A.75.75 0 0 1 12 1.5v1.5Z" />
      </svg>
    </Box>
  );
};

export default Twentysix;
