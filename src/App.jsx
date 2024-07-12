import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Lenis from '@studio-freight/lenis'
import Events from './pages/Events'

function App() {
  useEffect(()=>{
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (
    <div className='poppins'> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/events' element={<Events/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
