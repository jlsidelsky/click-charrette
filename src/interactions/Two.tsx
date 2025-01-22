import { useState } from "react";
import Box from "../Box";
import "../styles/Two.css";

const Two: React.FC = () => {
  const [clickNum, setClickNum] = useState(0);
  const increment = () => setClickNum(clickNum + 1);
  const borders = [
    "0px 2px 2px 0px",
    "0px 2px 2px 2px",
    "0px 0px 2px 2px",
    "2px 2px 2px 0px",
    "2px 2px 2px 2px",
    "2px 0px 2px 2px",
    "2px 2px 0px 0px",
    "2px 2px 0px 2px",
    "2px 0px 0px 2px",
  ];
  return (
    <Box span={3} className="two">
      {borders.map((val, index) => (
        <Square
          key={index}
          clickNum={clickNum}
          bw={val}
          increment={increment}
        ></Square>
      ))}
    </Box>
  );
};

interface SquareProps {
  clickNum: number;
  bw: string;
  increment: () => void;
}
const Square = ({ clickNum, bw, increment }: SquareProps) => {
  const [state, setState] = useState("blank"); // Possible values: 'blank', 'x', 'circle'

  const handleClick = () => {
    setState((prev) => {
      console.log(prev);
      console.log(clickNum);

      if (prev !== "blank") return prev;
      increment();
      return clickNum % 2 ? "x" : "circle";
    });
  };

  return (
    <div
      className={`two-square two-square-${state}`}
      onClick={handleClick}
      style={{ borderWidth: bw }}
    >
      {state === "circle" && <div className="two-circle"></div>}
      {state === "x" && (
        <>
          <div className="two-line two-line1"></div>
          <div className="two-line two-line2"></div>
        </>
      )}
    </div>
  );
};

export default Two;
