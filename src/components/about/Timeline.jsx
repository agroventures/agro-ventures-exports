import React, { useState } from 'react'
import { Calendar, Award, Globe, Users, Factory, Leaf, TrendingUp, Star } from 'lucide-react'

const Timeline = () => {
  const [activeYear, setActiveYear] = useState(2024)

  const milestones = [
    {
      year: 2009,
      title: "The Beginning",
      description: "AgroVentures Exports was founded in Mumbai with a vision to connect Indian farmers with global markets.",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&q=80",
      achievements: ["Founded with 5 team members", "First export to UAE", "Partnership with 50 farmers"]
    },
    {
      year: 2012,
      title: "Growing Roots",
      description: "Expanded operations to 10 states and established our first processing facility.",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80",
      achievements: ["10,000 sq ft processing plant", "ISO 9001 certification", "200+ farmer network"]
    },
    {
      year: 2015,
      title: "Global Expansion",
      description: "Entered European and American markets, becoming a preferred supplier for major retailers.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&q=80",
      achievements: ["Presence in 25 countries", "USDA Organic certification", "Annual revenue ₹50 Cr"]
    },
    {
      year: 2018,
      title: "Industry Recognition",
      description: "Received multiple awards for quality and sustainability practices in agricultural exports.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80",
      achievements: ["APEDA Export Excellence Award", "500+ products range", "1000+ farmer partners"]
    },
    {
      year: 2021,
      title: "Sustainable Future",
      description: "Launched organic farming initiative and achieved carbon-neutral operations status.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80",
      achievements: ["Carbon neutral certified", "100% traceable supply chain", "50+ countries served"]
    },
    {
      year: 2024,
      title: "New Horizons",
      description: "Expanding into new product categories and markets while strengthening farmer relationships.",
      icon: Star,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80",
      achievements: ["15+ years milestone", "Industry 4.0 adoption", "Vision 2030 initiative"]
    }
  ]

  const activeMilestone = milestones.find(m => m.year === activeYear)

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-5 py-2.5 mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            15 Years of
            <span className="block gradient-text">Growing Together</span>
          </h2>
          <p className="text-lg text-gray-600">
            From a small trading company to a global agricultural export leader, 
            our journey has been marked by milestones of growth and achievement.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 hidden md:block" />
          <div 
            className="absolute top-1/2 left-0 h-1 bg-primary-500 -translate-y-1/2 transition-all duration-500 hidden md:block"
            style={{ width: `${((milestones.findIndex(m => m.year === activeYear)) / (milestones.length - 1)) * 100}%` }}
          />

          {/* Year Buttons */}
          <div className="flex flex-wrap justify-between gap-4 relative">
            {milestones.map((milestone, index) => (
              <button
                key={milestone.year}
                onClick={() => setActiveYear(milestone.year)}
                className={`group flex flex-col items-center transition-all duration-300 ${
                  activeYear === milestone.year ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 relative z-10 ${
                  activeYear === milestone.year 
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30' 
                    : milestone.year < activeYear
                    ? 'bg-primary-100 text-primary-600'
                    : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                }`}>
                  <milestone.icon className="w-6 h-6" />
                </div>
                <span className={`mt-3 font-bold transition-colors ${
                  activeYear === milestone.year ? 'text-primary-600' : 'text-gray-500'
                }`}>
                  {milestone.year}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Milestone Content */}
        {activeMilestone && (
          <div className="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-4xl p-8 md:p-12 transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={activeMilestone.image}
                    alt={activeMilestone.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white rounded-2xl px-8 py-4 shadow-xl">
                  <span className="text-4xl font-bold">{activeMilestone.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                    {activeMilestone.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {activeMilestone.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Key Achievements</h4>
                  <div className="space-y-3">
                    {activeMilestone.achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm"
                      >
                        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Timeline