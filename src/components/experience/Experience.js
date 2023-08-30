import React from 'react'
import '../../styles/experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience-container'>
        <div className='experience-front'>
          <h3>Frontend Development</h3>
          <div className='experience-content'>
          <article className='exp-text'>
          <BsPatchCheckFill className='exp-text-icon'/>
           <div>
           <h4>HTML</h4>
            <small className='text-light'>100%</small>
           </div>
          </article>
          <article className='exp-text'>
          <BsPatchCheckFill className='exp-text-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>100%</small>
            </div>
          </article>
          
          <article className='exp-text'>
          <BsPatchCheckFill className='exp-text-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>100%</small>
            </div>
          </article>
          <article className='exp-text'>
          <BsPatchCheckFill className='exp-text-icon'/>
            <div>
            <h4>Tailwind CSS</h4>
            <small className='text-light'>100%</small>
            </div>
          </article>
          <article className='exp-text'>
          <BsPatchCheckFill className='exp-text-icon'/>
            <div>
           <h4>JavaScript</h4>
            <small className='text-light'>100%</small>
            </div>
          </article>
          <article className='exp-text'>
          <BsPatchCheckFill className='exp-text-icon'/>
            <div>
            <h4>ReactJS</h4>
            <small className='text-light'>100%</small>
            </div>
          </article>
          <article className='exp-text'>
          <BsPatchCheckFill className='exp-text-icon'/>
            <div>
            <h4>GIT</h4>
            <small className='text-light'>100%</small>
            </div>
          </article>
          <article className='exp-text'>
            <BsPatchCheckFill className='exp-text-icon'/>
            <div>
            <h4>Github</h4>
            <small className='text-light'>100%</small>
            </div>
          </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience