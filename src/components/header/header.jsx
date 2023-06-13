import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import Socials from './socials'

const header = () => {
  return (
  <header>
      <div className="container header_container">
          <h5>Hello there, I'm</h5>
          <h1>Salieu Sarr</h1>
          <h5 className="--color-white" >Fullstack Developer</h5>
          <CTA />

          <div className="me">
            <img src={Me} alt="me" />
          </div>
       <a href="#contact" className="scroll_down">Scroll Down</a>
      <Socials />
      </div>
  </header>
  )
}

export default header
