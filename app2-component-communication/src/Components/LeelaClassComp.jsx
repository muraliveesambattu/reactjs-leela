import React, { Component } from "react";

// LeelaClassComp is Child fro MuraliClassComp
export default class LeelaClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return <div>
        <h2>Welcome to Leela Class Component !!</h2>
        <h2>{this.props.newMessage}</h2>
    </div>;
  }
}
