import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Housing from './pages/Housing/housing'
import Error from './pages/Error/error'
import About from './pages/About/about'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/housing/:id" element={<Housing />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AppRoutes
