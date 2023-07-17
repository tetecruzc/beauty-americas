import React from 'react'
import './Brands.scss'
import BrandCard from './components/BrandCard/BrandCard'
import { BRANDS } from './data/brands'


function Brands() {
  return (
    <section className='brands'>
        <h2 className='subtitle'>Brands</h2>
        <div className="flex align-items-center justify-content-center flex-wrap brands__list">
            {
                BRANDS.map(el => (
                        <BrandCard key={el.id} background={el.bg} logo={el.logo}/>
                    )
                )
            }
        </div>
    </section>
  )
}

export default Brands