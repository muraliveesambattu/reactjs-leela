import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome to React Component Communication !!!",
    };
  }

  changeMessageInParent = () => {
    this.setState({
      message: "This Messsage changed when you click the Button !!!",
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to Parent Component !! </h2>
        <hr />
        <button onClick={this.changeMessageInParent}>Change Message</button>
        <Child info={this.state.message} />
      </div>
    );
  }
}


// ReactJS is called Uni Directional Data Flow . means , data can flow in only one direction 
// 