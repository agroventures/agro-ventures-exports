import React from 'react'
import Navbar from '../components/Navbar'
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import OfficeLocations from '../components/contact/OfficeLocations'
import ContactFAQ from '../components/contact/ContactFAQ'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <OfficeLocations />
      {/* <ContactFAQ /> */}
      <Footer />
    </div>
  )
}

export default ContactPage