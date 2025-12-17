import React from "react";
import {
  ChevronDown,
  ArrowDown,
} from "lucide-react";
import { productStats } from "../../data/content";

const ProductsHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/products/hero.png"
          alt="Agricultural Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-gray-900/40" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20 flex justify-center">
        <div className="max-w-4xl text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center items-center space-x-2 text-sm text-white/60 mb-8">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-primary-400">Products</span>
          </nav>

          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white">
                Premium Export Quality
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
              Premium <span className="text-primary-400">Vanilla</span>
              <span className="block">Products</span>
            </h1>

            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Explore our comprehensive range of export-quality spices, grains,
              pulses, and specialty products sourced directly from India's
              finest farms.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {productStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-colors"
                >
                  <stat.icon className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap justify-center pt-10 gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="#all-products" className="btn-primary group">
              Explore
              <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60">
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>
    </section>
  );
};

export default ProductsHero;
