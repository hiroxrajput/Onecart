import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import AuthContext.jsx from './context/AuthContext.jsx.jsx'
import AdminContext from './context/AdminContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContext.jsx>
    <AdminContext>
    <App />
    </AdminContext>
  </AuthContext.jsx>
  </BrowserRouter>
 
)
