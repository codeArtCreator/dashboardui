import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { HamburgerProvider } from './contexts/HamburgerContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <HamburgerProvider>
      <App />
    </HamburgerProvider>
  </Router>,
)
