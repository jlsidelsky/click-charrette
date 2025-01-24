import React, { useState } from "react";
import Box from "../Box";
import "../styles/Eighteen.css";

const Eighteen: React.FC = () => {
  const colors = [
    "rgb(0, 0, 255)",
    "rgb(0, 128, 0)",
    "rgb(165, 42, 42)",
    "rgb(139,69,19)",
    "rgb(128, 0, 128)",
    "rgb(0, 0, 0)",
    "rgb(197,0,1)",
  ];
  const [index, setIndex] = useState(0);
  const root = document.documentElement;
  const handleClick = () => {
    setIndex(index + 1);
    root.style.setProperty("--red", colors[index % colors.length]);
  };
  return (
    <Box span={4} className="eighteen">
      <p onClick={handleClick}>color</p>
    </Box>
  );
};

export default Eighteen;
