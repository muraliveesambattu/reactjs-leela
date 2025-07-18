import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.info}</h2>
      </div>
    )
  }
}
