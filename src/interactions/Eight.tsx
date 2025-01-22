import { useState } from "react";
import Box from "../Box";
import "../styles/Eight.css";

const Eight: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const bars = 8;

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Box span={6} className="eight" onClick={handleClick}>
      {Array.from({ length: bars }, (_, index) => (
        <div className="eight-container" key={index}>
          <div
            className="eight-bar"
            style={{
              height: `${(index + 1) * (100 / bars)}%`,
              transform: `translateY(${isClicked ? 100 : 0}%)`,
              transition: "transform 0.5s ease", // Smooth animation on transform
            }}
          ></div>
        </div>
      ))}
    </Box>
  );
};

export default Eight;
