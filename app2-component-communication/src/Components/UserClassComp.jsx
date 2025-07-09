import React, { Component } from "react";

export default class UserClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  };

  handleSubmit=()=>{
    console.log(this.state)
  }
  render() {
    const { fname, lname } = this.state; // Extracting fname, lname by destucturing
    return (
      <div>
        <form>
          <label htmlFor="">First Name :</label>
          <input type="text" name="fname" value={fname} onChange={this.handleChange}/> <br />
          <label htmlFor="">Last Name :</label>
          <input type="text" name="lname" value={lname} onChange={this.handleChange}/> <br />
          <button onClick={this.handleSubmit} type="button">Add User</button>
        </form>
      </div>
    );
  }
}
