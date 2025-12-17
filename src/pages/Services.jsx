import React from 'react'
import Navbar from '../components/Navbar'
import ServicesHero from '../components/services/ServicesHero'
import ServicesOverview from '../components/services/ServicesOverview'
import ServiceAwareness from '../components/services/ServiceAwareness'
import ServicePlantingMaterial from '../components/services/ServicePlantingMaterial'
import ServiceVanillaCultivation from '../components/services/ServiceVanillaCultivation'
import ServiceContractFarming from '../components/services/ServiceContractFarming'
import ServicesProcess from '../components/services/ServiceProcess'
import Footer from '../components/Footer'
import useSEO from '../hooks/useSEO'

const ServicesPage = () => {
  const url = window.location.href;

  useSEO({
    title: "Services - Agro Ventures Exports",
    url,
    image_alt: "Services",
    twitter_card: "summary_large_image",
  });

  return (
    <div className="overflow-hidden">
      <Navbar />
      <ServicesHero />
      <ServicesOverview />
      <ServiceAwareness />
      <ServicePlantingMaterial />
      <ServiceVanillaCultivation />
      <ServiceContractFarming />
      {/* <ServicesProcess /> */}
      <Footer />
    </div>
  )
}

export default ServicesPage