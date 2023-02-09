import Hero from './Components/Hero/Hero'
import Portfolio from './Components/Portfolio/Portfolio'
import Experiences from './Components/Experiences/Experiences'
import Contactfooter from '../../Components/Footer/Contactfooter'
import { TitleFunction } from '../../Components/TitleFunction'
import React from 'react'

const Home = () => {
  TitleFunction("Budi Aji Design")
  return (
      <div className="main-container">
        <Hero />
        <Portfolio />
        <Experiences />
        <Contactfooter/>
      </div>
  )
}

export default Home