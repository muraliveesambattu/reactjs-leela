import React, { Component } from 'react'

export default class CompB extends Component {
  render() {
    return (
      <div>
        <h2>Welcome from Comp B</h2>
        <p>{this.props.msg}</p>
      </div>
    )
  }
}
