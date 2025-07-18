import React, { Component } from "react";
import ChildTwo from "./ChildTwo";

export default class ParentTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meesage: "",
    };
  }

  receiveDataFromChild = (msg) => {
    console.log("Data from Child :-- ", msg);
    this.setState({ meesage: msg });
  };
  render() {
    return (
      <div>
        <h2>{this.state.meesage}</h2>
        <ChildTwo getInfo={this.receiveDataFromChild} />
      </div>
    );
  }
}

// To Get the Data from Child follow these Steps
// 1. Create a State in Parent Componenet
// 2. Create a event , to receive the data from Child
// 3. Send the Above created method to Child
// 4. Create a state variable In child
// 5. Create a function which will Call the function recived from parent , send the data in that function (Recevied from Parent )
