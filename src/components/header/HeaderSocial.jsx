import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaDribbbleSquare} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_bank"><BsLinkedin/></a>
        <a href='https://github.com' target="_bank"> <BsGithub /></a>
        <a href='https://dribble.com' target="_bank"><FaDribbbleSquare /></a>
    </div>
  )
}

export default HeaderSocial