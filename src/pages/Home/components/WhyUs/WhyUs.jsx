import React from 'react'
import './WhyUs.scss'
import data from './data/whyus.json'
function WhyUs() {
  return (
    <section id="why-us" className='why-us'>
        <h2 className='subtitle--2'>Why Us?</h2>
        <div className="why-us__list">
            {data.list.map(el=> (
                <>
                    <h3>{el.title}</h3>
                    <p>{el.subtitle}</p>
                </>
            ))}
        </div>
    </section>
  )
}

export default WhyUs