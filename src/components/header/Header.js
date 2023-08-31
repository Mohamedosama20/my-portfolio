import React from 'react'
import '../../styles/header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Typed from 'typed.js';

export const Header = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Mohamed Osama'],
      typeSpeed: 80,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <header>
      <div className='container header-container'>
        <h5>Hello, I'm</h5>
        <span ref={el}></span>
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