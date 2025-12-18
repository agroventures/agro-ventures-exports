import React from "react";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/contact/hero.png"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-900/85 to-gray-900/75" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-gray-900/50" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20 flex justify-center">
        <div className="max-w-4xl text-center">

          {/* Breadcrumb */}
          <nav className="flex justify-center items-center space-x-2 text-sm text-white/60 mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary-400">Contact Us</span>
          </nav>

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white">
                Get In Touch
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
            Let's Start a{" "}
            <span className="block text-primary-400 mt-2">
              Conversation
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-white/80 leading-relaxed mx-auto max-w-3xl mb-10">
            Whether you're looking to source premium agricultural products or have
            questions about our services, we're here to help. <br />Reach out to us today.
          </p>

          <div className="flex justify-center flex-wrap gap-4 mb-14">
            <a href="#contactForm" className="btn-primary group inline-flex items-center">
              Contact
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

export default ContactHero;
