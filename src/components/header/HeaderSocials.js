import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a href='https://www.linkedin.com/in/mohamed-osama-4183b01b2/' target='blank'> <BsLinkedin/> </a>
      <a href='https://github.com/Mohamedosama20' target='blank'> <FaGithub/> </a>
      <a href='https://wa.me/+201118788751' target='blank'> <FaWhatsapp/> </a>
      <a href='https://www.facebook.com/Muhammmeedd/' target='blank'> <FaFacebook/>  </a>
    </div>
  )
}

export default HeaderSocials