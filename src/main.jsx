import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './Navbar'
import Hero from './Hero'
import Resume from './Resume'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Resume />
  </StrictMode>,
)
