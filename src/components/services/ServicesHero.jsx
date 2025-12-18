import React from "react";
import {
  Sparkles,
  Leaf,
  Users,
  FileCheck,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/services/hero.jpg"
          alt="Agricultural Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/35 via-gray-900/45 to-gray-900/70" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-gray-900/40" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20 flex justify-center">
        <div className="max-w-4xl text-center">

          {/* Breadcrumb */}
          <nav className="flex justify-center items-center space-x-2 text-sm text-white/60 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary-400">Our Services</span>
          </nav>

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white">
                Comprehensive Agricultural Services
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
            Expert Services
            <span className="block text-primary-400 mt-2">
              For Farmers
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-white/80 leading-relaxed mx-auto max-w-3xl mb-10">
            From awareness programs to contract farming, we provide end-to-end support
            to help farmers succeed in high-value crop cultivation and achieve
            sustainable growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center flex-wrap gap-4 mb-14">
            <a href="#services" className="btn-primary group inline-flex items-center">
              Explore Services
              <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </a>
            <a href="/contact" className="btn-outline">
              Get Consultation
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

export default ServicesHero;
