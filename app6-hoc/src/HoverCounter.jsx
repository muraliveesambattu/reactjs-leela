import React, { Component } from "react";
import HocComponent from "./HocComponent";

class HoverCounter extends Component {
  render() {
    const { count, handleIncrement, handleDecrement, handleReset } = this.props;
    return (
      <div>
        <button onMouseOver={handleIncrement}>Handle Increment</button>
        <button onMouseOver={handleDecrement}>Handle Decrement</button>
        <button onMouseOver={handleReset}>Handle Reset</button>
        <h2>Count : {count}</h2>
      </div>
    );
  }
}
export default HocComponent(HoverCounter);
