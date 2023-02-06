import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Portfolio from './Components/Portfolio/Portfolio'
import Experiences from './Components/Experiences/Experiences'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Hero />
        <Portfolio />
        <Experiences />
        <Footer />
    </BrowserRouter>
  )
}

export default App