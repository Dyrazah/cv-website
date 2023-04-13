import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <section id='footer'>
		<footer>
			<a href="#" className='footer__logo'>Nice To See You!</a>

			<ul className="permalinks">
				<li><a href="#">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#portofolio">Portofolio</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>

			<div className="footer__socials">
				<a href="https://instagram.com/dyrazah__/"><FiInstagram /></a>
				<a href="mailto:nurdyanizahra@gmail.com"><MdOutlineEmail /></a>
				<a href="https://www.linkedin.com/in/zahra-nurdyani-b03b2a237/" target='_blank'><BsLinkedin/></a>
			</div>

			<div className="footer__copyright">
				<small>
					&copy; Zahra Nurdyani. All rights reserved.
				</small>
			</div>
		</footer>
    </section>
  )
}

export default Footer