import { useState } from "react";
import Box from "../Box";
import "../styles/Thirtynine.css";

const Thirtynine: React.FC = () => {
  const [ripples, setRipples] = useState<
    { left: number; top: number; id: number }[]
  >([]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const box = event.currentTarget;
    const rect = box.getBoundingClientRect();

    const left = ((event.clientX - rect.left) / rect.width) * 100;
    const top = ((event.clientY - rect.top) / rect.height) * 100;

    const id = Date.now();
    setRipples((prev) => [...prev, { left, top, id }]);

    setTimeout(
      () => setRipples((prev) => prev.filter((ripple) => ripple.id !== id)),
      1500
    );
  };

  return (
    <Box
      span={5}
      className="thirtynine"
      style={{ position: "relative", overflow: "hidden" }}
      onClick={handleClick}
    >
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripple"
          style={{
            left: `${ripple.left}%`,
            top: `${ripple.top}%`,
          }}
        ></div>
      ))}
    </Box>
  );
};

export default Thirtynine;
