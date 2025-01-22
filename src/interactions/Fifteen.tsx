import React from "react";
import Box from "../Box";
import "../styles/Fifteen.css";

const Fifteen: React.FC = () => {
  return (
    <Box span={3} className="fifteen">
      <div className="fifteen-circle"></div>
    </Box>
  );
};

export default Fifteen;
