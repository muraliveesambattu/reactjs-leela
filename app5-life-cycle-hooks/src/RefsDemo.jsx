import React, { Component } from "react";

export default class RefsDemo extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  render() {
    return (
      <div>
        <h2>Welcome To ReactJS Ref Demo !!</h2>
        <input type="text" name="" id="" ref={this.inputRef} />
      </div>
    );
  }
  componentDidMount() {
    this.inputRef.current.focus();
    this.inputRef.current.value = "Hello ...";
    this.inputRef.current.style.background="red";
    this.inputRef.current.style.color="white";
    
  }
}
