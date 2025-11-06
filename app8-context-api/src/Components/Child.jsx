import React, { Component } from "react";
import { UserContextConsumer } from "./ContextDemo";

export default class Child extends Component {
  render() {
    return (
      <div id="childDiv">
        <ul>
          <li>{this.props.person.fname}</li>
          <li>{this.props.person.lname}</li>
        </ul>
        {/* <UserContextConsumer>
          {(val) => {
            <ul>
              {val.map((obj) => {
                return <li>{obj.name}</li>;
              })}
            </ul>;
          }}
        </UserContextConsumer> */}
        <hr />
        <UserContextConsumer>
          {(val) => (
            <ul>
              {val.map((obj, index) => {
                return Object.values(obj).map((v) => <li key={v}>{v}</li>);
              })}
            </ul>
          )}
        </UserContextConsumer>
      </div>
    );
  }
}
