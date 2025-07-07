// This is Normal Javascripr Class
// class LeelaClassComp{

import { Component } from "react";

// }

// How to Convert Normal JS Class In to ReactJS Component

class LeelaClassComp extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to ReactJS Class Component Topic !!",
    };
  } // Related to Javascript Classes
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
      </div>
    );
  } // Related to ReactJS Component
}

export default LeelaClassComp;
