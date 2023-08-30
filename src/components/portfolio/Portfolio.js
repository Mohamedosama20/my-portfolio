import React from 'react'
import '../../styles/portfolio.css'
import PortfolioData from './PortfolioData.jsx'

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className='container portfolio-container'>
     {
        PortfolioData.map(({id, img, title, github, live }) => {
          return (
            <article key ={id} className='portfolio-item'>
      <div className='portfolio-img'>
        <img src={img} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className='portfolio-links'>
      <a href={github} className='btn' target='blank'>GitHub</a>
      <a href={live} className='btn btn-primary' target='blank'>Live</a>
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