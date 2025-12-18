import React, { useState } from 'react'
import { MapPin, Thermometer, Droplets, Mountain, ArrowRight, ChevronLeft, ChevronRight, Leaf, Sun, Wind } from 'lucide-react'
import { Link } from 'react-router-dom'

const Plantations = () => {
  const [activeRegion, setActiveRegion] = useState(0)

  const plantations = [
    {
      id: 1,
      name: "Kerala Spice Estates",
      location: "Idukki, Kerala",
      area: "2,500+ Acres",
      crops: ["Cardamom", "Black Pepper", "Cloves", "Cinnamon"],
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
      description: "Nestled in the Western Ghats, our Kerala estates produce the world's finest cardamom and pepper, benefiting from the unique microclimate and traditional farming methods.",
      climate: "Tropical Monsoon",
      altitude: "800-1200m",
      rainfall: "3000mm/year",
      features: ["Organic Certified", "Shade Grown", "Hand Picked"]
    },
    {
      id: 2,
      name: "Punjab Rice Fields",
      location: "Amritsar, Punjab",
      area: "5,000+ Acres",
      crops: ["Basmati Rice", "Pusa 1121", "Traditional Basmati"],
      image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&q=80",
      description: "The fertile plains of Punjab, fed by the five rivers, produce the most aromatic basmati rice known for its exceptional length and fragrance.",
      climate: "Semi-Arid",
      altitude: "200-300m",
      rainfall: "500mm/year",
      features: ["GI Tagged", "Natural Irrigation", "Premium Grade"]
    },
    {
      id: 3,
      name: "Rajasthan Cumin Farms",
      location: "Jodhpur, Rajasthan",
      area: "3,000+ Acres",
      crops: ["Cumin Seeds", "Coriander", "Fennel", "Fenugreek"],
      image: "https://images.unsplash.com/photo-1599909533353-f2b1fb90a76a?w=800&q=80",
      description: "The arid climate of Rajasthan creates perfect conditions for growing the most potent and aromatic cumin seeds, prized globally for their intense flavor.",
      climate: "Hot Desert",
      altitude: "200-400m",
      rainfall: "300mm/year",
      features: ["Low Moisture", "High Oil Content", "Export Grade"]
    },
    {
      id: 4,
      name: "Guntur Chili Plantations",
      location: "Guntur, Andhra Pradesh",
      area: "4,000+ Acres",
      crops: ["Guntur Chili", "Byadgi Chili", "Teja Chili"],
      image: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=800&q=80",
      description: "Famous worldwide, Guntur chilies are known for their perfect balance of heat and color, making them essential for cuisines across the globe.",
      climate: "Tropical Wet-Dry",
      altitude: "100-200m",
      rainfall: "800mm/year",
      features: ["High SHU", "Vibrant Color", "Sun Dried"]
    },
    {
      id: 5,
      name: "Gujarat Groundnut Farms",
      location: "Junagadh, Gujarat",
      area: "6,000+ Acres",
      crops: ["Groundnuts", "Sesame", "Castor"],
      image: "https://images.unsplash.com/photo-1567892737950-30c4db37cd89?w=800&q=80",
      description: "Gujarat's black soil produces the crunchiest groundnuts with the highest oil content, ideal for both table consumption and oil extraction.",
      climate: "Semi-Arid Tropical",
      altitude: "100-300m",
      rainfall: "600mm/year",
      features: ["High Oil Content", "Bold Variety", "Machine Sorted"]
    }
  ]

  const currentPlantation = plantations[activeRegion]

  const nextRegion = () => {
    setActiveRegion((prev) => (prev + 1) % plantations.length)
  }

  const prevRegion = () => {
    setActiveRegion((prev) => (prev - 1 + plantations.length) % plantations.length)
  }

  return (
    <section id="plantations" className="section-padding bg-linear-to-b from-primary-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-white rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm border border-white/20">
            <Leaf className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Plantations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            From Farm to
            <span className="block text-primary-400">Your Table</span>
          </h2>
          <p className="text-lg text-gray-300">
            Discover our network of premium plantations across India, where traditional 
            farming meets modern sustainability practices.
          </p>
        </div>

        {/* Region Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {plantations.map((plantation, index) => (
            <button
              key={plantation.id}
              onClick={() => setActiveRegion(index)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 text-sm ${
                activeRegion === index
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/10'
              }`}
            >
              {plantation.location.split(',')[1]?.trim() || plantation.location}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={currentPlantation.image}
                alt={currentPlantation.name}
                className="w-full h-125 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-transparent to-transparent" />
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <button 
                onClick={prevRegion}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors pointer-events-auto"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextRegion}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors pointer-events-auto"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Location Badge */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="flex items-center space-x-3 text-white">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="font-medium">{currentPlantation.location}</span>
              </div>
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              <span className="text-white font-medium">
                {activeRegion + 1} / {plantations.length}
              </span>
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            <div>
              <span className="text-primary-400 font-semibold uppercase tracking-wider text-sm">
                {currentPlantation.area}
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-4">
                {currentPlantation.name}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {currentPlantation.description}
              </p>
            </div>

            {/* Climate Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <Thermometer className="w-6 h-6 text-primary-400 mb-2" />
                <div className="text-white font-semibold">{currentPlantation.climate}</div>
                <div className="text-gray-400 text-sm">Climate</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <Mountain className="w-6 h-6 text-primary-400 mb-2" />
                <div className="text-white font-semibold">{currentPlantation.altitude}</div>
                <div className="text-gray-400 text-sm">Altitude</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <Droplets className="w-6 h-6 text-primary-400 mb-2" />
                <div className="text-white font-semibold">{currentPlantation.rainfall}</div>
                <div className="text-gray-400 text-sm">Rainfall</div>
              </div>
            </div>

            {/* Crops */}
            <div>
              <h4 className="text-white font-semibold mb-3">Primary Crops</h4>
              <div className="flex flex-wrap gap-2">
                {currentPlantation.crops.map((crop, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30"
                  >
                    {crop}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-white font-semibold mb-3">Special Features</h4>
              <div className="flex flex-wrap gap-3">
                {currentPlantation.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 bg-white/10 rounded-xl px-4 py-2"
                  >
                    {index === 0 && <Leaf className="w-4 h-4 text-primary-400" />}
                    {index === 1 && <Sun className="w-4 h-4 text-secondary-400" />}
                    {index === 2 && <Wind className="w-4 h-4 text-blue-400" />}
                    <span className="text-white text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link 
              to="/contact" 
              className="inline-flex items-center text-primary-400 font-semibold hover:text-primary-300 group"
            >
              Schedule a Farm Visit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Plantation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          {plantations.map((plantation, index) => (
            <button
              key={plantation.id}
              onClick={() => setActiveRegion(index)}
              className={`relative rounded-2xl overflow-hidden h-32 transition-all duration-300 ${
                activeRegion === index ? 'ring-2 ring-primary-500 scale-105' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img 
                src={plantation.image}
                alt={plantation.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent" />
              <span className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium truncate">
                {plantation.name.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plantations