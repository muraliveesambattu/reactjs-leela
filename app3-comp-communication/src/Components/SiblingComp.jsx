import React, { Component } from "react";
import CompA from "./CompA";
import CompB from "./CompB";

export default class SiblingComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commonMessage: "Welcome to Commmon Message ",
    };
  }

  msgChangeFunc = () => {
    this.setState({ commonMessage: "I got Changed from Comp A" });
  };
  render() {
    return (
      <div>
        <CompA changeMsgComp={this.msgChangeFunc} />
        <hr />
        <CompB msg={this.state.commonMessage} />
      </div>
    );
  }
}

// 1. Created SiblingComp and Called CompA & CompB 
// 2. Created a State in SiblingComp and shared to CompB
// 3. Created function to change the state and Shared to CompA
// 4. Inside the CompA , when we click on the Button , invoked the function which received from SiblingComp .
// 5. The function which recived from SiblingComp , will change the State , Because that state is already shared to CompB , the Change will take place 