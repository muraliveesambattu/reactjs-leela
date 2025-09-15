import React, { Component } from "react";
import HocComponent from "./HocComponent";

class ClickCounter extends Component {
  render() {
    const { count, handleIncrement, handleDecrement, handleReset } = this.props;
    return (
      <div>
        <button onClick={handleIncrement}>Handle Increment</button>
        <button onClick={handleDecrement}>Handle Decrement</button>
        <button onClick={handleReset}>Handle Reset</button>
        <h2>Count : {count}</h2>
      </div>
    );
  }
}

export default HocComponent(ClickCounter);
