// HocComponent.js
import React, { Component } from "react";

function HocComponent(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };

    handleDecrement = () => {
      this.setState({ count: this.state.count - 1 });
    };

    handleReset = () => {
      this.setState({ count: 0 });
    };

    render() {
      return (
        <WrappedComponent
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleReset={this.handleReset}
          count={this.state.count}
          {...this.props} // pass other props down
        />
      );
    }
  };
}

export default HocComponent;
