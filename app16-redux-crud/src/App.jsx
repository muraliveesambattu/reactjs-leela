import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createUsersAsyncAction, deleteUsersAsyncAction, getAllUsersAsyncAction } from './store/userSlice';

function App() {
  // const {users} = useSelector((state)=>{
  //   return state.usersDetails
  // })
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.usersDetails);
  const [isEdit, setIsEdit] = useState(false)
  const [user, setUser] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
    state: "",
    zip: "",
  });
  console.log(users);
  useEffect(() => {
    dispatch(getAllUsersAsyncAction())
  }, [])

  const handleDelete = (user) => {
    dispatch(deleteUsersAsyncAction(user));
  }
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted User:", user);
    dispatch(createUsersAsyncAction(user))
    clearForm()
  };
  const clearForm = () => {
    setUser({
      id: "",
      fname: "",
      lname: "",
      email: "",
      state: "",
      zip: "",
    })
  }
  const handleEdit = (user) => {
    setUser(user);
    setIsEdit(true)
  }
  return (
    <>
      <h2>React Redux CRUD Demo</h2>
      <button style={{ background: "blue", color: "white" }}>Create User</button>
      <ul>
        {users.map((user) => <li key={user.id}>
          {user.email} - <button onClick={() => { handleDelete(user) }} style={{ background: 'red', color: 'white', margin: '5px' }}>Delete User</button> - <button onClick={() => { handleEdit(user) }} style={{ background: 'yellow', color: 'blue', margin: '5px' }}>Edit User</button>
        </li>)}

        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="id"
            placeholder="Enter ID"
            value={user.id}
            onChange={handleChange}
            required
          />
          <br /><br />

          <input
            type="text"
            name="fname"
            placeholder="Enter First Name"
            value={user.fname}
            onChange={handleChange}
            required
          />
          <br /><br />

          <input
            type="text"
            name="lname"
            placeholder="Enter Last Name"
            value={user.lname}
            onChange={handleChange}
            required
          />
          <br /><br />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <br /><br />

          <input
            type="text"
            name="state"
            placeholder="Enter State (eg: TN)"
            value={user.state}
            onChange={handleChange}
            required
          />
          <br /><br />

          <input
            type="text"
            name="zip"
            placeholder="Enter ZIP Code"
            value={user.zip}
            onChange={handleChange}
            required
          />
          <br /><br />
          {isEdit ? <button type="submit" style={{ background: 'green', color: "white" }}>Update</button> : <button type="submit" style={{ background: 'green', color: "white" }}>Submit</button>

          }
        </form>
      </ul>
    </>
  )
}

export default App
