import React from "react";
import Box from "../Box";
import "../styles/Twentythree.css";

const Twentythree: React.FC = () => {
  return (
    <Box span={3} className="twentythree">
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index}></div>
      ))}
    </Box>
  );
};

export default Twentythree;
