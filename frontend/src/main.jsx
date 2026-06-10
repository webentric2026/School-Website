import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ScrollToTop from './utils/ScrollToTop'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
