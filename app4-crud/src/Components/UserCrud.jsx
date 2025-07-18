import React, { Component } from "react";

export default class UserCrud extends Component {
  state = {
    user: {
      fname: "",
      lname: "",
      email: "",
      username: "",
    },
    users: [],
    editIndex: null,
  };
  handleChange = (e) => {
    const inputName = e.target.name;
    const userEnteredValue = e.target.value;
    const newUser = { ...this.state.user }; // Creating a user Copy or Clone
    newUser[inputName] = userEnteredValue;
    this.setState({ user: newUser });
    // console.log(inputName);
    // console.log(userEnteredValue);
  };
  handleSubmit = () => {
    const newUsers = [...this.state.users]; // Creating a Copy of Users
    newUsers.push(this.state.user);
    this.setState({ users: newUsers });
    this.handleReset();
  };
  handleReset = () => {
    const newUser = {
      fname: "",
      lname: "",
      email: "",
      username: "",
    };
    this.setState({ user: newUser });
  };
  handleEdit = (usr, i) => {
    this.setState({ user: usr, editIndex: i });
  };
  handleDelete = (usr) => {
    const newUsers = this.state.users.filter((u) => {
      return u.email !== usr.email;
    });
    this.setState({ users: newUsers });
  };
  handleUpdate = () => {
    const newUsers = [...this.state.users];
    newUsers[this.state.editIndex] = this.state.user;
    this.setState({ users: newUsers, editIndex: null });
    this.handleReset();
  };
  render() {
    const { fname, lname, email, username } = this.state.user;
    return (
      <div>
        <form>
          <label htmlFor="fname">First Name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={fname}
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="lname">Last Name:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={lname}
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <br />
          {this.state.editIndex === null ? (
            <input type="button" value="Submit" onClick={this.handleSubmit} />
          ) : (
            <input type="button" value="Update" onClick={this.handleUpdate} />
          )}
        </form>
        <hr />
        <table border="1">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.fname}</td>
                  <td>{usr.lname}</td>
                  <td>{usr.email}</td>
                  <td>{usr.username}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleEdit(usr, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(usr);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
