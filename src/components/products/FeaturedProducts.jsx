import React from 'react'
import { Star, ShoppingBag, Eye, Award, ArrowRight } from 'lucide-react'

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Basmati Rice",
      category: "Rice & Grains",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
      rating: 4.9,
      reviews: 128,
      origin: "Punjab, India",
      certifications: ["Organic", "GI Tagged"],
      description: "Extra-long grain premium basmati with exceptional aroma and taste",
      featured: true
    },
    {
      id: 2,
      name: "Vanilla Beans Grade A",
      category: "Vanilla & Specialty",
      image: "https://images.unsplash.com/photo-1631209121750-a9f656d26a5b?w=600&q=80",
      rating: 5.0,
      reviews: 89,
      origin: "Kerala, India",
      certifications: ["Premium", "Hand-cured"],
      description: "Gourmet-grade vanilla beans with rich vanillin content",
      featured: true
    },
    {
      id: 3,
      name: "Organic Turmeric Powder",
      category: "Spices",
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80",
      rating: 4.8,
      reviews: 256,
      origin: "Erode, India",
      certifications: ["Organic", "High Curcumin"],
      description: "Premium turmeric with 5%+ curcumin content",
      featured: true
    }
  ]

  return (
    <section className="section-padding bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-100/50 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-5 py-2.5 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">Featured</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              Best Sellers
            </h2>
          </div>
          <a href="#all-products" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group mt-4 md:mt-0">
            View All Products
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        {/* Featured Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Featured Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full flex items-center">
                    <Award className="w-3 h-3 mr-1" />
                    Featured
                  </span>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-50 transition-colors">
                    <Eye className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-50 transition-colors">
                    <ShoppingBag className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-900">{product.rating}</span>
                  <span className="text-gray-500 text-sm">({product.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="text-primary-600 text-sm font-medium mb-2">{product.category}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                {/* Origin & Certifications */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                    📍 {product.origin}
                  </span>
                  {product.certifications.map((cert, idx) => (
                    <span key={idx} className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs">
                      {cert}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center group/btn">
                  Request Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts