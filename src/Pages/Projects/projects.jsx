import React from 'react'
import UndCont from '../../Assets/on-progress.png'
import './projects.css'
import Contactfooter from '../../Components/Footer/Contactfooter'
import { TitleFunction } from '../../Components/TitleFunction'

const projects = () => {
  TitleFunction("Projects")
  return (
    <>
      <div className="under-construct">
          <img src={UndCont} alt="und-const" />
          <h4>Thanks for visiting! This page is still under development, please check again later.</h4>
      </div>
      <Contactfooter/>
    </>
  )
}

export default projects