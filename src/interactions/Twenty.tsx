import React, { useState } from "react";
import Box from "../Box";
import "../styles/Twenty.css";

const Twenty: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <Box span={3} className="twenty" onClick={() => setClicked(!clicked)}>
      <div
        className={`twenty-container twenty-container-1 ${
          clicked ? "twenty-spin" : "false"
        }`}
      >
        <div className="twenty-slice "></div>
      </div>
      <div
        className={`twenty-container twenty-container-2 ${
          clicked ? "twenty-spin" : "false"
        }`}
      >
        <div className="twenty-slice twenty-slice-2 "></div>
      </div>
    </Box>
  );
};

export default Twenty;
