import { useState } from "react";
import Box from "../Box";
import "../styles/Four.css";

const states = ["left", "right", "down", "up"];
const Four: React.FC = () => {
  const [state, setState] = useState(0);
  const handleClick = () => {
    setState((state + 1) % 4);
  };
  return (
    <Box span={3} className="four">
      <div
        className={`four-triangle four-triangle-${states[state]}`}
        onClick={handleClick}
      ></div>
    </Box>
  );
};

export default Four;
