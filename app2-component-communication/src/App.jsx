import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MuraliClassComp from './Components/MuraliClassComp'
import UserClassComp from './Components/UserClassComp'
import StudentClassComp from './Components/StudentClassComp'
import UsersTable from './Components/UsersTable'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <h2>Welcome to Component Communication !!!</h2>
    <hr />
    {/* <MuraliClassComp/> */}
    {/* <UserClassComp/> */}
    {/* <StudentClassComp/> */}
    <UsersTable/>
  </>
  )
}

export default App
