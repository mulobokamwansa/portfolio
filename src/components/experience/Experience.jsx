import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <div className="know_me">
      <h5>What Skills I Have</h5>
      <h3>MY Experience</h3>
      </div>

      <div className="container experience__container">

{/*=====article box for experience in front end=====*/}

      <div className="experience__Frontend">
        <h3>Frontend Developement</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Html</h4>
            <small className='text__light'>Experienced</small>
            </div>
          </article> 
              
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Css</h4>
            <small className='text__light'>Intermediete</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>JavaScript</h4>
            <small className='text__light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Django</h4>
            <small className='text__light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Flattter/Dart</h4>
            <small className='text__light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Python</h4>
            <small className='text__light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>ReactJs</h4>
            <small className='text__light'>Experienced</small>
            </div>
          </article>
        </div>
      </div>

{/*=====article box for experience in back end=====*/}

        <div className="experience__backend">
        <h3>Backend Developement</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Mysql</h4>
            <small className='text__light'>Experienced</small>
            </div>
          </article> 
              
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Nodejs</h4>
            <small className='text__light'>Intermediete</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Mongodb</h4>
            <small className='text__light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Python</h4>
            <small className='text__light'>Experienced</small>
            </div>
          </article>
        </div>
      </div>

      </div>
    </section>
  )
}

export default Experience