import React, { useState } from 'react'
import { ArrowRight, Calendar, MapPin, Users, Package, ExternalLink, Filter } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'export', name: 'Export Projects' },
    { id: 'sustainability', name: 'Sustainability' },
    { id: 'community', name: 'Community' },
  ]

  const projects = [
    {
      id: 1,
      title: "Organic Spice Export to EU",
      category: "export",
      description: "Successfully exported 500 MT of certified organic spices to European markets, meeting stringent EU organic standards.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
      date: "2024",
      location: "Germany, Netherlands, UK",
      stats: { volume: "500 MT", farmers: "200+", value: "₹15 Cr" },
      featured: true
    },
    {
      id: 2,
      title: "Premium Basmati Supply Chain",
      category: "export",
      description: "Established a complete traceability system for basmati rice exports to Middle Eastern countries.",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
      date: "2023",
      location: "UAE, Saudi Arabia, Kuwait",
      stats: { volume: "2000 MT", farmers: "500+", value: "₹45 Cr" },
      featured: true
    },
    {
      id: 3,
      title: "Carbon Neutral Farming Initiative",
      category: "sustainability",
      description: "Implemented sustainable farming practices across 5000 acres, achieving carbon-neutral certification.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
      date: "2023",
      location: "Kerala, Karnataka",
      stats: { area: "5000 Acres", reduction: "60%", farmers: "300+" },
      featured: false
    },
    {
      id: 4,
      title: "Farmer Training Program",
      category: "community",
      description: "Trained over 1000 farmers in organic farming techniques and modern agricultural practices.",
      image: "https://images.unsplash.com/photo-1589923188651-268a9765e432?w=600&q=80",
      date: "2022-2024",
      location: "Pan India",
      stats: { trained: "1000+", villages: "50+", yield: "+30%" },
      featured: false
    },
    {
      id: 5,
      title: "Chili Export to USA",
      category: "export",
      description: "First Indian company to directly export Guntur chilies to major US food processors.",
      image: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=600&q=80",
      date: "2024",
      location: "California, Texas, New York",
      stats: { volume: "300 MT", clients: "15+", value: "₹8 Cr" },
      featured: true
    },
    {
      id: 6,
      title: "Women Farmer Empowerment",
      category: "community",
      description: "Established self-help groups for women farmers, providing training, resources, and market access.",
      image: "https://images.unsplash.com/photo-1594761051656-153f9d8bd0e7?w=600&q=80",
      date: "2023",
      location: "Andhra Pradesh, Telangana",
      stats: { women: "500+", groups: "25", income: "+40%" },
      featured: false
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section id="projects" className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-5 py-2.5 mb-6">
            <Package className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Success Stories &
            <span className="block gradient-text">Latest Initiatives</span>
          </h2>
          <p className="text-lg text-gray-600">
            Explore our latest projects that showcase our commitment to quality exports, 
            sustainable practices, and community development.
          </p>
        </div>

        {/* Featured Projects - Large Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.slice(0, 2).map((project, index) => (
            <div 
              key={project.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 card-hover"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold uppercase rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Featured Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-secondary-500 text-white text-xs font-semibold uppercase rounded-full">
                    Featured
                  </span>
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center space-x-4 text-white/80 text-sm">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center p-3 bg-gray-50 rounded-xl">
                      <div className="text-xl font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{key}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a 
                  href="#"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group/link"
                >
                  View Project Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.id === 'all' && <Filter className="w-4 h-4" />}
              <span>{filter.name}</span>
            </button>
          ))}
        </div> */}

        {/* All Projects Grid */}
        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 text-xs font-semibold uppercase rounded-full ${
                    project.category === 'export' ? 'bg-primary-500 text-white' :
                    project.category === 'sustainability' ? 'bg-green-500 text-white' :
                    'bg-secondary-500 text-white'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center space-x-3 text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {project.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center truncate">
                    <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" />
                    {project.location}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{project.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    {Object.entries(project.stats).slice(0, 2).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-sm font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-400 uppercase">{key}</div>
                      </div>
                    ))}
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="#" className="btn-primary">
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects