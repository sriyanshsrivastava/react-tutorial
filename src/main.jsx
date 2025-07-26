import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Chai/>
  </StrictMode>,
)
