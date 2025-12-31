import React from "react";
import {
  Leaf,
  MapPin,
  Calendar,
  CheckCircle,
  Users,
  ThumbsUp,
  Eye,
  Scissors,
  ArrowRight,
} from "lucide-react";
import { sourcingCriteria } from "../../data/content";

const ProcessSourcing = () => {
  return (
    <section
      id="sourcing"
      className="section-padding bg-linear-to-b from-green-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-green-100/30 to-transparent" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 rounded-full px-5 py-2.5 mb-6">
              <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Step One
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Sourcing
              <span className="block text-green-600">Premium Beans</span>
            </h2>

            <p className="text-lg text-gray-600 text-justify max-w-xl">
              Traditional methods of sourcing proved to be unorganized and
              unpredictable, and this necessitated the founding of Indian
              Vanilla Initiative. So as to lay the foundation for the revival
              and rapid progress of Sustainable Vanilla Cultivation in Sri
              Lanka, Agroventure sources Vanilla beans from SLVI Farmers and the
              Open market. The supervised, systematic and consistent sourcing
              from contracted farmers who follow the cultivation methods
              propagated by SLVI to ensure production of the finest Vanilla.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/vanilla-process/sourcing.jpg"
              alt="Vanilla Sourcing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content Boxes */}
        <div className={`grid gap-6 ${sourcingCriteria.length >= 4 ? 'md:grid-cols-4' : sourcingCriteria.length === 3 ? 'md:grid-cols-3': sourcingCriteria.length === 2 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
          {sourcingCriteria.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-green-600" />
              </div>

              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>

              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSourcing;
