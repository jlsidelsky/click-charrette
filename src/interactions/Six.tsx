import { useEffect, useState } from "react";
import Box from "../Box";
import "../styles/Six.css";

const Six: React.FC = () => {
  const [nestedDiv, setNestedDiv] = useState<React.ReactNode>(null);
  const [isAdding, setIsAdding] = useState(false); // Tracks if the process is active
  const [count, setCount] = useState(0); // Tracks the number of divs added

  const handleClick = () => {
    if (!isAdding) {
      setIsAdding(true); // Start the process if not already started
    }
  };
  useEffect(() => {
    if (isAdding && count < 11) {
      const interval = setInterval(() => {
        setNestedDiv((prev) => (
          <div>
            <div className="six-circle">{prev}</div>
          </div>
        ));
        setCount((prevCount) => prevCount + 1);

        if (count + 1 >= 11) {
          clearInterval(interval);
          setIsAdding(false);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isAdding, count]);

  return (
    <Box span={6} className="six" onClick={handleClick} height={2}>
      <div className="six-circle">{nestedDiv}</div>
    </Box>
  );
};

export default Six;
