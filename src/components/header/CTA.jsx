import React from 'react'
import resume from '../../assets/Salieu Sarr Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={resume}download className="btn">Downlaod Resume</a>
        <a href="#contact" className="btn">Contact Me</a>
      
    </div>
  )
}

export default CTA
