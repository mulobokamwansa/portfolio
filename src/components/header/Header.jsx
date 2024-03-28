import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/smart.JPG'
import HeaderSocial from './HeaderSocial'


const Header = () => {
  return (
    <header>
      <div className="container container__header">
        <h4>Hello I'am</h4>
        <h1>Mwansa Muloboka</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        
        <a href='#contact' className="scroll__down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header