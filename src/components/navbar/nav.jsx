import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {BsFillGridFill} from 'react-icons/bs'
import {CgPlayListCheck} from 'react-icons/cg'
import {RiContactsFill} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href=" #" className= {activeNav === '#' ? 'active' : ""}><FaHome/></a>
      <a href=" #about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser/></a>
      <a href=" #projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><BsFillGridFill/> </a>
      <a href=" #references" onClick={() => setActiveNav('#references')} className={activeNav === '#references' ? 'active' : ''}><CgPlayListCheck/> </a>
      <a href=" #contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsFill/> </a>
     
    </nav>
  )
}

export default Nav
