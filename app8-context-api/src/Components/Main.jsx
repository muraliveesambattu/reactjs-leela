import React, { Component } from "react";
import Parent from "./Parent";
import GrandParent from "./GrandParent";
import { UserContextProvider } from "./ContextDemo";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fname: "Murali",
        lname: "Krishna",
      },
      users: [
        {
          id: 1,
          name: "Murali",
          role: "Full Stack Developer",
        },
        {
          id: 2,
          name: "Raj",
          role: "Frontend Developer",
        },
        {
          id: 3,
          name: "Anita",
          role: "Backend Developer",
        },
      ],
    };
  }

  render() {
    return (
      <div id="mainDiv">
        <UserContextProvider value={this.state.users}>
          <GrandParent person={this.state.person} />
        </UserContextProvider>
      </div>
    );
  }
}
