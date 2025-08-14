import React, { Component } from "react";

export default class LifeCycleDemo extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello",
      users: [],
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log(state, props);
    if (props.age <= 18) {
      return { message: "You are a Teenager !!!" };
    } else if (props.age > 18 && props.age <= 58) {
      return { message: "You are a Adult !!!" };
    } else {
      return { message: "You are a Senior Citizen !!!" };
    }
    return null;
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <ul>
            {this.state.users.map((usr,i)=>{
                return <li key={i}>{usr.name}</li>
            })}
        </ul>
      </div>
    );
  }
  // This lifeCycle Hook get Called after Component Mounting Completed !!
  componentDidMount() {
    // alert("Component Successfully Rendered !!!")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((rawdata) => {
        return rawdata.json();
      })
      .then((response) => {
        console.log(response);
        this.setState({ users: response });
      });
  }
}
