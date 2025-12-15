import React, { useState, useEffect, useRef } from 'react'
import { Globe, Package, Users, Award } from 'lucide-react'

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ countries: 0, products: 0, clients: 0, years: 0 })
  const sectionRef = useRef(null)

  const stats = [
    { icon: Globe, value: 50, suffix: '+', label: 'Countries Served', key: 'countries' },
    { icon: Package, value: 200, suffix: '+', label: 'Products Exported', key: 'products' },
    { icon: Users, value: 500, suffix: '+', label: 'Happy Clients', key: 'clients' },
    { icon: Award, value: 15, suffix: '+', label: 'Years Experience', key: 'years' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      stats.forEach(stat => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            clearInterval(timer)
            setCounts(prev => ({ ...prev, [stat.key]: end }))
          } else {
            setCounts(prev => ({ ...prev, [stat.key]: Math.floor(start) }))
          }
        }, 16)
      })
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 bg-primary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {counts[stat.key]}{stat.suffix}
              </div>
              <div className="text-primary-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats