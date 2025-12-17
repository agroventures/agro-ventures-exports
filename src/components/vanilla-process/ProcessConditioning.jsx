import React from "react";
import {
  Timer,
  Package,
  Thermometer,
  Droplets,
  Clock,
  CheckCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { conditioningStages } from "../../data/content";

const ProcessConditioning = () => {

  // const flavorNotes = [
  //   { name: "Vanillin", percentage: 85, color: "amber" },
  //   { name: "Sweet Notes", percentage: 70, color: "yellow" },
  //   { name: "Woody Undertones", percentage: 45, color: "brown" },
  //   { name: "Floral Hints", percentage: 30, color: "pink" }
  // ]

  // const conditions = [
  //   { icon: Thermometer, label: "Temperature", value: "18-25°C", optimal: "Room temperature" },
  //   { icon: Droplets, label: "Humidity", value: "70-80%", optimal: "Controlled environment" },
  //   { icon: Package, label: "Storage", value: "Paper-lined boxes", optimal: "Breathable materials" },
  //   { icon: Clock, label: "Duration", value: "3-6 months", optimal: "Extended aging" }
  // ]

  return (
    <section
      id="conditioning"
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
              src="/src/assets/vanilla-process/conditioning.png"
              alt="Vanilla Sourcing"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 rounded-full px-5 py-2.5 mb-6">
              <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                4
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Step Four
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Conditioning
              <span className="block text-purple-600">Flavor Maturation</span>
            </h2>

            <p className="text-lg text-gray-600 text-justify max-w-xl">
              The sorted beans are bundled (150-250 g each) and tied together
              using a thread. These bundles are kept for conditioning inside
              wooden or metal boxes lined with wax paper for about two months.
              During this time, there is further loss of moisture by 3-4%, this
              helps the aroma and flavour to develop. It is during this stage
              the vanilla bean develops its unique and characteristic flavour
              profile. Finally, the beans are bunched into bundles and stored in
              airtight containers. The beans remain there till they get packaged
              for shipping.s process, the bean turns from green to yellow and
              finally brown.
            </p>
          </div>
        </div>

        {/* Main Content Boxes */}
        <div
          className={`grid gap-6 ${
            conditioningStages.length >= 4
              ? "md:grid-cols-4"
              : conditioningStages.length === 3
              ? "md:grid-cols-3"
              : conditioningStages.length === 2
              ? "md:grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {conditioningStages.map((item, index) => (
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

export default ProcessConditioning;
