import React from "react";
import { companies } from "../../data/content";

export default function Companies() {
  return (
    <section className="container-custom relative">
      <div className="mt-20 py-16 border-t border-gray-200">
        
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Companies
            </span>
          </div>
        </div>

        <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-10">
          Group of Companies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition duration-300"
            >
              <img
                src={company.img}
                alt={company.name}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
