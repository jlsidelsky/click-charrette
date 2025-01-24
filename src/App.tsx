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
import Twentythree from "./interactions/Twentythree";
import Twentyfour from "./interactions/Twentyfour";
import Twentyfive from "./interactions/Twentyfive";
import Twentysix from "./interactions/Twentysix";
import Twentyseven from "./interactions/Twentyseven";
import Twentyeight from "./interactions/Twentyeight";
import Twentynine from "./interactions/Twentynine";
import Thirty from "./interactions/Thirty";
import Thirtyone from "./interactions/Thirtyone";
import Thirtytwo from "./interactions/Thirtytwo";
import Forty from "./interactions/Forty";
import Thirtythree from "./interactions/Thirtythree";
import Thirtyfive from "./interactions/Thirtyfive";
import Thirtynine from "./interactions/Thirtynine";
import Thirtyeight from "./interactions/Thirtyeight";
import Thirtyseven from "./interactions/Thirtyseven";
import Thirtysix from "./interactions/Thirtysix";
import Thirtyfour from "./interactions/Thirtyfour";
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
        <Seventeen></Seventeen>

        <Twentysix></Twentysix>

        <Fifteen></Fifteen>
        <Sixteen></Sixteen>
        <Twentythree></Twentythree>

        <div
          style={{
            height: "492px",
            gridColumn: "span 3",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Thirteen></Thirteen>

          <Twentyfour></Twentyfour>
        </div>
        <Twenty></Twenty>
        <div
          style={{
            height: "492px",
            gridColumn: "span 4",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Twentyseven></Twentyseven>
          <Twentyfive></Twentyfive>
        </div>
        <Thirtyone></Thirtyone>

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
            <Thirtysix></Thirtysix>
            <Twentyeight></Twentyeight>
          </div>
          <Forty></Forty>
        </div>

        <Twentynine></Twentynine>
        <Thirtyfive></Thirtyfive>

        <Thirtythree></Thirtythree>
        <Thirtyfour></Thirtyfour>
        <Thirtytwo></Thirtytwo>

        <Thirty></Thirty>
        <div
          style={{
            height: "492px",
            gridColumn: "span 3",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Twelve></Twelve>
          <Thirtyeight></Thirtyeight>
        </div>
        <Thirtynine></Thirtynine>

        <Thirtyseven></Thirtyseven>

        <Twentytwo></Twentytwo>
      </Grid>
    </>
  );
}

export default App;
