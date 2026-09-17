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
  IceCream,
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
      "Developing innovative beverage formulations, including VIGORE, with a focus on great taste, functionality, nutrition, and evolving consumer preferences.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: Zap,
    title: "VIGORE Functional Beverages",
    description:
      "Our research and formulation expertise supports VIGORE, creating beverages designed around functionality, performance, refreshing taste, and the needs of modern active lifestyles.",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
  {
    icon: IceCream,
    title: "Ice Cream Innovation",
    description:
      "Exploring innovative ice cream formulations that balance indulgent taste and texture with quality ingredients, consistency, and modern consumer expectations.",
    color: "bg-pink-500/10 text-pink-500 border-pink-500/20",
  },
  {
    icon: Leaf,
    title: "Clean Label & Natural",
    description:
      "Researching natural ingredients, flavors, extracts, and other carefully selected components to develop products that align with changing consumer expectations.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Safety Testing",
    description:
      "Implementing rigorous microbiological, chemical, and sensory analysis protocols to ensure beverages, ice cream, and other food products meet demanding quality and food safety requirements.",
    color: "bg-red-500/10 text-red-500 border-red-500/20",
  },
  {
    icon: Droplets,
    title: "Flavor Science & Sensory",
    description:
      "Using sensory evaluation, consumer taste testing, and flavor profiling to refine beverages and frozen products and create experiences that consumers enjoy.",
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  },
];

const ResearchOverview = () => {
  return (
    <section id="research-overview" className="py-20 lg:py-28 bg-white">
      {" "}
      <div className="container-custom">
        {/* Section Header */}{" "}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {" "}
          <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6">
            {" "}
            <Microscope className="w-4 h-4 text-primary-600" />{" "}
            <span className="text-sm font-semibold text-primary-700">
              Our Research Philosophy{" "}
            </span>{" "}
          </div>
          ```
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Where Science Meets
            <span className="text-primary-600"> Great Taste</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our R&D division brings together food science, nutrition,
            formulation expertise, and consumer insight to develop innovative
            food and beverage products. From functional beverages such as
            <strong> VIGORE</strong> to delicious ice cream creations, we turn
            research and ideas into products designed for today's consumers.
          </p>
        </div>
        {/* Focus Areas Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
            Core Research Focus Areas
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our multidisciplinary team works across key areas of food and
            beverage innovation, from VIGORE functional beverages to ice cream,
            flavor development, quality, and product optimization.
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
      </div>
    </section>
  );
};

export default ResearchOverview;
