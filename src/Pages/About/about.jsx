import React from 'react'
import UndCont from '../../Assets/on-progress.png'
import Contactfooter from '../../Components/Footer/Contactfooter'

const about = () => {
  return (
    <div>
      <div className="under-construct">
        <img src={UndCont} alt="und-const" />
        <h4>Thanks for visiting! We're working on this page, so please check back soon!</h4>
      </div>
      <Contactfooter/>
    </div>
  )
}

export default about