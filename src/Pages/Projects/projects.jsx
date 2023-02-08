import React from 'react'
import UndCont from '../../Assets/on-progress.png'
import './projects.css'
import Contactfooter from '../../Components/Footer/Contactfooter'

const projects = () => {
  return (
    <>
      <div className="under-construct">
          <img src={UndCont} alt="und-const" />
          <h4>Thanks for visiting! We're working on this page, so please check back soon!</h4>
      </div>
      <Contactfooter/>
    </>
  )
}

export default projects