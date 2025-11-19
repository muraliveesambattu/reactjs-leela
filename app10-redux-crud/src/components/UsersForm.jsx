import React, { Component } from "react";

export default class UsersForm extends Component {
  state = {
    user: {
      name: "",
      email: "",
      age: "",
      role: "",
      city: "",
    },
  };
  handleChange = (e) => {
    const newUser = {...this.state.user}
    newUser[e.target.name] = e.target.value ;
    this.setState({user:newUser})
  };
  handleSubmit = () => {
    this.props.addUser(this.state.user)
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="">Name :</label>
          <input type="text" name="name" value={this.state.user.name} onChange={(e)=>{this.handleChange(e)}}/> <br />
          <label htmlFor="">Email :</label>
          <input type="text" name="email" value={this.state.user.email} onChange={(e)=>{this.handleChange(e)}}/> <br />
          <label htmlFor="">Age :</label>
          <input type="text" name="age" value={this.state.user.age} onChange={(e)=>{this.handleChange(e)}}/> <br />
          <label htmlFor="">Role :</label>
          <input type="text" name="role" value={this.state.user.role} onChange={(e)=>{this.handleChange(e)}}/> <br />
          <label htmlFor="">City :</label>
          <input type="text" name="city" value={this.state.user.city} onChange={(e)=>{this.handleChange(e)}}/> <br />
          <button type="button" onClick={this.handleSubmit}>Add User</button>
        </form>
      </div>
    );
  }
}
