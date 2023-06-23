import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {BsFillGridFill} from 'react-icons/bs'
import {CgPlayListCheck} from 'react-icons/cg'
import {RiContactsFill} from 'react-icons/ri'
const nav = () => {
  return (
    <nav>
      <a href=" #"><FaHome/></a>
      <a href=" #about"><FaUser/></a>
      <a href=" #projects"><BsFillGridFill/> </a>
      <a href=" #references "><CgPlayListCheck/> </a>
      <a href=" #contact"><RiContactsFill/> </a>
     
    </nav>
  )
}

export default nav
