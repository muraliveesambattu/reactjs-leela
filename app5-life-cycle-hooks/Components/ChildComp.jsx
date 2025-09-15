import React, { Component } from "react";
import UserComp from "./UserComp";

export default class ChildComp extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      info: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps triggered");
    if (props.count < 50) {
      return { message: " Value is Less than 50 !!" };
    } else {
      return { message: " Value is Greater than 50 !!" };
    }
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate triggered !!");
    return true;
  }
  render() {
    console.log("render triggered !!!");
    return (
      <div>
        <h2>{this.props.count}</h2>
        <h2>{this.state.message}</h2>
        <h1>{this.state.info}</h1>

        {this.props.count <=50 && <UserComp/>}
      </div>
    );
  }
  getSnapshotBeforeUpdate(props, state) {
    console.log("getSnapshotBeforeUpdate triggered !!");
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate Triggered !!");
    if (prevState.info !== "Component value Updated !!") {
    this.setState({ info: "Component value Updated !!" });
  }
  }
}
