import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {links} from '../../data'
import Logo from '../../Assets/logo.png'
import './header.css'
import { useScrollPos } from './useScrollPos'
import { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join('');
}

export const Header = () => {

  const scrollP = useScrollPos();

  
  const [isNavShowing, setIsNavShowing] = useState(false)
  
  return (
    <header className={classNames(scrollP > 0 ? 'drop-shadow' : 'no-drop')}>
      <div className="header__container">
        <Link className='logo' to='/' onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="budiaji.design" />
        </Link>
        <nav>
          <ul className={`nav__links ${ isNavShowing ? 'show-nav' : 'hide-nav'}`}>
              {
                links.map(({name, path}, index)=> {
                  return (
                    <li key={index} onClick={() => setIsNavShowing(false)}>
                      <NavLink to={path}>{name}</NavLink>
                    </li>
                  )
                })
              }
          </ul>
        </nav>
        <a className='nav_btn' onClick={() => setIsNavShowing(!isNavShowing)}>
          {
            isNavShowing ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5L19 19M5 19L19 5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.9751 5.97498H19.9751M3.9751 11.975H19.9751M3.9751 17.975H19.9751" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          }
          
        </a>
      </div>
    </header>
  )
}

export default Header