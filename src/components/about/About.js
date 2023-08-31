import React from 'react'
import '../../styles/about.css'
import about from '../../assets/me-about.jpg'
import {BsChevronRight} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about-container'>
        <div className='about-me' data-aos="fade-right"  data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div className='about-img'>
          <img src={about} alt='about' />
        </div>

        </div>

        <div className='about-content' data-aos="fade-left" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h2>Front-End Developer</h2>
        
        <div className="row">
              <div>
                <ul>
                  <li><BsChevronRight/> <strong>Birthday:</strong> <span>31 Jan 2000</span></li>
                  <li><BsChevronRight/> <strong>Website:</strong> <a
                      href='https://mohamed-osama-portfolio-project.vercel.app/'
                      target="blank"><span>www.mohamed-osama.app</span></a></li>
                  <li><BsChevronRight/> <strong>Phone:</strong> <span>+201118788751</span></li>
                  <li><BsChevronRight/> <strong>City:</strong> <span>Cairo, Egypt</span></li>
                </ul>
                
                <ul>
                  <li><BsChevronRight/> <strong>Age:</strong> <span>24</span></li>
                  <li><BsChevronRight/> <strong>Degree:</strong> <span>Bachelor’s Degree, German studies and Translation</span></li>
                  <li><BsChevronRight/> <strong>Email:</strong> <span>mohamedosama667@yahoo.com</span></li>
                </ul>
                
              </div>
            </div>
            <p className='text-me'>
            To improve my skills, I've taken several courses in front-end web development from reputable institutions such as NTI, Udacity, and Udemy.
            </p>
            <a href='#contact' className='btn btn-primary'>Contact Me</a>
          </div>
          </div>
          
    </section>
  )
}

export default About