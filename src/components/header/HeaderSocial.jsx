import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className="header__social">
        <a href="https://www.linkedin.com/in/zahra-nurdyani-b03b2a237/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Dyrazah" target='_blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocial