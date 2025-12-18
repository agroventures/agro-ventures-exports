import React from 'react'
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react'
import { navLinks, products, socialLinks } from '../data/content'
import { Link } from 'react-router-dom'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Top Wave */}
      {/* <div className="absolute top-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path fill="#f9fafb" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div> */}

      {/* Newsletter Section */}
      {/* <div className="pt-20 pb-12 border-b border-gray-800">
        <div className="container-custom">
          <div className="bg-linear-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-primary-100">Get the latest updates on new products and export opportunities.</p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                  />
                  <button type="submit" className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              {/* <a href="#home" className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary-600 rounded-xl">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-display font-bold">AgroVentures</span>
                  <span className="block text-xs text-gray-400 tracking-widest uppercase">Exports</span>
                </div>
              </a> */}
              <img src="/logo.png" className='w-40' alt="Logo" />
              <p className="text-gray-400 mb-6">
                Leading exporter of premium quality agricultural products from Sri Lanka to the world.
              </p>
              <div className="space-y-3">
                <a href="tel:+919876543210" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 mr-3" />
                  +94 11 287 8766
                </a>
                <a href="mailto:exports@agroventures.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 mr-3" />
                  info@agroventuresexports.com
                </a>
                <div className="flex items-start text-gray-400">
                  <MapPin className="w-5 h-5 mr-3 shrink-0 mt-1" />
                  <span>No: 48, Sir Marcus Fernando, Colombo 07</span>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-bold mb-6">Products</h4>
              <ul className="space-y-3">
                {products.slice(0, 6).map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="text-gray-400 hover:text-primary-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-bold mb-6">Company</h4>
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="text-gray-400 hover:text-primary-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            {/* <div>
              <h4 className="text-lg font-bold mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="text-gray-400 hover:text-primary-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Certifications */}
            {/* <div>
              <h4 className="text-lg font-bold mb-6">Certifications</h4>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <span className="text-xl font-bold text-primary-400">ISO</span>
                  <span className="block text-xs text-gray-400 mt-1">22000 Certified</span>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <span className="text-xl font-bold text-primary-400">APEDA</span>
                  <span className="block text-xs text-gray-400 mt-1">Registered</span>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <span className="text-xl font-bold text-primary-400">FSSAI</span>
                  <span className="block text-xs text-gray-400 mt-1">Licensed</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} <Link to='/' className='font-semibold hover:underline'>Agro Ventures Exports</Link>. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-700 transition-colors z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  )
}

export default Footer