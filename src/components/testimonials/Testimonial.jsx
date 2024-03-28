import React from 'react'
import './Testimonial.css'
import AVART1 from '../../assets/cool1.jpg'
import AVART2 from '../../assets/cool2.jpg'
import AVART3 from '../../assets/cool3.JPG'
import AVART4 from '../../assets/cool4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';






const data =[
  {
    avartar: AVART1,
    client: 'Mwansa Junya',
    review: "It was nice working with him he is smart intelligent good at team work and many more learns from others?"
  },
  {
    avartar: AVART2,
    client: 'Misheck Boma',
    review: "It was nice working with him he is smart intelligent good at team work and many more learns from others?"
  },
  {
    avartar: AVART3,
    client: 'John Chama',
    review: "It was nice working with him he is smart intelligent good at team work and many more learns from others?"
  },
  {
    avartar: AVART4,
    client: 'Peter Banda',
    review: "It was nice working with him he is smart intelligent good at team work and many more learns from others?"
  },
]


const Testmonial = () => {
  return (
    <section id='testmonials'>
    <div className="know_me">
      <h5>Review from clients</h5>
      <h3>Testmonials</h3>
    </div>

    <Swiper className="container testmonials__container"
     // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avartar, client, review}, index) =>{
            return(
              <SwiperSlide key={index} className="
              testmonial ">
                <div className="client__avatar">
                <img src={avartar} alt=''/>
                  
                </div>
                <h5 className='client__name'>{client}</h5>
                  <small className='client__review'>{review}</small>
            </SwiperSlide> 
            )
          })}
        

    </Swiper>
    </section>
  ) 
}

export default Testmonial