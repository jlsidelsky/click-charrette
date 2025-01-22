import { useEffect, useState } from "react";
import Box from "../Box";
import "../styles/Five.css";

const Five: React.FC = () => {
  const [deg, setDeg] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (!isClicked) return; // Only start interval if clicked

    const interval = setInterval(() => {
      setDeg((prev) => prev + 6); // Update rotation
    }, 500);

    return () => clearInterval(interval); // Cleanup
  }, [isClicked]); // Re-run effect when isClicked changes

  return (
    <Box span={3} className="five" onClick={handleClick}>
      <div style={{ transform: `rotate(${deg}deg)` }}>
        <div></div>
      </div>
    </Box>
  );
};

export default Five;
