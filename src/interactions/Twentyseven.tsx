import Box from "../Box";
import "../styles/Twentyseven.css";

const Twentyseven: React.FC = () => {
  const handleClick = () => {
    alert("Hi there");

    //  setIndex(index + 1);
    //  root.style.setProperty("--bg", colors[index % colors.length]);
  };

  return (
    <Box span={3} className="twentyseven">
      <p onClick={handleClick}>Hello</p>
    </Box>
  );
};

export default Twentyseven;
