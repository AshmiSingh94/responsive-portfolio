import React from 'react'
import "./Navbar.css"
const Navbar= ()=> {
  return (
    <div className='n-wrapper'>
        <div className='n-wrapper-left'>
            <div className='n-name'>Ashmita</div>
            <span className="n-toggle">Toggle</span>
        </div>
        <div className='n-wrapper-right'>
           <div className="n-list">
           <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonial</li>
           </ul>
            </div> 
            <button className='custom-btn'>Contact Us</button>
        </div>
    </div>
  )
}

export default Navbar