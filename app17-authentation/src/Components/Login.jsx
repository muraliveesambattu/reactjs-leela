import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  }
  const handleLogin = async () => {

    // const validUser = {
    //   username: "murali",
    //   password: "murali123"
    // }
    // if (validUser.username == user.username && validUser.password == user.password) {
    //   console.log("Yes ... You Are valid User");
    //   localStorage.setItem("isUserValid", true)
    //   navigate('/dashboard')
    // } else {
    //   console.log("You are not valid User !!");
    //   localStorage.setItem("isUserValid", false)

    // }
    const response = await fetch("http://localhost:3000/api/auth/login",{
      method:"POST",
      body:JSON.stringify(user),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data = await response.json();
    localStorage.setItem("token",data.token)
    navigate('/dashboard')
  }
  return (
    <div>

      <form>
        <label htmlFor="">User Name :</label>
        <input type="text" name="email" id="" value={user.email} onChange={handleChange} /> <br />
        <label htmlFor=""> Password :</label>
        <input type="text" name="password" id="" value={user.password} onChange={handleChange} /> <br />
        <button onClick={handleLogin} type='button'>Login</button>
      </form>
    </div>
  )
}
