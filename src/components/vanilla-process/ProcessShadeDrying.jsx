import React from "react";
import { shadedryingDailyCycle } from "../../data/content";

const ProcessShadeDrying = () => {
  return (
    <section
      id="shade-drying"
      className="section-padding bg-linear-to-b from-blue-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-blue-100/30 to-transparent" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-5 py-2.5 mb-6">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Step Three
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Shade Drying
              <span className="block text-blue-600">The Sweating Process</span>
            </h2>

            <p className="text-lg text-gray-600 text-justify max-w-xl">
              The beans are spread out on shelves in well-ventilated rooms with
              a temperature of about 25-28° C.The beans wrinkle up, turn
              lustrous, and moisture content is around 30-35%.The shade drying
              processes repeated until the weight of the beans is reduced to
              1/3rd of the initial weight. This process requires about 20 to 25
              days.The beans are of a soft leathery touch and can be easily
              rolled around one’s finger.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/src/assets/vanilla-process/shadedrying.png"
              alt="Vanilla Sourcing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content Boxes */}
        <div
          className={`grid gap-6 ${
            shadedryingDailyCycle.length >= 4
              ? "md:grid-cols-4"
              : shadedryingDailyCycle.length === 3
              ? "md:grid-cols-3"
              : shadedryingDailyCycle.length === 2
              ? "md:grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {shadedryingDailyCycle.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>

              <h4 className="font-bold text-gray-900 mb-2">{item.activity}</h4>

              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessShadeDrying;
