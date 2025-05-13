import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>  한번만 실행되게....
    <App />
  // </StrictMode>,
)
