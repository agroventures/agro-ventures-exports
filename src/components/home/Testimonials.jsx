import React, { useState } from 'react'
import { testimonials } from '../../data/content'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary-50 to-transparent" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              <span className="text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              What Our Clients
              <span className="block gradient-text">Say About Us</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Don't just take our word for it. Here's what our valued clients from around 
              the world have to say about their experience with AgroVentures.
            </p>

            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-primary-600 hover:text-primary-600 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <span className="text-gray-500 ml-4">
                {currentIndex + 1} / {testimonials.length}
              </span>
            </div>
          </div>

          {/* Right Content - Testimonial Card */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 relative">
              {/* Quote Icon */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6 mt-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                  <p className="text-primary-600 font-medium">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 rounded-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-100 rounded-3xl -z-10" />
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <p className="text-center text-gray-500 mb-8">Group of Companies</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials