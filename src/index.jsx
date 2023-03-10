import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import './style/main.scss'

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  </React.StrictMode>)