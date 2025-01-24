import { useState } from "react";
import Box from "../Box";
import "../styles/Twentynine.css";

const Twentynine: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Box
      span={3}
      className="twentynine"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="twentynine-container">
        <div
          className={`twentynine-box  ${isHovered ? "twentynine-hover" : ""}`}
        ></div>
      </div>
    </Box>
  );
};

export default Twentynine;
