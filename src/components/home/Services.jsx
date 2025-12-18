import React from 'react'
import { services } from '../../data/content'
import { Link } from 'react-router-dom'

const Services = () => {

  return (
    <section id="services" className="section-padding bg-linear-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-600/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-white rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary-400 rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            End-to-End Export
            <span className="block text-primary-400">Solutions</span>
          </h2>
          <p className="text-lg text-gray-300">
            From sourcing to delivery, we handle every aspect of the export process 
            with precision and professionalism.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-primary-500/50 transition-all duration-500 card-hover"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                service.color === 'primary' 
                  ? 'bg-primary-600/20 group-hover:bg-primary-600' 
                  : 'bg-secondary-600/20 group-hover:bg-secondary-600'
              }`}>
                <service.icon className={`w-7 h-7 ${
                  service.color === 'primary' ? 'text-primary-400' : 'text-secondary-400'
                } group-hover:text-white transition-colors duration-300`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.shortDesc}</p>

              {/* Hover Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                service.color === 'primary' ? 'bg-primary-500' : 'bg-secondary-500'
              }`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <p className="text-white text-lg">
              Need a custom export solution?
            </p>
            <Link to="/contact" className="btn-primary py-3 px-6">
              Contact Our Team
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Services