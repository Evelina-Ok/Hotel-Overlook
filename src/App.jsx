import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { FrontPage } from './pages/FrontPage'
import { HotelsPage } from './pages/HotelsPage'
import { RoomsPage } from './pages/RoomsPage'
import { ReservationPage } from './pages/ReservationPage'
import { LoginPage } from './pages/LoginPage'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          <Route index={true} element={<FrontPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="reservation" element={<ReservationPage />} />
          <Route path ="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
     
    </>
  )
}


export default App
