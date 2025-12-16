import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersTable from "./UsersTable";
import { createUserAction, deleteUserAction } from "../store/usersSlice";
import UsersForm from "./UsersForm";

const Users = () => {
  const [userDetails, setUsersDetails] = useState({
    name: "",
    email: "",
    age: "",
    role: "",
    city: "",
  })

  const handleChange = (e) => {
    const newUser = { ...userDetails }
    newUser[e.target.name] = e.target.value;
    setUsersDetails({ user: newUser })
  };
  const usersDetails = useSelector((state) => state.usersInfo.usersArray);

  const dispatch = useDispatch();
  const deleteUser = (user) => {
    dispatch(deleteUserAction(user));
  };
  const addUser = (user) => {
    dispatch(createUserAction(user));
  };
  return (
    <div>
      <h2>Welcome to Users !</h2>
      <UsersForm addUser={addUser} userDetails={userDetails} handleChange={handleChange} />
      <UsersTable users={usersDetails} deleteUser={deleteUser} />
      {/* <table border={1} style={{width:'100%'}}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Age</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {usersDetails.map((usr)=> <tr>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.email}</td>
                <td>{usr.role}</td>
                <td>{usr.age}</td>
                <td>
                    <button>Edit User</button>
                </td>
                <td>
                    <button>Delete User</button>
                </td>
            </tr> )}
        </tbody>
      </table> */}
    </div>
  );
};

export default Users;
