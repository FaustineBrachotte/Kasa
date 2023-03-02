import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Housing from './pages/Housing'
import Error from './pages/Error'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import GlobalStyle from './utils/style/GlobalStyle'

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>)