
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRoutes>
      
    </AppRoutes>
  </BrowserRouter>,
)
