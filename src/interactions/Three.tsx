import React, { useState } from "react";
import Box from "../Box";
import "../styles/Three.css";

// Represents a single square
interface SquareProps {
  level: number; // Tracks the square's level in the hierarchy
}

const Square: React.FC<SquareProps> = ({ level }) => {
  const [hasDivided, setHasDivided] = useState(false);

  const handleClick = () => {
    if (!hasDivided) {
      setHasDivided(true);
    }
  };

  return (
    <div
      className={`three-square ${!hasDivided ? "filled" : ""}`} // Add "filled" class only if not divided
      onClick={handleClick}
      style={{
        display: "grid",
        gridTemplateColumns: hasDivided ? "repeat(2, 1fr)" : "1fr",
        gridTemplateRows: hasDivided ? "repeat(2, 1fr)" : "1fr",
        gap: "10px", // Ensures consistent spacing
      }}
    >
      {hasDivided &&
        Array.from({ length: 4 }, (_, index) => (
          <Square key={`${level}-${index}`} level={level + 1} />
        ))}
    </div>
  );
};

const Three: React.FC = () => {
  return (
    <Box span={3} className="three">
      {/* Start with a single root square */}
      <Square level={0} />
    </Box>
  );
};

export default Three;
