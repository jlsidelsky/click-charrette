import "./App.css";
import Header from "./Header";
import Grid from "./Grid";
import One from "./interactions/One";
import "./styles/colors.css";
import Two from "./interactions/Two";
import Three from "./interactions/Three";
import Four from "./interactions/Four";
import Five from "./interactions/Five";
import Six from "./interactions/Six";
import Seven from "./interactions/Seven";
import Eight from "./interactions/Eight";
import Nine from "./interactions/Nine";
import Ten from "./interactions/Ten";
import Eleven from "./interactions/Eleven";
import Twelve from "./interactions/Twelve";
import Thirteen from "./interactions/Thirteen";
import Fourteen from "./interactions/Fourteen";
import Fifteen from "./interactions/Fifteen";
import Sixteen from "./interactions/Sixteen";
import Seventeen from "./interactions/Seventeen";
import Eighteen from "./interactions/Eighteen";
import Nineteen from "./interactions/Nineteen";
import Twenty from "./interactions/Twenty";
import Twentyone from "./interactions/Twentyone";
import Twentytwo from "./interactions/Twentytwo";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Grid>
        <Nineteen></Nineteen>
        <Eighteen></Eighteen>

        <Twentyone></Twentyone>
        <Six></Six>
        <div
          style={{
            height: "492px",
            gridColumn: "span 6",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "16px",
            }}
          >
            <Five></Five>
            <Three></Three>
          </div>
          <Eight></Eight>
        </div>

        <Two></Two>
        <Nine></Nine>

        <Four></Four>
        <Fourteen></Fourteen>

        <Seven></Seven>

        {/* </div> */}
        <One></One>

        <Ten></Ten>
        <Eleven></Eleven>
        <Thirteen></Thirteen>

        <Twelve></Twelve>
        <Fifteen></Fifteen>
        <Sixteen></Sixteen>
        <Seventeen></Seventeen>
        <Twenty></Twenty>
        <Twentytwo></Twentytwo>
      </Grid>
    </>
  );
}

export default App;
