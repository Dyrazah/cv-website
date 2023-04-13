import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/work1.jpg'
import IMG2 from '../../assets/work2.jpg'
import IMG3 from '../../assets/work3.jpg'
import IMG4 from '../../assets/work4.jpg'
import IMG5 from '../../assets/work5.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Project Lets Glow Up (2021)',
    github: 'https://github.com',
  },{
    id: 2,
    image: IMG2,
    title: 'Project Glidder (2021)',
    github: 'https://github.com',
  },{
    id: 3,
    image: IMG3,
    title: 'Project Jahitin (2021)',
    github: 'https://github.com',
  },{
    id: 4,
    image: IMG4,
    title: 'Project I-Jahit (2021)',
    github: 'https://github.com',
  }
]


const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">

        {
          data.map(({ id, image, title, github }) => {
            return (
                <article key={id} className="portofolio__item">
                  <div className="portofolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portofolio__item-cta">
                    <a href={github} className='btn' >Github</a>
                  </div>
                </article>
            )
          })
        }

       

      </div>
    </section>
  )
}

export default Portofolio