import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CarContextProvider } from './context/CarContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CarContextProvider>
      <App />
    </CarContextProvider>
  </StrictMode>,
)
