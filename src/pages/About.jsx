import React from 'react'
import Navbar from '../components/Navbar'
import AboutHero from '../components/about/AboutHero'
import CompanyStory from '../components/about/CompanyStory'
import Vision from '../components/about/Vision'
import Timeline from '../components/about/Timeline'
import Plantations from '../components/about/Plantations'
import Projects from '../components/about/Projects'
import Team from '../components/about/Team'
import Certifications from '../components/about/Certifications'
import CTA from '../components/home/CTA'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <AboutHero />
      <CompanyStory />
      <Vision />
      {/* <Timeline /> */}
      {/* <Plantations /> */}
      <Projects />
      {/* <Team /> */}
      <Certifications />
      {/* <CTA /> */}
      <Footer />
    </div>
  )
}

export default About