import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./User";
import ClickCounter from "./ClickCounter";
import HoverCouter from "./HoverCouter";
import HandleCounter from "./HandleCounter";
import ShowMessage from "./ShowMessage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HandleCounter
        render={(count, incrementCount, decrementCount, resetCount) => (
          <ClickCounter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
          />
        )}
      />
      <hr />
      <HandleCounter
        render={(count, incrementCount, decrementCount, resetCount) => (
          <HoverCouter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
          />
        )}
      />
    </>
  );
}

export default App;
