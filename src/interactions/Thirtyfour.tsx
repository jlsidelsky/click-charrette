import { useState } from "react";
import Box from "../Box";
import "../styles/Thirtyfour.css";

const Thirtyfour: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <Box span={3} className={"thirtyfour"}>
      <div
        className={`thirtyfour-lil ${clicked ? "thirty-four-grow" : ""}`}
        onClick={() => setClicked(!clicked)}
      ></div>
      <div
        className={`thirtyfour-main ${clicked ? "thirty-four-shrink" : ""}`}
        onClick={() => setClicked(!clicked)}
      ></div>
      <div
        className={`thirtyfour-lil ${clicked ? "thirty-four-grow" : ""}`}
        onClick={() => setClicked(!clicked)}
      ></div>
    </Box>
  );
};

export default Thirtyfour;
