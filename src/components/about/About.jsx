import React from 'react'
import './about.css'
import ME from '../../assets/astronaut.png'
import {FaSchool} from 'react-icons/fa'
import {IoIosSchool} from 'react-icons/io'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaSchool className='about__icon' />
              <h5>SMA Telkom Bandung</h5>
              <small>2017 - 2020 | Science</small>
            </article>

            <article className='about__card'>
              <IoIosSchool className='about__icon' />
              <h5>Telkom University</h5>
              <small>2020 - Now | Information Systems</small>
            </article>

          </div>

          <p>
              I am a student majoring in diploma of Infomation Systems. 
              I'm passionate about developing experience and knowledge. 
              I'm someone who can able to learn and understand things well, 
              able to analyze and plan. I also have an interest in technology, 
              such as application development.
          </p>

          <a href="#container" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About