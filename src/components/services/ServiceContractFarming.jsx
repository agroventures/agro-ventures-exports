import React from "react";
import {
  FileCheck
} from "lucide-react";

const ServiceContractFarming = () => {

  return (
    <section
      id="contract-farming"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-linear-to-tr from-blue-50/50 to-transparent" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/src/assets/services/img8.png"
                alt="Contract Farming"
                className="w-full h-100 object-cover"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-5 py-2.5 mb-6">
              <FileCheck className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Service 04
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Contract
              <span className="block text-blue-600">Farming</span>
            </h2>
            <p className="text-lg text-gray-600 text-justify leading-relaxed mb-6">
              SLVI's mission is to empower farmers across Sri Lanka by providing
              them with the tools and resources needed to produce high-quality
              vanilla crops. Through interactive sessions, SLVI familiarizes
              farmers with the benefits of vanilla cultivation and offers a
              farming contract that guarantees 100% crop purchase and a minimum
              selling price. Our team of experts ensures that each step of the
              process meets with world-class standards, from growing and
              harvesting all the way through distillation and export, making
              sure each batch of vanilla produced is of optimal quality and
              freshness. We are committed to bringing our customers an
              unbeatable selection of premium vanilla products sourced directly
              from our trusted network of family-run farms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContractFarming;
