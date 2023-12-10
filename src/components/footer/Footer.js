/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp} from 'react-icons/fa'
import '../../styles/footer.css'

const Footer = () => {
  return (
    <footer>
    <a href='#/' className='footer-logo'>Mohamed Osama</a>
    <ul className='footer-links'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer-socials'>
      <a href='https://www.facebook.com/Muhammmeedd/' target='blank'><FaFacebookF/></a>
      <a href='https://linkedin.com/in/mohamed-osama-4183b01b2' target='blank'><FaLinkedinIn/></a>
      <a href='https://github.com/Mohamedosama20' target='blank'><FaGithub/></a>
      <a href='https://wa.me/+201118788751' target='blank'><FaWhatsapp/></a>
    </div>
    <div className='footer-copyright'>
     <small> &copy; Copyright <span>Mohamed Osama</span></small> 
    </div>
    </footer>
  )
}

export default Footer