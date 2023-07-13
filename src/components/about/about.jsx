import React from 'react'
import './about.css'
import Me from '../../assets/profile.JPG'
import {BsFillGridFill} from 'react-icons/bs'
import {CgPlayListCheck} from 'react-icons/cg'

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about_me">
        <div className="about__me-image">
          <img src={Me} alt="about-img" />

        </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <BsFillGridFill className="card_icon"/>
              <h5>Projects</h5>
            <small>10+ Projects</small>

            </article>
            <article className="about_card">
              <CgPlayListCheck className="card_icon"/>
              <h5>References</h5>
            <small>Client Testimonials</small>

            </article>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente eveniet quaerat, illum excepturi similique nobis delectus doloremque vel eaque perspiciatis cupiditate obcaecati iusto sint voluptas velit impedit incidunt eligendi deleniti!
            </p>

            <a href="#contact" className="btn">Message Me</a>

          

        </div>
      </div>
      
    </section>
  )
}

export default about
