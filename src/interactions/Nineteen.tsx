import React, { useState } from "react";
import Box from "../Box";
import "../styles/Nineteen.css";

const Nineteen: React.FC = () => {
  const colors = [
    "aliceblue",
    "azure",
    "blanchedalmond",
    "coral",
    "darkkhaki",
    "gainsboro",
    "ghostwhite",
    "greenyellow",
    "honeydew",
    "lightgoldenrodyellow",
    "lightpink",
    "lightgray",
    "oldlace",
    "#fff5e2",
  ];
  const [index, setIndex] = useState(0);
  const root = document.documentElement;
  const handleClick = () => {
    setIndex(index + 1);
    root.style.setProperty("--bg", colors[index % colors.length]);
  };
  return (
    <Box span={4} className="nineteen">
      <p onClick={handleClick}>background color</p>
    </Box>
  );
};

export default Nineteen;
