import { useState } from "react";
import "./App.css";
import HoverCounter from "./HoverCounter";
import ClickCounter from "./ClickCounter";

function App() {
  const [count, setCount] = useState(0);

  return <>
  <ClickCounter/>
  <hr />
  <HoverCounter/>
</>;
}

export default App;
