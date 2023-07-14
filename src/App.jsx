import React from 'react'
import Header from './components/header/header'
import Navbar from './components/navbar/nav'
import About from './components/about/about'
import Exp from './components/experience/exp'
import Projects from './components/projects/projects'
import Ref from './components/references/ref'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Exp />
      <Projects />
      <Ref />
      <Contact />
      <Footer /> 
    
    </div>
  )
}

export default App
