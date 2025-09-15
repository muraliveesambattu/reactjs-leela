import React, { Component } from 'react'

export default class UserComp extends Component {
  render() {
    return (
      <div>
        <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
      </div>
    )
  }
  componentWillUnmount(){
    alert("Since the Value Reached the limit , Image will be removed !!!")
  }
}
