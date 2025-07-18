import React, { Component } from "react";

export default class Task1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  handleToggle = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>
          {/* {this.state.isVisible === true ? "Show" : "Hide"} Paragraph */}
          {this.state.isVisible ? "Hide" : "Show"} Paragraph
        </button>
        {this.state.isVisible && <p>Welcome to Paragraph Text !!!</p> }
      </div>
    );
  }
}
