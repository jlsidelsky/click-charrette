import Box from "../Box";
import "../styles/Thirtyeight.css";

const Thirtyeight: React.FC = () => {
  return (
    <Box span={3} className={"thirtyeight"}>
      <div className="thirtyeight-cube">
        <div className="thirtyeight-front"></div>
        <div className="thirtyeight-back"></div>
        <div className="thirtyeight-left"></div>
        <div className="thirtyeight-right"></div>
        <div className="thirtyeight-top"></div>
        <div className="thirtyeight-bottom"></div>
      </div>
    </Box>
  );
};

export default Thirtyeight;
