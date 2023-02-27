import React from 'react'
import './portfolio.css'
import nusawalet from '../../../../Assets/pr-nusawallet.png'
import cloudLoop from '../../../../Assets/pr-cloudloop.png'
import krista from '../../../../Assets/pr-krista.png'
import { portfolios } from '../../../../data'
import {Link} from 'react-router-dom'

const Portitem = () => {
  return (
    <>
      <div className="medium-porto">
          {
            portfolios.map(({logo, name, image, path, desc, year}) => {
              return (
                <Link to={path} className="medium-con">
                  <img src={image} alt={name} className="cover-img"/>
                  <div className='card-info'>
                    <div className='logos-content'>
                      <img src={logo} alt={name} className='logo-nusa'/>
                      <small>{year}</small>
                    </div>
                    <div className='desc-content'>
                      <p>{desc}</p>
                      <span>Read more
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.75 10H15.25M15.25 10L11.25 6M15.25 10L11.25 14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      </span>
                    </div>
                  </div >
                </Link>
                )
            })
          }
        </div>
      <div className="large-porto">
        <div className='top-content'>
          <Link to='/nusawallet-mobile-app-study-case' className='card-container-1'>
            <div className='card-info'>
              <div className='logos-content'>
                <img src={nusawalet} alt="nusawalet" className='logo-nusa'/>
                <small> 2021 - 2022</small>
              </div>
              <div className='desc-content'>
                <p>NusaWallet is a Crypto Wallet applications with hybrid transaction ability that accept crypto and fiat as payments.</p>
                <span>Read more
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.75 10H15.25M15.25 10L11.25 6M15.25 10L11.25 14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </span>
              </div>
            </div >
          </Link >
        
          <Link to='/cloudloop-mobile-app-design' className='card-container-2'>
            <div className='card-info'>
                <div className='logos-content'>
                    <img src={cloudLoop} alt="cloudloop" className='logo-cloud'/>
                    <small>2022</small>
                  </div>
                  <div className='desc-content'>
                    <p>CloudLoop is an application to monitor blood glucose and tracking carbohydrates intake with the help of CGM, Insulin and other sensors.</p>
                    <span>Read more
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.75 10H15.25M15.25 10L11.25 6M15.25 10L11.25 14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span>
                  </div>
              </div >
          </Link>
        </div>
        <div>
          <Link to='/krista-client-mobile-app-design' className='card-container-3'>
            <div className='blank-frame'/>
            <div className='card-info-v'>
              <div className='logos-content'>
                <img src={krista} alt="krista" className='logo-krista'/>
                <small>2022</small>
              </div>
              <div className='desc-content'>
                <p>Krista Client is a mobile app that help Krista's partners monitor and request work directly to the employees.</p>
                <span>Read more
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.75 10H15.25M15.25 10L11.25 6M15.25 10L11.25 14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

    </>
  )
}

export default Portitem