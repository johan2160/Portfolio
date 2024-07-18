import React from 'react'
import Navbar from './components/Navbar'
import Info from './components/Info'
import Portfolio from './components/Portfolio'
import Contactme from './components/Contactme'
import Skills from './components/Skills'
import Footer from './components/Footer'

const App = () => {

  return (
    <div className='font-poppins bg-background selection:bg-selectionbg selection:text-selectiontxt'>
      <Navbar name="JOHANDEV21" link1="Info" link2="Proyectos" link3="Contacto"></Navbar>
      <Info name="Johan Carrasco" profession="Ingeniero en Informática" btnText="Descargar CV"></Info>
      <Skills/>
      <Portfolio></Portfolio>
      <Contactme></Contactme>
      <Footer name="JOHANDEV21" link1="Info" link2="Proyectos" link3="Contacto"></Footer>
    </div>
  )
}

export default App