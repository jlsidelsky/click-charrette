import React from "react";
import Box from "../Box";
import "../styles/Thirteen.css";

const Thirteen: React.FC = () => {
  return (
    <Box span={3} className="thirteen">
      <div className="thirteen-circle"></div>
    </Box>
  );
};

export default Thirteen;
