import Box from "../Box";
import "../styles/Seven.css";

const Seven: React.FC = () => {
  const handleClick = () => {
    window.print();

    //  setIndex(index + 1);
    //  root.style.setProperty("--bg", colors[index % colors.length]);
  };

  return (
    <Box span={3} className="seven">
      <p onClick={handleClick}>print</p>
    </Box>
  );
};

export default Seven;
