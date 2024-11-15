import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CarContextProvider } from './context/CarContext.tsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CarContextProvider>
      <App />
    </CarContextProvider>
  </StrictMode>
)
