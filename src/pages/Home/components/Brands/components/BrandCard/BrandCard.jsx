import React from 'react'
import './BrandCard.scss'

function BrandCard({background, logo}) {
  return (
    <div className='brand-card'>
      <img className='background' src={background} alt="" />
      <img className='logo' src={logo} alt="" />
    </div>
  )
}

export default BrandCard