import React, { Component } from "react";

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    console.log("Welcome to Constructor", this.state);
    this.state = {
      message: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Current state:", state, "Props:", props);

    if (props.age > 28) {
      return { message: "You are an Adult" }; // ✅ return new state object
    } else if (props.age < 18) {
      return { message: "You are Teenager !!!" };
    }

    return null; // ✅ no changes
  }

  componentDidMount() {
    console.log("componentDidMount triggered !!!", this.state);
  }

  render() {
    console.log("render method triggered !!");
    return (
      <div>
        <h2>Welcome to Life Cycle Component !!!</h2>
        <h3>{this.state.message}</h3>
      </div>
    );
  }

  sayhello = () => {};
}

// Following are the LifeCycle Phases
//     1. Mounting Phase
// In Mounting phase we have following LifeCycle Hooks
// 1. Constructor
// 2. GetDerivedStateFromProps
// 3. Render
// 4. Component Did Mount
//     2. Updating Phase
//     3. Unmounting Phase
