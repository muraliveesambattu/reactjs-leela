import React, { Component } from 'react'

export default class ShowMessage extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.msg}</h2>
      </div>
    )
  }
}
