import React from 'react'
import { Linkedin, Twitter, Mail, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'

const Team = () => {
  const leadership = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      bio: "With 25+ years in agricultural trade, Rajesh founded AgroVentures with a vision to transform Indian agro exports.",
      linkedin: "#",
      twitter: "#",
      email: "rajesh@agroventures.com"
    },
    {
      name: "Priya Sharma",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      bio: "Priya leads our operations with expertise in supply chain management and international trade regulations.",
      linkedin: "#",
      twitter: "#",
      email: "priya@agroventures.com"
    },
    {
      name: "Amit Patel",
      role: "Head of Quality Assurance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      bio: "Amit ensures every product meets international quality standards with his 15+ years of experience.",
      linkedin: "#",
      twitter: "#",
      email: "amit@agroventures.com"
    },
    {
      name: "Sunita Reddy",
      role: "Director of Sustainability",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      bio: "Sunita drives our sustainable farming initiatives and environmental responsibility programs.",
      linkedin: "#",
      twitter: "#",
      email: "sunita@agroventures.com"
    }
  ]

  const team = [
    {
      name: "Vikram Singh",
      role: "Export Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80"
    },
    {
      name: "Meera Joshi",
      role: "Procurement Head",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80"
    },
    {
      name: "Arjun Nair",
      role: "Logistics Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80"
    },
    {
      name: "Kavitha Menon",
      role: "Quality Controller",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80"
    },
    {
      name: "Ravi Verma",
      role: "Farm Relations",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80"
    },
    {
      name: "Anjali Desai",
      role: "Customer Success",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80"
    }
  ]

  return (
    <section className="section-padding bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-100/50 rounded-full blur-3xl" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-5 py-2.5 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Meet the People
            <span className="block gradient-text">Behind Our Success</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our dedicated team of experts brings together decades of experience in 
            agriculture, international trade, and quality management.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Leadership Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links - Show on Hover */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Link to={member.linkedin} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link to={member.twitter} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </Link>
                    <Link to={`mailto:${member.email}`} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extended Team */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Our Expert Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group text-center"
              >
                <div className="relative mb-4 mx-auto w-28 h-28 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-colors duration-300" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm">{member.name}</h4>
                <p className="text-gray-500 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 bg-primary-600 rounded-4xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
          
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                <Quote className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-xl md:text-2xl text-white font-medium italic mb-4">
                "Our team is our greatest asset. Together, we're not just exporting products – 
                we're building bridges between Indian farmers and global tables, one shipment at a time."
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
                  alt="Rajesh Kumar"
                  className="w-12 h-12 rounded-full border-2 border-white/50"
                />
                <div>
                  <div className="text-white font-semibold">Rajesh Kumar</div>
                  <div className="text-primary-200 text-sm">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team