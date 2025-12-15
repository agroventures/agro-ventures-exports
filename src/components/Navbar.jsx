import React, { useState, useEffect } from 'react'
import { Menu, X, Leaf, ChevronDown } from 'lucide-react'
import { navLinks } from '../data/content'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              isScrolled ? 'bg-primary-600' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Leaf className={`w-8 h-8 ${isScrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <div>
              <span className={`text-2xl font-display font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary-800' : 'text-white'
              }`}>
                AgroVentures
              </span>
              <span className={`block text-xs font-medium tracking-widest uppercase ${
                isScrolled ? 'text-primary-600' : 'text-white/80'
              }`}>
                Exports
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </a>
                
                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up">
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar