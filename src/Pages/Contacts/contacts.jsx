import React from 'react'
import './contacts.css'

const contacts = () => {
  return (
    <div className="contacts-con">
      <h2>Get in touch</h2>
      <h4>Reach out to me through the contact listed below.</h4>
      <div className="linktrees">
        <a href='https://www.instagram.com/budiaji.design/' className='ig'>Instagram</a>
        <a href='https://www.linkedin.com/in/budi-aji-7b89a5142/' className='ln'>Linkedin</a>
        <a href='https://t.me/BudiAji_P' className='tl'>Telegram</a>
        <a href='mailto:budiaji2711@gmail.com' className='gm'>Gmail</a>

      </div>
    </div>
  )
}

export default contacts