import React, { Component } from "react";
import Child from "./Child";
import { UserContextConsumer } from "./ContextDemo";

export default class Parent extends Component {
  render() {
    return (
      <>
        <div id="parentDiv">
          <Child person={this.props.person}/>

          <hr />
          {/* <UserContextConsumer>
            {(val) => (
            <ul>
              {val.map((obj, index) => {
                return Object.values(obj).map((v) => <li key={v}>{v}</li>);
              })}
            </ul>
          )}
          </UserContextConsumer> */}
        </div>
      </>
    );
  }
}
