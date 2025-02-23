import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Project1 from "./Components/Project1"
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Project1 />
  </StrictMode>,
)
