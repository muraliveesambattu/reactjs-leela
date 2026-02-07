import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const isValidToken = localStorage.getItem("token");
    if (!isValidToken) {
      alert("You are not Valid User ");
      navigate('/login')
    }
  }, [])
  return (
    <div>Dashboard</div>
  )
}
