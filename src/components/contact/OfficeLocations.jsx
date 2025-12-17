import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'
import { offices } from '../../data/content'

const OfficeLocations = () => {
  const [activeLocation, setActiveLocation] = useState(0)

  const currentOffice = offices[activeLocation]

  return (
    <section className="section-padding bg-linear-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      {/* Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div> */}

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-white rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm border border-white/20">
            <MapPin className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Location</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Global Presence,
            <span className="block text-primary-400">Local Expertise</span>
          </h2>
          <p className="text-lg text-gray-300">
            With strategic locations across India and the Middle East, we ensure 
            seamless operations and quick response to your needs.
          </p>
        </div>

        {/* Location Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {offices.map((office, index) => (
            <button
              key={office.id}
              onClick={() => setActiveLocation(index)}
              className={`px-5 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeLocation === index
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/10'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>{office.city}</span>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-2xl h-125">
            <iframe
              src={currentOffice.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${currentOffice.city} Office Location`}
              className="w-full h-full"
            />
          </div>

          {/* Office Details */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
            {/* Office Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase mb-3 ${
                  currentOffice.type === 'headquarters' ? 'bg-primary-500/20 text-primary-400' :
                  currentOffice.type === 'processing' ? 'bg-secondary-500/20 text-secondary-400' :
                  currentOffice.type === 'international' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {currentOffice.name}
                </span>
                <h3 className="text-3xl font-bold text-white">
                  {currentOffice.city}, {currentOffice.country}
                </h3>
              </div>
              <div className="w-20 h-20 rounded-2xl overflow-hidden">
                <img 
                  src={currentOffice.image}
                  alt={currentOffice.city}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-gray-400">{currentOffice.address}</p>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(currentOffice.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 text-sm mt-2"
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">
                    <a href={`tel:${currentOffice.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                      {currentOffice.phone}
                    </a>
                  </p>
                  <p className="text-gray-400">
                    <a href={`tel:${currentOffice.mobile.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                      {currentOffice.mobile} (Mobile)
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start overflow-hidden space-x-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a 
                    href={`mailto:${currentOffice.email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {currentOffice.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Working Hours</h4>
                  <p className="text-gray-400">{currentOffice.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfficeLocations