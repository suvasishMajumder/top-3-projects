import 'regenerator-runtime/runtime'; // Add this at the top
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { AuthProvider } from './Contexts/AuthContext'
import {  ThemeProvider } from './Contexts/ThemeContext';
import { CartProvider } from './Contexts/CartContext';


createRoot(document.getElementById('root')!).render(

  <CartProvider>
  <AuthProvider>
    <ThemeProvider>
  <StrictMode>
    <App />                                                                                                                              
  </StrictMode>
  </ThemeProvider>
  </AuthProvider>
  </CartProvider>
)
