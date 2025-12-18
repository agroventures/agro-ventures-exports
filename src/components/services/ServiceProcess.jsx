import React from 'react'
import { 
  PhoneCall, 
  ClipboardCheck, 
  Handshake, 
  Rocket,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Link } from 'react-router-dom'

const ServicesProcess = () => {
  const steps = [
    {
      icon: PhoneCall,
      title: "Initial Consultation",
      description: "Contact us to discuss your requirements, land details, and agricultural goals",
      points: ["Free consultation", "Requirement analysis", "Feasibility assessment"]
    },
    {
      icon: ClipboardCheck,
      title: "Site Assessment",
      description: "Our experts visit your farm to evaluate conditions and recommend suitable options",
      points: ["Soil testing", "Climate analysis", "Crop recommendation"]
    },
    {
      icon: Handshake,
      title: "Agreement & Planning",
      description: "We finalize the service package and create a detailed implementation plan",
      points: ["Customized plan", "Clear pricing", "Timeline setting"]
    },
    {
      icon: Rocket,
      title: "Implementation",
      description: "We provide all inputs, training, and support for successful execution",
      points: ["Quality inputs", "Technical support", "Regular monitoring"]
    }
  ]

  return (
    <section className="section-padding bg-linear-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-white rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 bg-primary-400 rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-wider">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Simple Process,
            <span className="block text-primary-400">Powerful Results</span>
          </h2>
          <p className="text-lg text-gray-300">
            Getting started with our agricultural services is easy. Follow these simple 
            steps to begin your journey towards successful farming.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-primary-500/30">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-primary-400 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 mb-4">{step.description}</p>

                {/* Points */}
                <div className="space-y-2">
                  {step.points.map((point, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-400 shrink-0" />
                      <span className="text-gray-300 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-primary-500/50">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Ready to get started? Contact us today for a free consultation.
          </p>
          <Link to="/contact" className="btn-primary">
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesProcess