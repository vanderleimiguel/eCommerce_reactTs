import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home/home'
import GlobalStyle from './styles/global'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { CreateProduct } from './pages/createProduct/createProduct'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
