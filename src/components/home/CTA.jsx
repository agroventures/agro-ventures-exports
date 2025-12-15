import React from 'react'
import { ArrowRight, Phone, Mail } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1920&q=80"
          alt="Farm Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary-900/95 via-primary-900/90 to-primary-800/85" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Ready to Source Premium
            <span className="block text-primary-300">Agricultural Products?</span>
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Get in touch with our export specialists today and discover how we can fulfill 
            your agricultural import needs with quality and reliability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#contact" className="btn-primary text-lg py-5 px-10 group">
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+919876543210" className="btn-outline text-lg py-5 px-10 group">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <a href="tel:+919876543210" className="flex items-center hover:text-white transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              +91 98765 43210
            </a>
            <a href="mailto:exports@agroventures.com" className="flex items-center hover:text-white transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              exports@agroventures.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA