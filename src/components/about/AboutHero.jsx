import React from "react";
import { ChevronDown, Leaf, Award, Globe, Users } from "lucide-react";
import { establishedYear } from "../../data/content";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/about/hero.jpg"
          alt="Agricultural Fields"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-transparent to-gray-900/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20 flex justify-center">
        <div className="max-w-4xl text-center">

          {/* Breadcrumb */}
          <nav className="flex justify-center items-center space-x-2 text-sm text-white/60 mb-8">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-primary-400">About Us</span>
          </nav>

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white">
                Established {" "} {establishedYear}
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
            Nurturing Nature,
            <span className="block text-primary-400 mt-2">
              Nourishing Nations
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed mx-auto max-w-3xl mb-10">
            From the fertile lands of India to tables across the globe, we bring
            you the finest agricultural products with a commitment to quality,
            sustainability, and excellence.
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <a href="#story" className="btn-primary group inline-flex items-center">
              Discover Our Story
              <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60">
        <span className="text-xs uppercase tracking-widest mb-2">
          Scroll to explore
        </span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
