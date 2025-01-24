import React, { useState } from "react";
import Box from "../Box";
import "../styles/Nine.css";

const num = 6;
const Nine: React.FC = () => {
  const [circles, setCircles] = useState(num);

  return (
    <Box span={6} className="nine">
      {Array.from({ length: num }, (_, index) =>
        circ(index, circles, setCircles)
      )}
    </Box>
  );
};

const circ = (
  key: number,
  circles: number,
  setCircles: React.Dispatch<React.SetStateAction<number>>
) => {
  const [visible, setVisible] = useState(true);
  return (
    <div
      key={key}
      className="nine-circle"
      style={{
        height: `${100 / circles}%`,
        display: visible ? "block" : "none",
      }}
      onClick={() => {
        setCircles(circles - 1);
        setVisible(false);
      }}
    ></div>
  );
};

export default Nine;
