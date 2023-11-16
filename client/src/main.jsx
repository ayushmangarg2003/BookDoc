import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='app-parent'>
      <App />
    </div>
  </React.StrictMode>,
)

export const backendLink = `http://localhost:4000/api`;