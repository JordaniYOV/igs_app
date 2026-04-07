import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InsuranceComicApp from './pages/main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InsuranceComicApp />
  </StrictMode>,
)
