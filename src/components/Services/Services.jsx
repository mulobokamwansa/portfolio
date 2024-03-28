import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <div className='know_me'>
        <h5>What I Offer</h5>
        <h3>Services </h3>
      </div>

      <div className="container services__container">

{/*=========== UI/UX ARTICLE==========*/}           
        <article className='service'>
          <div className="service__head">
            <h3>Mobile Aplications</h3>
          </div>

          <div className='service__content'>
          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>Flattter</h5></p>
            </li>
          </ul>
          </article>

          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>ReactNative</h5></p>
            </li>
          </ul>
          </article>

          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>Python</h5></p>
            </li>
          </ul>
          </article>

          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>JavaScript</h5></p>
            </li>
          </ul>
          </article>
          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>Mysql</h5></p>
            </li>
          </ul>
          </article>
          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>Django</h5></p>
            </li>
          </ul>
          </article>
         </div>
        </article>

{/*=========== WEB DEVELOPMENT ARTICLE==========*/}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <div className='service__content'>
          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>Html</h5></p>
            </li>
          </ul>
          </article>

          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>ReactJS</h5></p>
            </li>
          </ul>
          </article>

          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>Css</h5></p>
            </li>
          </ul>
          </article>

          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>JavaScript</h5></p>
            </li>
          </ul>
          </article>
          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>bootstrap</h5></p>
            </li>
          </ul>
          </article>
          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>react</h5></p>
            </li>
          </ul>
          </article>
         </div>
        </article>

{/*=========== CONTENT CREATION ARTICLE==========*/}
        <article className='service'>
          <div className="service__head">
            <h3>Other Services</h3>
          </div>

          <div className='service__content'>
          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>Auditting</h5></p>
            </li>
          </ul>
          </article>

          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>Reconcireation</h5></p>
            </li>
          </ul>
          </article>

          <article className='service__details' >
          <ul className='service__list'>
            <li> 
               <BiCheck className="service__list-icon" />
               <p><h5>Health </h5></p>
            </li>
          </ul>
          </article>

          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>Software  </h5></p>
            </li>
          </ul>
          </article>

          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>networking</h5></p>
            </li>
          </ul>
          </article>
          <article className='service__details' >
          <ul className='service__list'>
            <li> 
                <BiCheck className="service__list-icon" />
                <p><h5>hardware</h5></p>
            </li>
          </ul>
          </article>
          
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services