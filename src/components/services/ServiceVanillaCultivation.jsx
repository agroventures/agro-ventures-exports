import React, { useState } from "react";
import {
  Users,
  Sun,
  Droplets,
  Thermometer,
  Calendar,
  Hand,
  Package,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  Play,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";
import { yearsOfExperience } from "../../data/content";

const ServiceVanillaCultivation = () => {
  const [activePhase, setActivePhase] = useState(0);

  const cultivationPhases = [
    {
      title: "Site Preparation",
      duration: "1-2 Months",
      icon: Sun,
      description:
        "Proper site selection and preparation is crucial. We help you identify the right location with appropriate shade, soil conditions, and drainage.",
      tasks: [
        "Land clearing and leveling",
        "Shade tree establishment",
        "Support structure installation",
        "Soil preparation and composting",
      ],
    },
    {
      title: "Planting & Care",
      duration: "Year 1-2",
      icon: Droplets,
      description:
        "Proper planting techniques and regular care during the vegetative phase ensures healthy vine development and future productivity.",
      tasks: [
        "Vine planting at optimal spacing",
        "Regular irrigation management",
        "Mulching and fertilization",
        "Vine training and pruning",
      ],
    },
    {
      title: "Flowering & Pollination",
      duration: "Year 3+",
      icon: Hand,
      description:
        "Vanilla flowers must be hand-pollinated within hours of opening. We train farmers in this critical skill for successful bean production.",
      tasks: [
        "Flower identification",
        "Hand pollination techniques",
        "Timing optimization",
        "Record keeping",
      ],
    },
    {
      title: "Harvest & Curing",
      duration: "9 Months Post-Pollination",
      icon: Package,
      description:
        "Proper harvesting and curing processes are essential to develop the characteristic vanilla flavor and aroma.",
      tasks: [
        "Harvest timing (7-9 months)",
        "Killing process",
        "Sweating and drying",
        "Conditioning and grading",
      ],
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "High Returns",
      description:
        "Vanilla is one of the most valuable spices, offering excellent returns per acre",
    },
    {
      icon: Calendar,
      title: "Long-term Income",
      description: "Once established, vanilla vines produce for 10-15 years",
    },
    {
      icon: Droplets,
      title: "Low Water Need",
      description: "Suitable for areas with moderate rainfall and irrigation",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Complete technical guidance from planting to marketing",
    },
  ];

  const requirements = [
    { label: "Climate", value: "Tropical/Sub-tropical" },
    { label: "Temperature", value: "20-30°C" },
    { label: "Rainfall", value: "1500-3000mm/year" },
    { label: "Altitude", value: "Up to 1500m" },
    { label: "Soil", value: "Well-drained, rich in organic matter" },
    { label: "Shade", value: "50-60% shade required" },
  ];

  return (
    <section
      id="vanilla-cultivation"
      className="section-padding bg-linear-to-b from-green-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-green-100/30 to-transparent" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-5 py-2.5 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Service 03
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Vanilla
              <span className="block text-green-600">Cultivation Support</span>
            </h2>
            <p className="text-lg text-gray-600 text-justify leading-relaxed mb-6">
              SLVI has been dedicated to bringing the highest quality products
              to customers around the world for two decades. It takes passion,
              commitment and an ongoing dedication to knowledge, both the
              science of cultivation and the practical aspects of farming, to
              make that happen. SLVI is continually upgrading their methods and
              technology while also being open to feedback from farmers in order
              to deliver fruits and vegetables that embody farm-fresh flavor and
              nutrition. Experience global farm-to-table freshness with SLVI!
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/src/assets/services/img7.png"
                alt="Farmer Training"
                className="w-full h-100 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceVanillaCultivation;
