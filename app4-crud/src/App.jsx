import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCrud from './Components/UserCrud'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserCrud/>
  )
}

export default App
