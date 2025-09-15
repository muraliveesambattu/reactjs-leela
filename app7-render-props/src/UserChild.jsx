import React, { Component } from 'react'

export default class UserChild extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to User Child Component !!</h2>
        <button onClick={this.props.handleIncrement}>Increment</button>
        <p>{this.props.count}</p>
      </div>
    )
  }
}
