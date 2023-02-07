// import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {links} from '../../data'
import Logo from '../../Assets/logo.png'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <Link className='logo' to='/'>
          <img src={Logo} alt="budiaji.design" />
        </Link>
        <nav>
          <ul className='nav__links'>
              {
                links.map(({name, path}, index)=> {
                  return (
                    <li>
                      <NavLink to={path}>{name}</NavLink>
                    </li>
                  )
                })
              }
              {/* <li><a className="active" href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Get in touch!</a></li> */}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header