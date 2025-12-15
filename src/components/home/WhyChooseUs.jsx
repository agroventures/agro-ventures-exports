import React from 'react'
import { Shield, Clock, Leaf, Award, Users, TrendingUp } from 'lucide-react'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Every product undergoes strict quality control measures and lab testing before export."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We ensure on-time delivery with efficient logistics and reliable shipping partners."
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Committed to eco-friendly farming and sustainable agricultural practices."
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "ISO, FSSAI, and APEDA certified ensuring international quality standards."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated team of agricultural experts and trade professionals at your service."
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description: "Direct sourcing enables us to offer the best prices without compromising quality."
    }
  ]

  return (
    <section className="section-padding bg-linear-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-primary-200 rounded-full opacity-50" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-secondary-200 rounded-full opacity-50" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80"
                alt="Quality Farm"
                className="w-full h-125 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-900/40 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl p-8 shadow-2xl max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                <span className="text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                The AgroVentures 
                <span className="block gradient-text">Advantage</span>
              </h2>
              <p className="text-lg text-gray-600">
                We combine traditional agricultural knowledge with modern technology to deliver 
                the finest quality products to our global clients.
              </p>
            </div>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors duration-300">
                    <reason.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{reason.title}</h4>
                    <p className="text-gray-600 text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs