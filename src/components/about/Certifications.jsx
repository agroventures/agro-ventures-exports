import React from 'react'
import { Shield, Award, CheckCircle, FileCheck, Leaf, Globe } from 'lucide-react'
import { certifications } from '../../data/content'

const Certifications = () => {

  return (
    <section className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>
      
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-white rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm border border-white/20">
            <Award className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold uppercase tracking-wider">Certifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Quality Assured,
            <span className="block text-primary-400">Globally Recognized</span>
          </h2>
          <p className="text-lg text-gray-300">
            Our commitment to quality is backed by internationally recognized certifications 
            and industry memberships that ensure the highest standards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                  cert.color === 'primary' ? 'bg-primary-500/20 group-hover:bg-primary-500' :
                  cert.color === 'secondary' ? 'bg-secondary-500/20 group-hover:bg-secondary-500' :
                  cert.color === 'green' ? 'bg-green-500/20 group-hover:bg-green-500' :
                  cert.color === 'blue' ? 'bg-blue-500/20 group-hover:bg-blue-500' :
                  cert.color === 'purple' ? 'bg-purple-500/20 group-hover:bg-purple-500' :
                  'bg-orange-500/20 group-hover:bg-orange-500'
                }`}>
                  <cert.icon className={`w-7 h-7 transition-colors duration-300 ${
                    cert.color === 'primary' ? 'text-primary-400 group-hover:text-white' :
                    cert.color === 'secondary' ? 'text-secondary-400 group-hover:text-white' :
                    cert.color === 'green' ? 'text-green-400 group-hover:text-white' :
                    cert.color === 'blue' ? 'text-blue-400 group-hover:text-white' :
                    cert.color === 'purple' ? 'text-purple-400 group-hover:text-white' :
                    'text-orange-400 group-hover:text-white'
                  }`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{cert.name}</h3>
                  <p className="text-primary-400 text-sm font-medium mb-2">{cert.type}</p>
                  <p className="text-gray-400 text-sm">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications