import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Leela from './Leela'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Leela/>
  </StrictMode>,
)
