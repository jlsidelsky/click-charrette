import { useState } from "react";
import Box from "../Box";
import "../styles/Twentyfour.css";

const Twentyfour: React.FC = () => {
  const [level, setLevel] = useState(8);
  const [zoomIn, setZoomIn] = useState(true);

  const handleClick = () => {
    if (zoomIn) {
      setLevel(level - 1);
      if (level === 2) {
        setZoomIn(false);
      }
    } else {
      setLevel(level + 1);
      if (level === 7) {
        setZoomIn(true);
      }
    }
  };
  return (
    <Box
      span={3}
      className="twentyfour"
      onClick={handleClick}
      style={{
        gridTemplateColumns: `repeat(${level}, 1fr)` /* Create 4 equal columns */,
        gridTemplateRows: `repeat(${level}, 1fr)`,
        cursor: zoomIn ? "zoom-in" : "zoom-out",
      }}
    >
      {Array.from({ length: level * level }, (_, index) => (
        <div key={index}></div>
      ))}
    </Box>
  );
};

export default Twentyfour;
