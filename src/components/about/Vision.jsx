import React from 'react'
import { Target, Eye, Heart, Leaf, Globe, Shield, Sparkles, TrendingUp } from 'lucide-react'
import { values } from '../../data/content'

const Vision = () => {

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest dealings in every transaction"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Eco-friendly practices at every step"
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "Premium quality without compromise"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting continents with quality"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Modern solutions for age-old traditions"
    },
    {
      icon: Heart,
      title: "Care",
      description: "For farmers, customers & planet"
    }
  ]

  return (
    <section className="section-padding bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-5 py-2.5 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Purpose</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Driven by Vision,
            <span className="block gradient-text">Guided by Values</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our core beliefs shape every decision we make and every relationship we build,
            ensuring sustainable growth for all stakeholders.
          </p>
        </div>

        {/* Vision/Mission/Purpose Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((card, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 card-hover"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 ${
                  card.color === 'primary' ? 'bg-primary-600/80' :
                  card.color === 'secondary' ? 'bg-secondary-600/80' :
                  'bg-earth-600/80'
                }`} />
                
                {/* Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                    <card.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </div>

              {/* Bottom Accent */}
              <div className={`h-1 ${
                card.color === 'primary' ? 'bg-primary-500' :
                card.color === 'secondary' ? 'bg-secondary-500' :
                'bg-earth-500'
              }`} />
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="bg-gray-900 rounded-4xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Our Core Values
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The principles that guide our every action and define who we are as a company.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-500 transition-colors duration-300">
                      <value.icon className="w-6 h-6 text-primary-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{value.title}</h4>
                      <p className="text-gray-400 text-sm">{value.description}</p>
                    </div>
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

export default Vision