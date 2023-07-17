import React from 'react'
import './Banner.scss'
import decoration from './assets/decoration.png'


function Banner() {
  return (
    <section id='banner' className='banner'>
      
      <h1 className='title'>
        Beauties home in Venezuela
      </h1>
      <img src={decoration} alt="" className="decoration" />
    </section>
  )
}

export default Banner