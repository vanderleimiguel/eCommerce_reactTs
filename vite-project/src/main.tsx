import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home'
import GlobalStyle from './styles/global'
import { Footer } from './components/footer/footer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
    <Footer />
  </React.StrictMode>
)
