import React from 'react'
import Navbar from './components/Navbar'
import InfoSection from './components/Info'
import ProjectsSection from './components/Projects'
import ContactMeSection from './components/ContactMe'
import SkillsSection from './components/Skills'
import Footer from './components/Footer'

const App = () => {

  return (
    <div className='font-poppins bg-background selection:bg-selectionbg selection:text-selectiontxt'>
      <Navbar name="johandev21" link1="Info" link2="Proyectos" link3="Contacto"></Navbar>
      <InfoSection name="Johan Carrasco" profession="Desarrollador Web" btnText="Descargar CV"></InfoSection>
      <SkillsSection/>
      <ProjectsSection></ProjectsSection>
      <ContactMeSection></ContactMeSection>
      <Footer name="johandev21" link1="Info" link2="Proyectos" link3="Contacto"></Footer>
    </div>
  )
}

export default App