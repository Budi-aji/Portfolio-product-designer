import React from 'react'
import './portfolio.css'
import nusawalet from '../../../../Assets/pr-nusawallet.png'
import cloudLoop from '../../../../Assets/pr-cloudloop.png'
import krista from '../../../../Assets/pr-krista.png'

const Portitem = () => {
  return (
    <div>
      <div className='top-content'>
        <a href="/nusawallet-mobile-app-study-case" className='card-container-1'>
          <div className='card-info'>
            <div className='logos-content'>
              <img src={nusawalet} alt="nusawalet" className='logo-nusa'/>
              <small> 2021 - 2022</small>
            </div>
            <div className='desc-content'>
              <p>NusaWallet is a Crypto Wallet applications with hybrid transaction ability that accept crypto and fiat as payments.</p>
              <a>Read more 
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.75 10H15.25M15.25 10L11.25 6M15.25 10L11.25 14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>  
              </a>
            </div>
          </div >
        </a >
          
        <a href="/cloudloop-mobile-app-design" className='card-container-2'>
          <div className='card-info'>
              <div className='logos-content'>
                  <img src={cloudLoop} alt="cloudloop" className='logo-cloud'/>
                  <small>2022</small>
                </div>

                <div className='desc-content'>
                  <p>CloudLoop is an application to monitor blood glucose and tracking carbohydrates intake with the help of CGM, Insulin and other sensors.</p>
                  <a href="#">Read more 
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75 10H15.25M15.25 10L11.25 6M15.25 10L11.25 14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>  
                  </a>
                </div>
            </div >
        </a>
      </div>
      <div>
        <a href="/krista-client-mobile-app-design" className='card-container-3'>
          <div className='card-info-v'>
          <div className='logos-content'>
              <img src={krista} alt="krista" className='logo-krista'/>
              <small> 2022</small>
            </div>
            <div className='desc-content'>
              <p>Krista Client is a mobile app that help Krista's partners monitor and request work directly to the employees.</p>
              <a href="#">Read more 
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.75 10H15.25M15.25 10L11.25 6M15.25 10L11.25 14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>  
              </a>
            </div>
          </div>
        </a>
      </div>

    </div>
  )
}

export default Portitem