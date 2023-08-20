import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainProfilePage } from '../pages'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainProfilePage />} path="/" />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }
