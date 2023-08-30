import React from 'react'
import '../../styles/header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
export const Header = () => {
  return (
    <header>
      <div className='container header-container'>
        <h5>Hello, I'm</h5>
        <h1>Mohamed Osama</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={Me} alt='Mohamed Osama' />
        </div>
        <a href='#contact' className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header