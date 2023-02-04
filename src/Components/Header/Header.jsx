import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div id='tittle-name'>
          <h4>Budi Aji</h4>
        </div>
        <nav>
          <ul className='nav__links'>
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header