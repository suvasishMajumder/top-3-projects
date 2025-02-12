import 'regenerator-runtime/runtime'; // Add this at the top
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './Contexts/AuthContext'


createRoot(document.getElementById('root')!).render(
  <AuthProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </AuthProvider>
)
