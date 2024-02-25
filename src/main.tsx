import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages/App.tsx'
import { GlobalStyles } from './styles.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
)
