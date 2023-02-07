import React from 'react'
import UndCont from '../../Assets/on-progress.png'
import './projects.css'

const projects = () => {
  return (
    <>
        <div className="under-construct">
            <img src={UndCont} alt="und-const" />
            <h4>Sorry, this page is under development. Please come back later!</h4>
        </div>
    </>
  )
}

export default projects