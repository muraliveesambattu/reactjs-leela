import { Component } from "react";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      info: "Welcome to Employee Component !!",
      empInfo: {
        fname: "Ram",
        email: "ram@gmail.com",
      },
      skills: ["HTML", "CSS", "JS", "ReactJS"],
    };
  }
  render() {
    const { info, empInfo, skills } = this.state; // This is Called Destructering 
    // Destructering is , Extracting values from an Object Or Array  
    
    return (
      <div>
        <h2>{info}</h2>
        <ul>
            {Object.values(empInfo).map((val,i)=>{
                return <li key={i}>{val}</li>
            })}
        </ul>

        <hr />
        <ul>
            {skills.map((val,i)=>{
                return <li key={i}>{val}</li>
            })}
        </ul>
      </div>
    );
  }
}

export default Employee;
