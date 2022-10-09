import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from "./pages/Login/Login"
import { Home } from "./pages/Home/Home"

export const App = () => {
  return (
    <Routes>
      <Route extact path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}