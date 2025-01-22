import Box from "../Box";
import "../styles/One.css";

const One: React.FC = () => {
  return (
    <Box span={3} className="one">
      {Array.from({ length: 16 }, (_, index) => (
        <div key={index} className="one-square"></div>
      ))}
    </Box>
  );
};

export default One;
