import React from 'react'
import './hero.css'
import foto from '../../Assets/foto.png'
import cv from '../../Assets/cv.pdf'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-content-container'>
        <div className='foto'>
          <img src={foto} alt="foto" />
        </div>
        <div className='text-content'>
          <h1> Hello, I'm Budi</h1>
          <p>
            I’m a Product Designer that creates beautiful and meaningful digital product designs.
          </p>
          <div className='CTA'>
            <a href={cv} download className='btn'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0002 11.6667L9.29306 12.3739L10.0002 13.081L10.7073 12.3739L10.0002 11.6667ZM11.0002 4.16675C11.0002 3.61446 10.5524 3.16675 10.0002 3.16675C9.44788 3.16675 9.00016 3.61446 9.00016 4.16675L11.0002 4.16675ZM5.12639 8.20719L9.29306 12.3739L10.7073 10.9596L6.5406 6.79297L5.12639 8.20719ZM10.7073 12.3739L14.8739 8.20719L13.4597 6.79298L9.29306 10.9596L10.7073 12.3739ZM11.0002 11.6667L11.0002 4.16675L9.00016 4.16675L9.00016 11.6667L11.0002 11.6667Z" fill="#67B6FF"/>
              <path d="M4.1665 13.3333L4.1665 14.1666C4.1665 15.0871 4.9127 15.8333 5.83317 15.8333L14.1665 15.8333C15.087 15.8333 15.8332 15.0871 15.8332 14.1666V13.3333" stroke="#67B6FF" stroke-width="2"/>
              </svg> My Resume
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero