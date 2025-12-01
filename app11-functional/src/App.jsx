import { useState } from 'react'

import { User } from './Components/User'

function App() {
  const [count, setCount] = useState(0) // Hooks 

  return (
    <>
      <User/>
    </>
  )
}

export default App
