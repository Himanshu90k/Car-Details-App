import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CarContextProvider } from './context/CarContext.tsx'

createRoot(document.getElementById('root')!).render(
    <CarContextProvider>
      <App />
    </CarContextProvider>
  
)
