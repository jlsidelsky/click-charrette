import { useState } from "react";
import Box from "../Box";
// import "../styles/Thirtyone.css";

const Thirtyone = () => {
  const [dots, setDots] = useState<{ left: number; top: number }[]>([]); // Store drawn dots
  const [isMouseDown, setIsMouseDown] = useState(false);

  const mouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const box = event.currentTarget;
    const rect = box.getBoundingClientRect();

    // Calculate position relative to the box
    const left = ((event.clientX - rect.left) / rect.width) * 100;
    const top = ((event.clientY - rect.top) / rect.height) * 100;

    setDots((prevDots) => [...prevDots, { left, top }]);
    setIsMouseDown(true);
  };
  const mouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    const box = event.currentTarget;
    const rect = box.getBoundingClientRect();

    // Calculate position relative to the box
    const left = ((event.clientX - rect.left) / rect.width) * 100;
    const top = ((event.clientY - rect.top) / rect.height) * 100;

    setDots((prevDots) => [...prevDots, { left, top }]);
  };
  const mouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <Box
      span={6}
      height={2}
      className="thirtyone"
      style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
      onMouseDown={mouseDown}
      onMouseMove={mouseMove}
      onMouseUp={mouseUp}
    >
      {dots.map((dot, index) => (
        <div
          key={index}
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "var(--red, red)",
            borderRadius: "50%",
            position: "absolute",
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            transform: "translate(-50%, -50%)", // Center the dot
          }}
        ></div>
      ))}
    </Box>
  );
};

export default Thirtyone;
