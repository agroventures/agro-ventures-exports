import React from "react";
import {
  Sun,
  Thermometer,
  Clock,
  Droplets,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { sundryingSteps } from "../../data/content";

const ProcessSunDrying = () => {
  const dosDonts = {
    dos: [
      "Monitor temperature constantly",
      "Turn beans every 30 minutes",
      "Use clean, dark blankets",
      "Process on clear, sunny days",
      "Maintain consistent timing",
    ],
    donts: [
      "Over-expose to avoid burning",
      "Process during rain or humidity",
      "Use contaminated equipment",
      "Skip the hot water step",
      "Rush the process",
    ],
  };

  return (
    <section
      id="sun-drying"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-yellow-50/50 to-transparent" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/src/assets/vanilla-process/sundrying.png"
              alt="Vanilla Sourcing"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-700 rounded-full px-5 py-2.5 mb-6">
              <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Step Two
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Sun Drying
              <span className="block text-yellow-600">The Killing Process</span>
            </h2>

            <p className="text-lg text-gray-600 text-justify max-w-xl">
              The Vanilla beans start out quite damp. First, they are dried
              under direct sunlight and then laid in the open air, alternating
              between sun and shade, driving out moisture. Too much sun can
              over-dry the beans and ruin the vanillin, leaving it brittle, and
              rendering the sticks useless. The beans are closely monitored and
              sorted according to the moisture content. Each individual bean is
              hand massaged to make sure drying happens evenly. The process
              lasts 2 months. During this process, the bean turns from green to
              yellow and finally brown.
            </p>
          </div>
        </div>

        {/* Main Content Boxes */}
        <div className={`grid gap-6 ${sundryingSteps.length >= 4 ? 'md:grid-cols-4' : sundryingSteps.length === 3 ? 'md:grid-cols-3': sundryingSteps.length === 2 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
          {sundryingSteps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >

              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>

              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSunDrying;
