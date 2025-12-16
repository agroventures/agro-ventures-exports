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

const ServicesPage = () => {
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