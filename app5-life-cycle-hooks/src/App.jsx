import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LifeCycleA from "../Components/LifeCycleA";
import LifeCycleDemo from "../Components/LifeCycleDemo";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <LifeCycleA age="15"/>
    <LifeCycleDemo age={9} />
  );
}

export default App;
