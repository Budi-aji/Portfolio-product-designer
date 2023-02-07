import React from 'react'
import './portfolio.css'
import Portitem from './Portitem'

const Portfolio = () => {
  return (
    <section className='port-container'>
      <div className='title-con'>
        <small>Case Studies</small>
        <h2> Selected Projects</h2>
      </div>
      <div className='projects-container'> 
        <Portitem />
      </div>
    </section>
  )
}

export default Portfolio