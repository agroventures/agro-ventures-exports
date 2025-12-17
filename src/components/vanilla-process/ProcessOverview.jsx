import React, { useState } from 'react'
import { 
  Leaf, 
  Sun, 
  Wind, 
  Timer, 
  Award,
  ArrowRight,
  Clock,
  Thermometer,
  CheckCircle
} from 'lucide-react'

const ProcessOverview = () => {
  const [hoveredStep, setHoveredStep] = useState(null)

  const steps = [
    {
      id: "sourcing",
      number: "01",
      icon: Leaf,
      title: "Sourcing",
      subtitle: "Harvesting Premium Beans",
      temperature: "Fresh",
      description: "Hand-picking mature vanilla beans at optimal ripeness from our partner farms",
      color: "green",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&q=80"
    },
    {
      id: "sun-drying",
      number: "02",
      icon: Sun,
      title: "Sun Drying",
      subtitle: "Killing Process",
      temperature: "60-65°C",
      description: "Brief exposure to hot water followed by sun drying to stop vegetative growth",
      color: "yellow",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80"
    },
    {
      id: "shade-drying",
      number: "03",
      icon: Wind,
      title: "Shade Drying",
      subtitle: "Sweating Process",
      temperature: "35-40°C",
      description: "Beans are wrapped and stored to sweat, developing their characteristic aroma",
      color: "blue",
      image: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=400&q=80"
    },
    {
      id: "conditioning",
      number: "04",
      icon: Timer,
      title: "Conditioning",
      subtitle: "Flavor Development",
      temperature: "Ambient",
      description: "Extended storage period allowing complex flavors and aromas to fully develop",
      color: "purple",
      image: "https://images.unsplash.com/photo-1631209121750-a9f656d26a5b?w=400&q=80"
    },
    {
      id: "sorting",
      number: "05",
      icon: Award,
      title: "Sorting",
      subtitle: "Quality Grading",
      temperature: "Controlled",
      description: "Expert grading and sorting by size, appearance, and vanillin content",
      color: "amber",
      image: "https://images.unsplash.com/photo-1599909533681-74570b4f8a66?w=400&q=80"
    }
  ]

  const getColorClasses = (color, type) => {
    const colors = {
      green: {
        bg: 'bg-green-100',
        bgHover: 'group-hover:bg-green-600',
        text: 'text-green-600',
        textHover: 'group-hover:text-white',
        border: 'border-green-200',
        gradient: 'from-green-500 to-green-600',
        shadow: 'shadow-green-500/30'
      },
      yellow: {
        bg: 'bg-yellow-100',
        bgHover: 'group-hover:bg-yellow-500',
        text: 'text-yellow-600',
        textHover: 'group-hover:text-white',
        border: 'border-yellow-200',
        gradient: 'from-yellow-500 to-yellow-600',
        shadow: 'shadow-yellow-500/30'
      },
      blue: {
        bg: 'bg-blue-100',
        bgHover: 'group-hover:bg-blue-600',
        text: 'text-blue-600',
        textHover: 'group-hover:text-white',
        border: 'border-blue-200',
        gradient: 'from-blue-500 to-blue-600',
        shadow: 'shadow-blue-500/30'
      },
      purple: {
        bg: 'bg-purple-100',
        bgHover: 'group-hover:bg-purple-600',
        text: 'text-purple-600',
        textHover: 'group-hover:text-white',
        border: 'border-purple-200',
        gradient: 'from-purple-500 to-purple-600',
        shadow: 'shadow-purple-500/30'
      },
      amber: {
        bg: 'bg-amber-100',
        bgHover: 'group-hover:bg-amber-600',
        text: 'text-amber-600',
        textHover: 'group-hover:text-white',
        border: 'border-amber-200',
        gradient: 'from-amber-500 to-amber-600',
        shadow: 'shadow-amber-500/30'
      }
    }
    return colors[color][type]
  }

  return (
    <section id="process-overview" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-green-100/50 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 rounded-full px-5 py-2.5 mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            From Bean to
            <span className="block text-amber-600">Premium Vanilla</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our traditional curing process spans 6-9 months, carefully transforming fresh green 
            vanilla beans into the aromatic, flavor-rich vanilla prized by the world's finest chefs.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {steps.map((step, index) => (
            <a
              key={step.id}
              href={`#${step.id}`}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 card-hover text-center"
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Step Number */}
              <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold bg-linear-to-r ${getColorClasses(step.color, 'gradient')} shadow-lg ${getColorClasses(step.color, 'shadow')}`}>
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300 ${getColorClasses(step.color, 'bg')} ${getColorClasses(step.color, 'bgHover')}`}>
                <step.icon className={`w-8 h-8 transition-colors duration-300 ${getColorClasses(step.color, 'text')} ${getColorClasses(step.color, 'textHover')}`} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{step.subtitle}</p>

              {/* Duration & Temp */}
              <div className="flex items-center justify-center space-x-3 text-xs">
                <span className="flex items-center text-gray-500">
                  <Thermometer className="w-3 h-3 mr-1" />
                  {step.temperature}
                </span>
              </div>

              {/* Hover Arrow */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className={`w-5 h-5 mx-auto ${getColorClasses(step.color, 'text')}`} />
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200 z-10" />
              )}
            </a>
          ))}
        </div>

        {/* Process Summary */}
        {/* <div className="bg-linear-to-r from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "6-9", label: "Months Total Process", suffix: "" },
              { value: "100", label: "Hand Processed", suffix: "%" },
              { value: "2.5", label: "Vanillin Content", suffix: "%" },
              { value: "A+", label: "Export Grade", suffix: "" }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-amber-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default ProcessOverview