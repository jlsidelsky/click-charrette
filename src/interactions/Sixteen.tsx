import React, { useState } from "react";
import Box from "../Box";
import "../styles/Sixteen.css";

const Sixteen: React.FC = () => {
  const [orbit, setOrbit] = useState(false);
  return (
    <Box span={3} className="sixteen">
      <div
        className={`sixteen-circle ${orbit ? "sixteen-spin" : ""}`}
        onClick={() => setOrbit(!orbit)}
      ></div>
    </Box>
  );
};

export default Sixteen;
