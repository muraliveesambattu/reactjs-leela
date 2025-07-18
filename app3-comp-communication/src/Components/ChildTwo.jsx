import React, { Component } from 'react'

export default class ChildTwo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message :" I am coming from Child component !!"
    }
  }

  sendDataToParent=()=>{
    this.props.getInfo(this.state.message)
  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Welcome to Child Component </h3>
        <button onClick={this.sendDataToParent}>Send Data to Parent </button>
      </div>
    )
  }
}
