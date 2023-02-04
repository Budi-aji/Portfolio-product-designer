import React from 'react'
import './portfolio.css'
import Portitem from './Portitem'

const Portfolio = () => {
  return (
    <section className='port-container'>
      <h2> Selected Project</h2>
      <div className='projects-container'> 
        <Portitem />
      </div>
    </section>
  )
}

export default Portfolio