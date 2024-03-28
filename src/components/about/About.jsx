import React from 'react'
import './About.css'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {BsFolder2Open} from 'react-icons/bs'
import AVART1 from '../../assets/cool1.jpg'
import AVART2 from '../../assets/cool2.jpg'
import AVART3 from '../../assets/cool3.JPG'
import AVART4 from '../../assets/cool4.jpg'
import AVART5 from '../../assets/child.JPG'
import AVART6 from '../../assets/health.jpg'
import AVART7 from '../../assets/sport.jpg'
import AVART8 from '../../assets/fevor.PNG'
import AVART9 from '../../assets/coll.jpg'
import AVART10 from '../../assets/work.jpg'
// import Swiper core and required modules
import { Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css';


const data =[
  {
    avartar: AVART1,
  },
  {
    avartar: AVART2,
  },
  {
    avartar: AVART3,
  },
  {
    avartar: AVART4,
  },
  {
    avartar: AVART5,
  },
  {
    avartar: AVART6,
  },
  {
    avartar: AVART7,
  },
   {
    avartar: AVART8,
  },
   {
    avartar: AVART9,
  },
   {
    avartar: AVART10,
  },
]


const About = () => {
  return (
    <section id='about'>
      <div className="know_me">
      <h5>Get To Know</h5>
      <h3>About Me</h3>
      <div className="know_metwo">
        
      </div>
      </div>
      
        <div className='container about__container'>
        <Swiper className='about__me'
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={true}
          pagination={{ clickable: true }}>

           {
          data.map(({avartar}, index) =>{
            return(
              <SwiperSlide  key={index}>
                <img src={avartar} alt=''/> 
              </SwiperSlide> 
            )
          })
        }
        </Swiper>

        <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FiAward className='about__icon'/>
            <h6>Experience</h6>
            <small>2+ years of Experience</small>
            </article>

            <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h6>Compains</h6>
            <small>3 in Zambia</small>
            </article>
            
            <article className='about__card'>
            <BsFolder2Open className='about__icon'/>
            <h6>Projects</h6>
            <small>4 Completed Projects</small>
          </article>
        </div>

        <p>
            <h3>The projects that i have done are:</h3>
            <h4 className='tittle1'>1. Assistant Chatbot:</h4>
            <small className='small1'>the bot that u can have conversations with. can also be incopareted in the website.</small>
            <h4 className='tittle2'>2. Facial detection security application:</h4>
            <small className='small2'>An app that detects faces and recognizing people.</small>
            <h4 className='tittle3'>3. Website</h4>
            <small className='small3'>Personal website for advetisment incomplete.</small>
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk.</a>

        </div>
      </div> 
    </section>
    
  )
}

export default About