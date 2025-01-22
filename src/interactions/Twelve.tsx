import React, { useState } from "react";
import Box from "../Box";
import "../styles/Twelve.css";

const BouncingCircle: React.FC = () => {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    setIsBouncing(true);
    // Reset the animation after it's complete
    setTimeout(() => setIsBouncing(false), 1000); // Matches animation duration
  };

  return (
    <div
      className={`bouncing-circle ${isBouncing ? "bouncing" : ""}`}
      onClick={handleClick}
    ></div>
  );
};

const Twelve: React.FC = () => {
  return (
    <Box span={3} className="twelve">
      <BouncingCircle></BouncingCircle>
    </Box>
  );
};

export default Twelve;
