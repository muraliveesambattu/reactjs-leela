import React, { Component } from "react";

export default class StudentClassComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        fname: "",
        lname: "",
        email: "",
      },
    };
  }

  handleChane = (e) => {
    // If we need to Chane any value In State , We should do following Steps
    // 1. Create a Copy of the State Variable
    const newStudent = { ...this.state.student }; // this line will Create a New Stundet Object . It is a Copy of this.state.student
    // 2. Update the Values
    newStudent[e.target.name] = e.target.value;

    // 3. Replace in State
    this.setState({ student: newStudent });
  };

  handleSubmit=()=>{
    console.log(this.state.student)
  }

  render() {
    const { fname, lname, email } = this.state.student;
    return (
      <div>
        <form action="">
          <label htmlFor="">First Name : </label>
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={this.handleChane}
          />{" "}
          <br />
          <label htmlFor="">Last Name : </label>
          <input
            type="text"
            name="lname"
            value={lname}
            onChange={this.handleChane}
          />{" "}
          <br />
          <label htmlFor="">Email : </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChane}
          />{" "}
          <br />
          <button type="button" onClick={this.handleSubmit}>Add User</button>
        </form>
      </div>
    );
  }
}
