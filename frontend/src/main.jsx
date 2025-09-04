import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContext.jsx from './context/AuthContext.jsx.jsx'
import UserContext.jsx from './context/UserContext.jsx.jsx'
import ShopContext.jsx from './context/ShopContext.jsx.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContext.jsx>
    <UserContext.jsx>
      <ShopContext.jsx>
    <App />
    </ShopContext.jsx>
    </UserContext.jsx>
    </AuthContext.jsx>
</BrowserRouter>
  
)
