import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/port1.gif'
import IMG2 from '../../assets/port2.jpg'
import IMG3 from '../../assets/port4.gif'
import IMG4 from '../../assets/car.jpg'
import IMG5 from '../../assets/port5.jpg'
import JOB1 from '../../assets/cool2.jpg'




const data =[
  {
    id: 1,
    image: IMG1,
    title: 'This Is a Portfolio for speech assatant chatbot' ,
    github: 'https://github.com/mulobokamwansa/AssistantBot/tree/master',
    Demo: 'https://dribble.com/Alien_pixels'
  },
  {
    id: 2,
    image: IMG2,
    title: 'This Is a Portfolio for Website' ,
    github: 'https://github.com/mulobokamwansa/Mywebproject',
    Demo: 'https://dribble.com/Alien_pixels'
  },
  {
    id: 3,
    image: IMG3,
    title: 'This Is a Portfolio for facial recoginition system' ,
    github: 'https://github.com/mulobokamwansa/FacialRecogination/tree/master/python',
    Demo: 'https://dribble.com/Alien_pixels'
  },
 
  
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className="know_me">
      <h5>    </h5>
      <h3 className='recent-work'>My Recent Works</h3>
      </div>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, Demo}) => {
            return(
            <article key={id} className='portfolio__items'>

            <div className="portfolio__items-image">
              <img src={image} alt={title} />
            </div>

            <h6>{title}</h6>

            <div className="portfolio__images-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={Demo} target='_blank' className='btn btn-primary'>Live Demo</a>
            </div>

          </article>
          )
          
          })
          
        }
        
      </div>
    </section>
    
  )
  
}
export default Portfolio