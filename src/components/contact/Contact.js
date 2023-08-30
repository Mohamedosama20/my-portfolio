import React, { useRef } from 'react';
import '../../styles/contact.css'
import emailjs from '@emailjs/browser';
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ah584pl', 'template_tneu3gb', form.current, 'saxSwTzqvFfHDsk43')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact-container'>
        <div className='contact-option'>
          <article className='option'>
          <MdOutlineEmail  className='contact-icon'/>
            <h4>Email</h4>
            <h5>mohamedosama667@yahoo.com</h5>
            <a href='mailto:mohamedosama667@yahoo.com' target='blank'>Send a Message</a>
          </article>
          <article className='option'>
          <BsLinkedin  className='contact-icon'/>
            <h4>Linkedin</h4>
            <h5>Mohamed Osama</h5>
            <a href='https://www.linkedin.com/in/mohamed-osama-4183b01b2/' target='blank'>Send a Message</a>
          </article>
          <article className='option'>
          <BsWhatsapp className='contact-icon'/>
            <h4>WhatsApp</h4>
            <h5>+20 0111 878 8751</h5>
            <a href='https://wa.me/+2001118788751' target='blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Name' required/>
          <input type='email' name='email' placeholder='Email' required/>
          <textarea name='message' rows='7' placeholder='Message' required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact