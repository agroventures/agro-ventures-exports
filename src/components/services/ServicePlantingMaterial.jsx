import React from "react";
import {
  Leaf,
  Shield,
  Award,
  Microscope,
  CheckCircle,
  Truck,
  ThermometerSun,
  Droplets,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicePlantingMaterial = () => {
  const materials = [
    {
      name: "Vanilla Plants",
      type: "Tissue Culture",
      image:
        "https://images.unsplash.com/photo-1631209121750-a9f656d26a5b?w=400&q=80",
      features: [
        "Disease-free",
        "High yield variety",
        "Tissue cultured",
        "Ready to plant",
      ],
    },
    {
      name: "Black Pepper Vines",
      type: "Rooted Cuttings",
      image:
        "https://images.unsplash.com/photo-1599909533681-74570b4f8a66?w=400&q=80",
      features: [
        "Premium variety",
        "Certified stock",
        "High oil content",
        "Disease resistant",
      ],
    },
    {
      name: "Cardamom Plants",
      type: "Tissue Culture",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80",
      features: [
        "High yielding",
        "Bold variety",
        "Lab tested",
        "Quick maturity",
      ],
    },
    {
      name: "Turmeric Rhizomes",
      type: "Seed Rhizomes",
      image:
        "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80",
      features: [
        "High curcumin",
        "Organic certified",
        "Disease free",
        "Premium grade",
      ],
    },
  ];

  const qualitySteps = [
    {
      icon: Microscope,
      title: "Lab Testing",
      description:
        "Every batch undergoes rigorous laboratory testing for pathogens and genetic purity",
    },
    {
      icon: Shield,
      title: "Certification",
      description:
        "Materials certified by recognized agricultural authorities for quality assurance",
    },
    {
      icon: ThermometerSun,
      title: "Climate Adaptation",
      description:
        "Varieties selected for optimal performance in diverse climate conditions",
    },
    {
      icon: Truck,
      title: "Safe Delivery",
      description:
        "Careful packaging and logistics to ensure plants reach you in perfect condition",
    },
  ];

  const features = [
    "100% disease-free certified materials",
    "Tissue culture technology for uniformity",
    "High-yield, proven varieties",
    "Expert guidance on plantation",
  ];

  return (
    <section
      id="quality-planting-material"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-secondary-50/50 to-transparent" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl h-48">
                  <img
                    src="/src/assets/services/img3.jpg"
                    alt="Quality Planting 1"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-64">
                  <img
                    src="/src/assets/services/img4.jpg"
                    alt="Quality Planting 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl h-64">
                  <img
                    src="/src/assets/services/img5.jpg"
                    alt="Quality Planting 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-48">
                  <img
                    src="/src/assets/services/img6.jpg"
                    alt="Quality Planting 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-700 rounded-full px-5 py-2.5 mb-6">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Service 02
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Quality Planting
              <span className="block text-secondary-600">Material</span>
            </h2>
            <p className="text-lg text-gray-600 text-justify leading-relaxed mb-6">
              SLVI's nursery is at the forefront of the effort to keep vanilla
              farming alive and well in Sri Lanka. The nursery provides healthy,
              robust vanilla vines to farmers for cultivation each year,
              offering an annual supply capacity of 400,000 saplings. Our
              experienced field officers deliver these saplings directly to
              farmers in order to maximize the success rate of cultivation.
              Since its inception, SLVI's nursery has been dedicated to
              providing only the highest quality vanilla vines so that farmers
              can increase their yields and farmers can participate in this
              lucrative opportunity that has been a cornerstone of Indian
              culture for centuries.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* <Link
              to="/contact"
              className="btn-primary bg-secondary-600 hover:bg-secondary-700 shadow-secondary-600/30"
            >
              Order Planting Material
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link> */}
          </div>
        </div>

        {/* Quality Process */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Our Quality Assurance Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {qualitySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center relative z-10">
                  <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-secondary-600" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < qualitySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-secondary-200 z-0" />
                )}
              </div>
            ))}
          </div>
        </div> */}

        {/* Available Materials */}
        {/* <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Available Planting Materials
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-secondary-500 text-white text-xs font-semibold rounded-full">
                      {material.type}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {material.name}
                  </h4>
                  <div className="space-y-2">
                    {material.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary-500 shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServicePlantingMaterial;
