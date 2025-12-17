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
import useSEO from '../hooks/useSEO'

const About = () => {
  const url = window.location.href;

  useSEO({
    title: "About - Agro Ventures Exports",
    url,
    image_alt: "About",
    twitter_card: "summary_large_image",
  });

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