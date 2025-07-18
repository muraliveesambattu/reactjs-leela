import { useState } from "react";
import "./App.css";
import Task1 from "./Components/Task1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h2>Welcome to App 2 - Component Communication !!</h2> */}
      <Task1/>
    </>
  );
}

export default App;
