import React from 'react'
import { ArrowRight } from 'lucide-react'

const ProductCategories = () => {
  const categories = [
    {
      name: "Spices",
      count: 45,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
      color: "from-red-600 to-orange-600",
      products: ["Turmeric", "Chili", "Cumin", "Coriander"]
    },
    {
      name: "Rice & Grains",
      count: 28,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
      color: "from-amber-600 to-yellow-600",
      products: ["Basmati Rice", "Non-Basmati", "Wheat", "Millets"]
    },
    {
      name: "Pulses & Lentils",
      count: 32,
      image: "https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?w=600&q=80",
      color: "from-green-600 to-emerald-600",
      products: ["Chickpeas", "Lentils", "Kidney Beans", "Mung Beans"]
    },
    {
      name: "Oil Seeds",
      count: 18,
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
      color: "from-yellow-600 to-amber-700",
      products: ["Groundnuts", "Sesame", "Mustard", "Sunflower"]
    },
    {
      name: "Vanilla & Specialty",
      count: 12,
      image: "https://images.unsplash.com/photo-1631209121750-a9f656d26a5b?w=600&q=80",
      color: "from-amber-800 to-amber-900",
      products: ["Vanilla Beans", "Cardamom", "Saffron", "Cloves"]
    },
    {
      name: "Dehydrated Products",
      count: 24,
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80",
      color: "from-orange-600 to-red-700",
      products: ["Onion", "Garlic", "Ginger", "Vegetables"]
    }
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-5 py-2.5 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-wider">Categories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Explore Our
            <span className="block gradient-text">Product Range</span>
          </h2>
          <p className="text-lg text-gray-600">
            From aromatic spices to nutritious grains, discover our comprehensive 
            collection of export-quality agricultural products.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative rounded-3xl overflow-hidden h-80 card-hover"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-linear-to-t ${category.color} opacity-70 group-hover:opacity-80 transition-opacity`} />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Product Count */}
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium w-fit mb-3">
                  {category.count} Products
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>

                {/* Product Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.products.slice(0, 3).map((product, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/10 rounded-full text-white/80 text-xs">
                      {product}
                    </span>
                  ))}
                  {category.products.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 rounded-full text-white/80 text-xs">
                      +{category.products.length - 3} more
                    </span>
                  )}
                </div>

                {/* Arrow */}
                <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                  Explore Category
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories