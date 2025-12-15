import React from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Headphones } from 'lucide-react'

const ContactHero = () => {
  const quickContacts = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
      subtext: "Mon-Sat, 9AM-6PM IST",
      href: "tel:+919876543210",
      color: "primary"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "exports@agroventures.com",
      subtext: "We reply within 24 hours",
      href: "mailto:exports@agroventures.com",
      color: "secondary"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 98765 43210",
      subtext: "Quick response guaranteed",
      href: "https://wa.me/919876543210",
      color: "green"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      value: "+91 22 1234 5678",
      subtext: "For existing clients",
      href: "tel:+912212345678",
      color: "blue"
    }
  ]

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-900/85 to-gray-900/75" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-gray-900/50" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl floating-delayed" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size:[60px_60px]" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-white/60 mb-8">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span className="text-primary-400">Contact Us</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white">Get In Touch</span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
                Let's Start a
                <span className="block text-primary-400">Conversation</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                Whether you're looking to source premium agricultural products or have 
                questions about our services, we're here to help. Reach out to us today.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">24h</div>
                <div className="text-white/60 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">50+</div>
                <div className="text-white/60 text-sm">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right - Quick Contact Cards */}
          <div className="grid grid-cols-2 gap-4">
            {quickContacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 card-hover"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                  contact.color === 'primary' ? 'bg-primary-500/20 group-hover:bg-primary-500' :
                  contact.color === 'secondary' ? 'bg-secondary-500/20 group-hover:bg-secondary-500' :
                  contact.color === 'green' ? 'bg-green-500/20 group-hover:bg-green-500' :
                  'bg-blue-500/20 group-hover:bg-blue-500'
                }`}>
                  <contact.icon className={`w-6 h-6 transition-colors duration-300 ${
                    contact.color === 'primary' ? 'text-primary-400 group-hover:text-white' :
                    contact.color === 'secondary' ? 'text-secondary-400 group-hover:text-white' :
                    contact.color === 'green' ? 'text-green-400 group-hover:text-white' :
                    'text-blue-400 group-hover:text-white'
                  }`} />
                </div>
                <h3 className="text-white font-semibold mb-1">{contact.title}</h3>
                <p className="text-white/90 font-medium text-sm mb-1">{contact.value}</p>
                <p className="text-white/50 text-xs">{contact.subtext}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default ContactHero