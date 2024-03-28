import React from 'react'
import './Contact.css'
import {TfiEmail} from 'react-icons/tfi' 
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

   /*=============LINKING EMAILJS TO INPUT FIELDS=============*/
  const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6dvjpx7', 'template_dodss5i', form.current, 'lHHevQOiIZ31LbcBj')
    emailjs.sendForm('service_fghbovb', 'template_dodss5i', form.current, 'lHHevQOiIZ31LbcBj')
    e.target.reset()
  };


  return (
    <section id='contact'>
      <div className='know_me'>
        <h5>Get In Touch</h5>
        <h3>Contact Me</h3>
      </div>

      <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
          <TfiEmail className='contact_option-icon' />
          <h4>Email</h4>
          <h6>mwansamuloboka9@gmail.com</h6>
          <a href='mailto:mwansamuloboka9@gmail.com' target="_blank" rel='noopener noreferrer'>Send a message.</a>
        </article>

        <article className='contact__option'>
          <BsFacebook className='contact_option-icon' />
          <h4>Facebook</h4>
          <h6>mwansa muloboka</h6>
          <a href='https://web.facebook.com/profile.php?id=100079552579503' target="_blank" rel='noopener noreferrer'>Send a message.</a>
        </article>

        <article className='contact__option'>
          <BsWhatsapp className='contact_option-icon' />
          <h4>Whatsapp</h4>
          <h6>mwansa</h6>
          <a href='https:api.whatsapp.com/send?phone+260771066132' target="_blank" rel='noopener noreferrer'>Send a message.</a>
        </article>
      </div>

        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <textarea name='message' rows='7' placeholder='Your Message'required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        
      </div>
    </section>

  )
}

export default Contact













