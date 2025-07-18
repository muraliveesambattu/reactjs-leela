import React, { Component } from "react";

export default class CompA extends Component {
  changeMsg = () => {
    this.props.changeMsgComp()
  };
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Welcome from Comp A</h2>
        <button onClick={this.changeMsg}>Change Comp B </button>
      </div>
    );
  }
}
