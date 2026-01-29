import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Dashboard } from './Components/Dashboard';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Welcome to React Authentication App !!!</h2>

      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
