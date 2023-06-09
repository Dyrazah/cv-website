import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_cc2a1am', 'template_lvl5o6c', form.current, 'mZg72LUrOINg-QJoU')

		e.target.reset()
	  };

	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className='contact__option-icon'/>
						<h4>Email</h4>
						<h5>nurdyanizahra@gmail.com</h5>
						<a href="mailto:nurdyanizahra@gmail.com">Send a message</a>
					</article>

					<article className="contact__option">
						<FaTelegramPlane className='contact__option-icon' />
						<h4>Telegram</h4>
						<h5>dyrazah</h5>
						<a href="https://t.me/dyrazah">Send a message</a>
					</article>

					<article className="contact__option">
						<BsWhatsapp className='contact__option-icon' />
						<h4>WhatApp</h4>
						<h5>+6287884272060</h5>
						<a href="https://wa.me/087884272060">Send a message</a>
					</article>

				</div>

				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name='name' placeholder='Your Full Name' required />
					<input type="email" name='email' placeholder='Your Email' required />
					<textarea name="message" rows="8" placeholder='Your Message' required></textarea>
					<button type='submit' className='btn btn-primary'>Send Message</button>
				</form>

			</div>
		</section>
	)
}

export default Contact