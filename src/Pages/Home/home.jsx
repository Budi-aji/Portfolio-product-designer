import Hero from './Components/Hero/Hero'
import Portfolio from './Components/Portfolio/Portfolio'
import Experiences from './Components/Experiences/Experiences'
import React from 'react'

const Home = () => {
  return (
      <div className="main-container">
        <Hero />
        <Portfolio />
        <Experiences />
      </div>
  )
}

export default Home