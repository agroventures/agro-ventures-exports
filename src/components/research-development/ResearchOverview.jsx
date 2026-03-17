import React from "react";
import {
  Microscope,
  FlaskConical,
  ShieldCheck,
  TrendingUp,
  Leaf,
  Users,
  Award,
  ArrowRight,
  Zap,
  Droplets,
} from "lucide-react";

const stats = [
  { value: "20+", label: "Years of Innovation", icon: Microscope },
  { value: "85+", label: "Formulations Developed", icon: FlaskConical },
  { value: "18", label: "Active R&D Projects", icon: TrendingUp },
  { value: "50+", label: "Food Scientists & Engineers", icon: Users },
];

const focusAreas = [
  {
    icon: FlaskConical,
    title: "Beverage Formulation",
    description:
      "Crafting innovative energy drink, functional beverage, and ready-to-drink formulations using natural ingredients, adaptogens, and nootropics to meet evolving consumer demands.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: Zap,
    title: "Functional Ingredients",
    description:
      "Researching and sourcing cutting-edge functional ingredients - from plant-based caffeine and electrolytes to vitamins and amino acids - that deliver real performance benefits.",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
  {
    icon: Leaf,
    title: "Clean Label & Natural",
    description:
      "Developing clean-label beverages free from artificial colors, sweeteners, and preservatives - using only natural flavors, organic extracts, and sustainably sourced botanicals.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Safety Testing",
    description:
      "Implementing rigorous microbiological, chemical, and sensory analysis protocols to ensure every product meets global food safety standards and delivers consistent taste profiles.",
    color: "bg-red-500/10 text-red-500 border-red-500/20",
  },
  {
    icon: Droplets,
    title: "Flavor Science & Sensory",
    description:
      "Utilizing advanced sensory evaluation panels, consumer taste-testing, and flavor profiling technologies to create beverages that excite palates and drive brand loyalty.",
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  },
  {
    icon: Award,
    title: "Shelf Life & Packaging",
    description:
      "Engineering optimal preservation methods, aseptic processing, and sustainable packaging solutions that extend shelf life while reducing environmental footprint across the supply chain.",
    color: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  },
];

const ResearchOverview = () => {
  return (
    <section id="research-overview" className="py-20 lg:py-28 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6">
            <Microscope className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">
              Our Research Philosophy
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Where Science Meets
            <span className="text-primary-600"> Great Taste</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our R&D division sits at the crossroads of food science, nutrition,
            and consumer insight. From concept to commercialization, we develop
            next-generation energy drinks, functional beverages, and
            health-focused refreshments that fuel active lifestyles around the
            globe.
          </p>
        </div>

        {/* Stats Bar */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg hover:border-primary-200 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}

        {/* Focus Areas Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
            Core Research Focus Areas
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our multidisciplinary team works across six key pillars to create
            beverages that taste incredible, perform better, and push the
            industry forward.
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-primary-100 transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl border mb-6 ${area.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <area.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {area.title}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                {area.description}
              </p>
              <div className="flex items-center text-primary-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 bg-linear-to-br from-primary-600 to-amber-700 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
              Partner With Our R&D Lab
            </h3>
            <p className="text-white/80 max-w-lg">
              We collaborate with ingredient suppliers, universities, sports
              nutrition experts, and brand partners to co-develop the next
              breakthrough beverage.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg shrink-0 group"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ResearchOverview;