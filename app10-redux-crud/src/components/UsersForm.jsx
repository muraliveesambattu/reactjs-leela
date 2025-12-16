import React, { Component } from "react";

export default class UsersForm extends Component {


  handleSubmit = () => {
    this.props.addUser(this.state.user)
  };
  render() {

    return (
      <div>
        <form>
          <label htmlFor="">Name :</label>
          <input type="text" name="name" value={this.props.userDetails.name} onChange={(e) => { this.props.handleChange(e) }} /> <br />
          <label htmlFor="">Email :</label>
          <input type="text" name="email" value={this.props.userDetails.email} onChange={(e) => { this.props.handleChange(e) }} /> <br />
          <label htmlFor="">Age :</label>
          <input type="text" name="age" value={this.props.userDetails.age} onChange={(e) => { this.props.handleChange(e) }} /> <br />
          <label htmlFor="">Role :</label>
          <input type="text" name="role" value={this.props.userDetails.role} onChange={(e) => { this.props.handleChange(e) }} /> <br />
          <label htmlFor="">City :</label>
          <input type="text" name="city" value={this.props.userDetails.city} onChange={(e) => { this.props.handleChange(e) }} /> <br />
          <button type="button" onClick={this.handleSubmit}>Add User</button>
        </form>
      </div>
    );
  }
}
