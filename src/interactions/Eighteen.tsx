import React, { useState } from "react";
import Box from "../Box";
import "../styles/Eighteen.css";

const Eighteen: React.FC = () => {
  const colors = ["blue", "green", "brown", "purple", "black", "#c60000"];
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
