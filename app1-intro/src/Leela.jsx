import LeelaClassComp from "./Components/LeelaClassComp";
import GayathriClassComp, { RamClassComp } from "./Components/MuraliClassComp";
import VmrInfoTech, { MuraliClassComp } from "./Components/MuraliClassComp";
import "./leela.css";
import Murali from "./Murali";

function App() {
  return (
    <div>
      <h2>Welcome to Leela Component !!</h2>
      <h3>hello IOm</h3>
      {/* <Murali/> */}
      <LeelaClassComp />
      <MuraliClassComp />
      <VmrInfoTech />
      <GayathriClassComp />
      <RamClassComp />
    </div>
  );
}

export default App;
