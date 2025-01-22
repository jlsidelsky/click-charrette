import Box from "../Box";
import "../styles/Eleven.css";
const Eleven: React.FC = () => {
  return (
    <Box span={9} className="eleven">
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index} className="eleven-container">
          <div className="eleven-circle"></div>
        </div>
      ))}
    </Box>
  );
};

export default Eleven;
