import { useState } from "react";
import Box from "../Box";
import "../styles/Thirtytwo.css";

const Thirtytwo: React.FC = () => {
  const [swap, setSwap] = useState(false);
  return (
    <Box
      span={3}
      height={2}
      className={`thirtytwo ${swap ? "thirtytwo-red" : "thirtytwo-bg"}`}
    >
      <div
        className={!swap ? "thirtytwo-red" : "thirtytwo-bg"}
        onClick={() => setSwap(!swap)}
      ></div>
    </Box>
  );
};

export default Thirtytwo;
