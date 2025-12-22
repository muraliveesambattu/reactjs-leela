import { useState } from 'react'
import './App.css'
import { Users } from './Components/Users'
import { Main } from './Components/Main'
import { UserContext } from './UserContext'

function App() {
  const [count, setCount] = useState(100)

  return (
    <>
      {/* <Users/> */}
      <UserContext.Provider value={count}>
        <Main  />
      </UserContext.Provider>

    </>
  )
}

export default App
