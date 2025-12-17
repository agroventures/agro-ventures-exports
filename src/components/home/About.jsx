import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { homeHighlights, values } from "../../data/content";

const About = () => {
  return (
    <section
      id="about"
      className="section-padding bg-linear-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-100 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl opacity-50" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                About Us
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                Cultivating Excellence,
                <span className="block gradient-text">Exporting Trust</span>
              </h2>
              <p className="text-lg text-gray-600 text-justify leading-relaxed">
                Agro Ventures Plantations (Pvt) Ltd has the drive, knowledge,
                and experience to make the most of Sri Lanka's great climate and
                soil for growing a variety of crops and commodities. We handle
                everything from planting to harvesting and focus on providing
                sustainable agricultural services for our clients. Due to its
                numerous uses and great demand in the market, vanilla frequently
                refers to as "green gold" and has even been priced higher than
                silver!
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {homeHighlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="w-6 h-6 text-primary-500 shrink-0" />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/about"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/src/assets/home/img1.jpg"
                    alt="Vanilla Flower"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/src/assets/home/img2.jpg"
                    alt="Plantations"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/src/assets/home/img3.jpg"
                    alt="Quality Check"
                    className="w-full h-128 object-cover"
                  />
                </div>
                {/* <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1556767576-5ec41e3239ea?w=600&q=80"
                    alt="Warehouse"
                    className="w-full h-48 object-cover"
                  />
                </div> */}
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white rounded-2xl p-6 shadow-2xl">
              <div className="text-center">
                <span className="text-4xl font-bold block">3+</span>
                <span className="text-sm opacity-90">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
