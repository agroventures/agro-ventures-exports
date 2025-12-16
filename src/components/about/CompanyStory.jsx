import React from "react";
import {
  Quote,
  ArrowRight,
  CheckCircle2,
  Sprout,
  Target,
  Heart,
} from "lucide-react";
import { yearsOfExperience } from "../../data/content";

const CompanyStory = () => {
  const highlights = [
    "State-of-the-art processing and packaging facilities",
    "ISO 22000 and HACCP certified operations",
    "Sustainable and eco-friendly farming practices",
    "Complete traceability from farm to destination",
    "24/7 customer support",
  ];

  return (
    <section
      id="story"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary-50/50 to-transparent" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-4">
              {/* Main Image */}
              <div className="col-span-8 row-span-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl img-zoom h-125">
                  <img
                    src="/src/assets/about/img2.jpg"
                    alt="Our Farm"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary-900/40 to-transparent" />
                </div>
              </div>

              {/* Secondary Image 1 */}
              <div className="col-span-4">
                <div className="rounded-2xl overflow-hidden shadow-xl img-zoom h-60">
                  <img
                    src="/src/assets/about/img3.jpg"
                    alt="Spices"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Secondary Image 2 */}
              <div className="col-span-4">
                <div className="rounded-2xl overflow-hidden shadow-xl img-zoom h-60">
                  <img
                    src="/src/assets/about/img4.jpg"
                    alt="Rice"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-10 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-linear-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                  <Sprout className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">{yearsOfExperience}+</div>
                  <div className="text-gray-600 font-medium">
                    Years of Trust
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Quote */}
            <div className="absolute -top-8 -left-8 lg:left-10 bg-primary-600 text-white rounded-2xl p-4 shadow-xl max-w-50">
              <Quote className="w-8 h-8 mb-2 opacity-50" />
              <p className="text-sm font-medium leading-relaxed">
                "Quality is not an act, it's a habit."
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-5 py-2.5">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Our Story
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                Rooted in Tradition,
                <span className="block gradient-text">
                  Growing for Tomorrow
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Agro Ventures Plantations (Pvt) Ltd has the drive, knowledge,
                and experience to make the most of Sri Lanka's great climate and
                soil for growing a variety of crops and commodities. We handle
                everything from planting to harvesting and focus on providing
                sustainable agricultural services for our clients. Due to its
                numerous uses and great demand in the market, vanilla frequently
                refers to as "green gold" and has even been priced higher than
                silver! <br /><br />
                We are dedicated to environmental protection, only
                utilize products that are sourced locally, and give our clients
                the best quality of products. Whether you're looking for fruits,
                vegetables, or spices, Agro Ventures Plantations (Pvt) Ltd
                ensures a satisfying experience with quality and freshness at
                every turn.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-primary-50 transition-colors group"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            {/* <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#plantations"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group"
              >
                Explore Our Plantations
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
