import { Component } from "react";

class User extends Component {
  // var myName = "Murali" // Creating variables in Javascript
  // var person = {}
  // var users = []
  // ALL the above declarations should be inside State

  //    type 1 of Creating State
  //   state = {}; // State In React .

  // Type 2 of Creating State
  //   constructor() {
  //     this.state = {};
  //   }

  // Declaring a String,Object & Array Inside a State Object 
  state = {
    message: " Welcome to ReactJS Class Component Topic !!!", // Creating a Simple String
    person: {
      fname: "Leela",
      lname: "Vathi",
      email: "leela@gmail.com",
    },
    users: ["Ram", "Krishna", "Sam", "Sundar"],
  };
  render() {
    return (
      <div>
        <h2>Welcome to User Component !!!</h2>
        {/* Binding a String  */}
        <h3>{this.state.message}</h3> 

        {/* Binding a Object  */}

        {/* <ul>
          <li>{this.state.person.fname}</li>
          <li>{this.state.person.lname}</li>
          <li>{this.state.person.email}</li>
        </ul> */}
        <ul>
            {Object.values(this.state.person).map((val,i)=>{
                return <li key={i}>{val}</li>
            })}
        </ul>

        {/* Binding a Array  */}
        <ul>
            {this.state.users.map((val,i)=>{ // If we create list items Dynamically or with map statement , Browser wont recognise the elements
                return <li key={i}>{val}</li>
            })}
        </ul>
      </div>
    );
  }
}

export default User;
