import React from 'react'
import './StoreCard.scss'

function StoreCard({index, background,title, subtitle}) {
  return (
    <div className='store-card' style={{ backgroundImage: "url(" + background + ")" }}>
      
      <div className="store-card__title-box">
        <p className='title'>{title}</p>
      </div>
      <div className="store-card__separator">•</div>
      <div className="store-card__title-box">
        <p className='subtitle'>{subtitle}</p>
      </div>
      <div className="store-card__opacity"></div>
    </div>
  )
}

export default StoreCard