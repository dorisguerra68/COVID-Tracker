import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Router} from './Router.jsx'
import './index.css'
import './App.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router /> 
  </StrictMode>,
)
