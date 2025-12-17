import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Play,
  Leaf,
  Sun,
  Wind,
  Timer,
  Award,
  ArrowRight,
} from "lucide-react";

const ProcessHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/vanilla-process/hero.png"
          alt="Vanilla Beans"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/35 via-gray-900/45 to-gray-900/70" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-gray-900/40" />
      </div>

      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl floating-slow" />
      </div> */}

      {/* Floating Vanilla Beans Decoration */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-32 h-8 bg-amber-900/30 rounded-full blur-sm rotate-45 floating" />
        <div className="absolute top-[40%] right-[20%] w-24 h-6 bg-amber-800/20 rounded-full blur-sm -rotate-12 floating-delayed" />
        <div className="absolute bottom-[30%] right-[15%] w-28 h-7 bg-amber-900/25 rounded-full blur-sm rotate-30 floating-slow" />
      </div> */}

      <div className="container-custom relative z-10 pt-32 pb-20 flex justify-center">
        <div className="max-w-4xl text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center items-center space-x-2 text-sm text-white/60 mb-8">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-amber-400">Vanilla Process</span>
          </nav>

          <div className="max-w-4xl">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-5 py-2.5">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-amber-200">
                  Premium Vanilla Processing
                </span>
              </div>

              {/* Heading */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
                  The Art of
                  <span className="block text-amber-400">Vanilla Curing</span>
                </h1>
                <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                  Discover our meticulous 5-step process that transforms fresh
                  vanilla beans into the world's most aromatic and flavorful
                  vanilla, prized by chefs globally.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex justify-center flex-wrap gap-4">
                <a
                  href="#process-overview"
                  className="btn-primary bg-amber-500 hover:bg-amber-600 shadow-amber-500/30 text-gray-900 group"
                >
                  Explore Process
                  <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60">
        <span className="text-xs uppercase tracking-widest mb-2">
          Discover the process
        </span>
        <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;
