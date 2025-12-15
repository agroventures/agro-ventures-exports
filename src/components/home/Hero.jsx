import React, { useEffect, useState } from 'react'
import { ArrowRight, Play, ChevronDown, Globe, Award, Truck } from 'lucide-react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "Premium Agricultural",
      subtitle: "Exports Worldwide",
      description: "Delivering the finest quality spices, grains, and agricultural products from India to global markets.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80"
    },
    {
      title: "From Farm to",
      subtitle: "Your Doorstep",
      description: "Connecting farmers with international buyers through sustainable and ethical practices.",
      image: "https://images.unsplash.com/photo-1682482001313-0581da8e2b58?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Quality Certified",
      subtitle: "Global Standards",
      description: "ISO certified export processes ensuring premium quality in every shipment.",
      image: "https://images.unsplash.com/photo-1581524674552-80462a204517?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const features = [
    { icon: Globe, text: "50+ Countries" },
    { icon: Award, text: "ISO Certified" },
    { icon: Truck, text: "Fast Delivery" }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/30" />
        </div>
      ))}

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 animate-fade-in">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Sri Lanka's Leading Agro Exporter</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight animate-fade-in-up">
                {slides[currentSlide].title}
                <span className="block text-primary-400 mt-2">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {slides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a href="#products" className="btn-primary group">
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="btn-outline group">
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <feature.icon className="w-5 h-5 text-primary-400" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Floating Cards */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-125">
              {/* Main Card */}
              <div className="absolute top-0 right-0 w-72 bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80" 
                  alt="Spices"
                  className="w-full h-40 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-white font-semibold text-lg">Premium Spices</h3>
                <p className="text-white/70 text-sm mt-1">Export Quality Turmeric, Chili, Cumin</p>
              </div>

              {/* Secondary Card */}
              <div className="absolute bottom-0 left-0 w-64 bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 animate-float" style={{ animationDelay: '1s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80" 
                  alt="Rice"
                  className="w-full h-32 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-white font-semibold">Basmati Rice</h3>
                <p className="text-white/70 text-sm mt-1">Long Grain Premium Quality</p>
              </div>

              {/* Stats Card */}
              <div className="absolute top-1/2 left-10 bg-primary-600 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm opacity-80">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-8 bg-primary-500' 
                  : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm tracking-widest uppercase rotate-90 origin-center translate-y-8">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce mt-12" />
        </div>
      </div>
    </section>
  )
}

export default Hero