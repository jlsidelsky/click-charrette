import { useState } from "react";
import Box from "../Box";
import "../styles/Thirtythree.css";

const Thirtythree: React.FC = () => {
  const [clicked, setClicked] = useState(0);
  return (
    <Box span={3} className={"thirtythree"}>
      <div style={{ transform: `rotate(${clicked}deg)` }}>
        <div onClick={() => setClicked(clicked + 90)}></div>
        <div onClick={() => setClicked(clicked + 90)}></div>
        <div onClick={() => setClicked(clicked + 90)}></div>
      </div>
    </Box>
  );
};
export default Thirtythree;
