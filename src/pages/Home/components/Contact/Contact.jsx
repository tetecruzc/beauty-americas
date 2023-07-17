import React from 'react'
import './Contact.scss'
import data from './data/contact.json'
function Contact() {
  return (
    <div className='contact'>
        <h2 className='subtitle--3'>Contact us</h2>
        <p>{data.email}</p>
    </div>
  )
}

export default Contact