import React from 'react'
import Navbar from '../components/Navbar'
import ProcessHero from '../components/vanilla-process/ProcessHero'
import ProcessOverview from '../components/vanilla-process/ProcessOverview'
import ProcessSourcing from '../components/vanilla-process/ProcessSourcing'
import ProcessSunDrying from '../components/vanilla-process/ProcessSunDrying'
import ProcessShadeDrying from '../components/vanilla-process/ProcessShadeDrying'
import ProcessConditioning from '../components/vanilla-process/ProcessConditioning'
import ProcessSorting from '../components/vanilla-process/ProcessSorting'
import ProcessTimeline from '../components/vanilla-process/ProcessTimeline'
import QualityAssurance from '../components/vanilla-process/QualityAssurance'
import Footer from '../components/Footer'

const VanillaProcessPage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <ProcessHero />
      <ProcessOverview />
      <ProcessSourcing />
      <ProcessSunDrying />
      <ProcessShadeDrying />
      <ProcessConditioning />
      <ProcessSorting />
      {/* <ProcessTimeline /> */}
      {/* <QualityAssurance /> */}
      <Footer />
    </div>
  )
}

export default VanillaProcessPage