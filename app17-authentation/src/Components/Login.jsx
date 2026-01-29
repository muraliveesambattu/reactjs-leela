import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  }
  const handleLogin = () => {

    const validUser = {
      username: "murali",
      password: "murali123"
    }
    if (validUser.username == user.username && validUser.password == user.password) {
      console.log("Yes ... You Are valid User");
      localStorage.setItem("isUserValid", true)
      navigate('/dashboard')
    } else {
      console.log("You are not valid User !!");
      localStorage.setItem("isUserValid", false)

    }
  }
  return (
    <div>

      <form>
        <label htmlFor="">User Name :</label>
        <input type="text" name="username" id="" value={user.username} onChange={handleChange} /> <br />
        <label htmlFor=""> Password :</label>
        <input type="text" name="password" id="" value={user.password} onChange={handleChange} /> <br />
        <button onClick={handleLogin} type='button'>Login</button>
      </form>
    </div>
  )
}
