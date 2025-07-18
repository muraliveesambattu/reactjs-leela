import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Components/Parent'
import ParentTwo from './Components/ParentTwo'
import SiblingComp from './Components/SiblingComp'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    {/* <Parent/> */}
    {/* <ParentTwo/> */}
    <SiblingComp/>
  </>
  )
}

export default App
