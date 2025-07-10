import React, { Component } from "react";

export default class UsersTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          fname: "Arjun",
          lname: "Reddy",
          email: "arjun.reddy@example.com",
          zip: "560001",
          address: "123 MG Road, Bangalore, Karnataka",
        },
        {
          id: 2,
          fname: "Priya",
          lname: "Sharma",
          email: "priya.sharma@example.com",
          zip: "110045",
          address: "56 Dwarka Sector 10, New Delhi",
        },
        {
          id: 3,
          fname: "Rahul",
          lname: "Verma",
          email: "rahul.verma@example.com",
          zip: "400021",
          address: "789 Marine Drive, Mumbai, Maharashtra",
        },
        {
          id: 4,
          fname: "Sneha",
          lname: "Kumar",
          email: "sneha.kumar@example.com",
          zip: "600028",
          address: "45 Besant Nagar, Chennai, Tamil Nadu",
        },
        {
          id: 5,
          fname: "Kiran",
          lname: "Naik",
          email: "kiran.naik@example.com",
          zip: "500081",
          address: "32 Hitech City, Hyderabad, Telangana",
        },
      ],
    };
  }

  handleDelete = (user) => {
    const newUsers = this.state.users.filter((usr) => {
      return usr.id !== user.id;
    });
    this.setState({ users: newUsers }); // SetState is to Change the State .
    // console.log(newUsers);
  };

  render() {
    return (
      <div>
        <table border={1} style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Zip</th>
              <th>Address</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr>
                  {Object.values(user).map((val) => {
                    return <td>{val}</td>;
                  })}
                  <td>
                    <button>Edit</button>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        this.handleDelete(user);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
              // return <tr>
              //     <td>{user.id}</td>
              //     <td>{user.fname}</td>
              //     <td>{user.lname}</td>
              //     <td>{user.email}</td>
              //     <td>{user.zip}</td>
              //     <td>{user.address}</td>
              // </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
