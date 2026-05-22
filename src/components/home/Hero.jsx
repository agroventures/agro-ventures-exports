import { useEffect, useState } from 'react';
import { ArrowDown, ChevronRight, Leaf, Sprout, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { features, slides } from '../../data/content';
import { FaSoap } from 'react-icons/fa';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Sample data for the right column—move this to your content data file later if desired
  const showcaseCategories = [
    { name: 'Vanilla Extract', icon: Leaf, desc: 'Pure, organic, and authentic grades' },
    { name: 'Premium Tea', icon: Sprout, desc: 'Hand-picked from central highlands' },
    { name: 'Soap', icon: FaSoap, desc: 'Enriched with natural vanilla' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center scale-105" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-linear-to-r from-secondary/30 via-transparent to-secondary/10" />
        </div>
      ))}

      {/* Decorative Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-200 h-200 opacity-10">
          <div className="absolute inset-0 rounded-full border border-primary spin-slow" />
          <div className="absolute inset-16 rounded-full border border-primary spin-slow-reverse" />
          <div className="absolute inset-32 rounded-full border border-primary/50 spin-slow" />
        </div>
      </div>

      {/* Hero Content + Showcase */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-36 pb-20 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left: Content */}
        <div className="flex-1 min-w-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white border border-primary/30 bg-primary/10 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-primary text-xs tracking-[0.15em] lg:tracking-[0.3em] uppercase font-medium">
              Sri Lanka's Leading Agro Exporter
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            {slides[currentSlide].title}
            <br />
            <span className="gold-shimmer text-primary-400">{slides[currentSlide].subtitle}</span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-lg max-w-xl mb-10 leading-relaxed">
            {slides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 mb-10">
            <button
              onClick={() => navigate('/products')}
              className="px-6 py-3.5 bg-primary-600 text-white font-semibold text-sm tracking-wider w-full sm:w-auto text-center hover:bg-white hover:text-black transition-colors duration-300"
            >
              Explore Our Products
            </button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <feature.icon className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Featured Pillars Stack */}
        <div className="hidden lg:flex flex-col gap-4 w-96 shrink-0 bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10">
          <div className="mb-2">
            <span className="text-[10px] tracking-widest uppercase font-semibold text-primary-400">Export Categories</span>
            <h3 className="text-lg font-bold text-white">Our Signature Pillars</h3>
          </div>

          {showcaseCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div 
                key={idx}
                onClick={() => navigate('/products')}
                className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-white/5 group-hover:bg-primary/20 text-white group-hover:text-primary transition-colors">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">{cat.name}</h4>
                    <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{cat.desc}</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-gray-500 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            );
          })}
        </div>

      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-primary' : 'w-2 bg-white/50 hover:bg-white/70'}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors animate-bounce z-10"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown size={16} />
      </button>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}