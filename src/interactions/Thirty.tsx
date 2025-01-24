import { useState, useEffect } from "react";
import Box from "../Box";

const Thirty = () => {
  const [position, setPosition] = useState({ left: 5, top: 20 });
  const [velocity, setVelocity] = useState({ dx: 2, dy: 3 });
  const [isHovered, setIsHovered] = useState(false);
  const [trail, setTrail] = useState<{ left: number; top: number }[]>([]); //
  const ballD = 10;

  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(() => {
      setPosition((prev) => {
        let newLeft = prev.left + velocity.dx;
        let newTop = prev.top + velocity.dy;

        let newDx = velocity.dx;
        let newDy = velocity.dy;

        // Check for collision with edges
        if (newLeft <= 0 || newLeft >= 100 - ballD) {
          newDx = -newDx;
        }
        if (newTop <= 0 || newTop >= 100 - ballD) {
          newDy = -newDy;
        }

        setTrail((prevTrail) => {
          const updatedTrail = [...prevTrail, { left: newLeft, top: newTop }];
          return updatedTrail.slice(-10); // Keep the last 10 positions for the trail
        });
        // Update velocity based on collisions
        setVelocity({ dx: newDx, dy: newDy });

        return {
          left: Math.min(Math.max(newLeft, 0), 100 - ballD),
          top: Math.min(Math.max(newTop, 0), 100 - ballD),
        };
      });
    }, 16);

    return () => clearInterval(interval);
  }, [isHovered, velocity]);

  return (
    <Box
      span={6}
      height={2}
      className="thirty"
      style={{ position: "relative" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTrail([]);
      }}
    >
      {trail.map((t, index) => (
        <div
          key={index}
          style={{
            width: `${ballD}%`,
            height: `${ballD}%`,
            backgroundColor: "var(--red)",
            borderRadius: "50%",
            position: "absolute",
            left: `${t.left}%`,
            top: `${t.top}%`,
            opacity: `${50 - (10 - index) * 5}%`,
          }}
        ></div>
      ))}
      <div
        id="ball"
        style={{
          width: `${ballD}%`,
          height: `${ballD}%`,
          backgroundColor: "var(--red)",
          borderRadius: "50%",
          position: "absolute",
          left: `${position.left}%`,
          top: `${position.top}%`,
        }}
      ></div>
    </Box>
  );
};

export default Thirty;
