// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
/* 1. Change BrowserRouter to HashRouter */
import { HashRouter } from 'react-router-dom' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Use HashRouter here */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)