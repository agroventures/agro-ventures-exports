import React from 'react'
import Navbar from '../components/Navbar'
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import OfficeLocations from '../components/contact/OfficeLocations'
import ContactFAQ from '../components/contact/ContactFAQ'
import Footer from '../components/Footer'
import useSEO from '../hooks/useSEO'

const ContactPage = () => {
  const url = window.location.href;

  useSEO({
    title: "Contact - Agro Ventures Exports",
    url,
    image_alt: "Contact",
    twitter_card: "summary_large_image",
  });

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