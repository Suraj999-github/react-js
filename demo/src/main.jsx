import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "primereact/resources/themes/lara-light-indigo/theme.css"; // PrimeReact Theme
import "primereact/resources/primereact.min.css"; // Core styles
import "primeicons/primeicons.css"; // Icons
import { BrowserRouter as Router } from "react-router-dom";
import {AuthProvider} from "./hooks/useAuth.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
          <Router>
              <App />
          </Router>
      </AuthProvider>
  </StrictMode>,
)
